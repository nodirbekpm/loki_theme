<?php
add_action('wp_ajax_filter_products', 'filter_products');
add_action('wp_ajax_nopriv_filter_products', 'filter_products');

function filter_products()
{
    $catalog_id = intval($_POST['catalog_id'] ?? 0);
    $category_id = intval($_POST['category_id'] ?? 0);
    $brand_ids = $_POST['brand_ids'] ?? [];
    $shape_ids = $_POST['shape_ids'] ?? [];
    $color_ids = $_POST['color_ids'] ?? [];
    $min_price = floatval($_POST['min_price'] ?? 0);
    $max_price = floatval($_POST['max_price'] ?? PHP_INT_MAX);
    $sizes = $_POST['size_sm_values'] ?? [];
    $installation_ids = $_POST['installation_ids'] ?? [];
    $anti_fog_filters = $_POST['anti_fog'] ?? [];
    $built_clock_filters = $_POST['built_clock'] ?? [];
    $cosmetic_mirror_filters = $_POST['cosmetic_mirror'] ?? [];
    $collection_ids = $_POST['collection_ids'] ?? [];
    $discount_filter = $_POST['discount_filter'] ?? [];
    $in_stock = $_POST['in_stock'] ?? null;
    $paged = intval($_POST['page'] ?? 1);
    $per_page = 5;
    $sorting = $_POST['sorting'] ?? 'popular';


    $products = get_posts([
        'post_type' => 'product',
        'post_status' => 'publish',
        'posts_per_page' => -1,
    ]);

    $filtered = [];

    foreach ($products as $product) {
        $group = get_field('product', $product->ID);
        if (!$group) continue;

        // 1. Katalogga tegishli category orqali filter
        $product_category = $group['category'] ?? null;
        if ($category_id && (!$product_category || $product_category->ID != $category_id)) {
            continue;
        }

        // 2. Brand filter
        if (!empty($brand_ids)) {
            $product_brand = $group['brand'] ?? null;
            if (!$product_brand || !in_array($product_brand->ID, $brand_ids)) {
                continue;
            }
        }

        // 3. Shape filter (checkbox)
        if (!empty($shape_ids)) {
            $shapes = $group['shape'] ?? [];
            $shapes = is_array($shapes) ? $shapes : [$shapes];
            $shape_term_ids = array_map(function ($term) {
                return is_array($term) ? (int)$term['term_id'] : (int)$term;
            }, $shapes);

            if (!array_intersect($shape_term_ids, $shape_ids)) {
                continue;
            }
        }

        // 4. Color filter
        if (!empty($color_ids)) {
            $colors = $group['color'] ?? [];
            $colors = is_array($colors) ? $colors : [$colors];
            $color_term_ids = array_map(function ($term) {
                return is_array($term) ? (int)$term['term_id'] : (int)$term;
            }, $colors);

            if (!array_intersect($color_term_ids, $color_ids)) {
                continue;
            }
        }

        // 5. Price filter (final narx bo‘yicha)
        $price_data = get_discounted_price($product->ID);
        $final_price = $price_data['final'] ?? 0;
        if ($final_price < $min_price || $final_price > $max_price) {
            continue;
        }

        // Katalogga tegishli productlarnigina olish
        if ($catalog_id) {
            $cat_of_cat = $product_category->ID ?? 0;
            $cat_post = get_post($cat_of_cat);
            $cat_catalog = get_field('catalog', $cat_post->ID);

            if (!$cat_catalog || intval($cat_catalog->ID) != $catalog_id) {
                continue;
            }
        }

        // Size lar boyicha
        if (!empty($sizes)) {
            $size_sm = $group['size_sm'] ?? null;
            if ($size_sm === null) continue;

            $normalized_sizes = array_map('floatval', $sizes);
            if (!in_array(floatval($size_sm), $normalized_sizes)) continue;
        }

        // Installation filter
        if (!empty($installation_ids)) {
            $installations = $group['installation'] ?? [];
            $installations = is_array($installations) ? $installations : [$installations];
            $installation_term_ids = array_map(function ($term) {
                return is_array($term) ? (int)$term['term_id'] : (int)$term;
            }, $installations);

            if (!array_intersect($installation_term_ids, $installation_ids)) {
                continue;
            }
        }

        // Anti-fog filter
        if (!empty($anti_fog_filters)) {
            $anti_fog_value = $group['anti_fog'] ?? null;

            if (is_bool($anti_fog_value)) {
                $anti_fog_value = $anti_fog_value ? '1' : '0';
            } elseif ($anti_fog_value === null || $anti_fog_value === '') {
                $anti_fog_value = '0';
            } else {
                $anti_fog_value = strval($anti_fog_value);
            }

            $allowed_values = array_map('strval', $anti_fog_filters);

            if (!in_array($anti_fog_value, $allowed_values, true)) {
                continue;
            }
        }

        // built-clock qismi
        if (!empty($built_clock_filters)) {
            $built_clock_value = $group['built_clock'] ?? null;

            if (is_bool($built_clock_value)) {
                $built_clock_value = $built_clock_value ? '1' : '0';
            } elseif ($built_clock_value === null || $built_clock_value === '') {
                $built_clock_value = '0';
            } else {
                $built_clock_value = strval($built_clock_value);
            }

            $allowed_values = array_map('strval', $built_clock_filters);

            if (!in_array($built_clock_value, $allowed_values, true)) {
                continue;
            }
        }

        // cosmetic mirror
        if (!empty($cosmetic_mirror_filters)) {
            $cosmetic_value = $group['cosmetic_mirror'] ?? null;

            if (is_bool($cosmetic_value)) {
                $cosmetic_value = $cosmetic_value ? '1' : '0';
            } elseif ($cosmetic_value === null || $cosmetic_value === '') {
                $cosmetic_value = '0';
            } else {
                $cosmetic_value = strval($cosmetic_value);
            }

            $allowed_cosmetic_values = array_map('strval', $cosmetic_mirror_filters);

            if (!in_array($cosmetic_value, $allowed_cosmetic_values, true)) {
                continue;
            }
        }

        // collection
        if (!empty($collection_ids)) {
            $collections = $group['collection'] ?? [];
            $collections = is_array($collections) ? $collections : [$collections];
            $product_collection_ids = array_map(function ($c) {
                return is_array($c) ? (int)$c['term_id'] : (int)$c;
            }, $collections);

            if (!array_intersect($product_collection_ids, $collection_ids)) {
                continue;
            }
        }

        // discount
        if (!empty($discount_filter)) {
            $price_data = get_discounted_price($product->ID);
            $discount_value = isset($price_data['discount']) ? floatval($price_data['discount']) : 0;
            $has_discount = $discount_value > 0;

            if (in_array('1', $discount_filter, true) && !in_array('0', $discount_filter, true)) {
                if (!$has_discount) continue;
            } elseif (!in_array('1', $discount_filter, true) && in_array('0', $discount_filter, true)) {
                if ($has_discount) continue;
            }
        }

        // In-stock filter
        if ($in_stock !== null) {
            $in_stock_value = $group['in_stock'] ?? null;

            if ($in_stock === '1' && empty($in_stock_value)) {
                continue;
            }

            if ($in_stock === '0' && !empty($in_stock_value)) {
                continue;
            }
        }

        // sorting
        if ($sorting === 'price-asc') {
            usort($filtered, function ($a, $b) {
                $priceA = get_discounted_price($a->ID)['final'] ?? 0;
                $priceB = get_discounted_price($b->ID)['final'] ?? 0;
                return $priceA <=> $priceB;
            });
        } elseif ($sorting === 'price-desc') {
            usort($filtered, function ($a, $b) {
                $priceA = get_discounted_price($a->ID)['final'] ?? 0;
                $priceB = get_discounted_price($b->ID)['final'] ?? 0;
                return $priceB <=> $priceA;
            });
        } elseif ($sorting === 'newest') {
            usort($filtered, function ($a, $b) {
                return strtotime($b->post_date) <=> strtotime($a->post_date);
            });
        } elseif ($sorting === 'popular' || $sorting === 'rating') {
            usort($filtered, function ($a, $b) {
                $viewsA = (int)get_post_meta($a->ID, 'views', true);
                $viewsB = (int)get_post_meta($b->ID, 'views', true);
                return $viewsB <=> $viewsA;
            });
        }

        $filtered[] = $product;

    }

// Filtirdan o‘tganlar soni
    $total_count = count($filtered);

// Sahifalash
    $offset = ($paged - 1) * $per_page;
    $paged_products = array_slice($filtered, $offset, $per_page);
    $total_pages = ceil($total_count / $per_page);

// Output uchun HTML yig‘ish
    ob_start();

    // Natijani HTML ko‘rinishda chiqaramiz
    foreach ($paged_products as $product) {
        $group = get_field('product', $product->ID);
        $prices = get_discounted_price($product->ID);
        $image = $group['image']['url'] ?? get_the_post_thumbnail_url($product->ID, 'medium');
        $brand_title = get_the_title($group['brand'] ?? 0);
        $product_code = get_field('product_code', $product->ID);
        $description = $group['short_description'] ?? '';
        $link = get_permalink($product->ID);
        ?>
        <div class="product-card">
            <div class="product-image">
                <img src="<?= esc_url($image) ?>" alt="<?= esc_attr($brand_title) ?>" class="product-img">
            </div>
            <div class="product-card__top">
                <img src="<?= get_template_directory_uri() ?>/assets/img/checking.svg" alt="">
                <img src="<?= get_template_directory_uri() ?>/assets/img/addlikes.svg" alt="">
            </div>
            <div class="product-details">
                <div class="product-details__cont">
                    <div class="product-title"><?= esc_html($brand_title) ?></div>
                    <div class="product-article">Код: <?= esc_html($product_code) ?></div>
                </div>
                <a href="<?= esc_url($link) ?>" style="cursor: pointer; color: #000;" class="product-description"><?= esc_html($description) ?></a>
                <div class="product-wrap">
                    <div class="product-prices">
                        <div class="product-prices-wrap">
                            <?php if ($prices['discount'] > 0): ?>
                                <span class="current-price"><?= number_format($prices['original'], 0, '', ' ') ?> ₽</span>
                                <span class="product-badge">-<?= $prices['discount'] ?>%</span>
                            <?php endif; ?>
                        </div>
                        <span class="old-price"><?= number_format($prices['final'], 0, '', ' ') ?> ₽</span>
                    </div>
                    <button class="add-to-cart-btn" data-product-id="<?php echo $product->ID; ?>">В корзину</button>
                </div>
                <div class="product-yandex">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/plus.svg" alt="">
                    1 199 баллов Плюса кэшбэк в
                    <img src="<?= get_template_directory_uri() ?>/assets/img/ya-pay.svg" alt="">
                </div>
                <div class="product-split">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/cask.svg" alt="">
                    х4 платежа в
                    <img src="<?= get_template_directory_uri() ?>/assets/img/ya-split.svg" alt="">
                </div>
            </div>
        </div>
        <?php
    }

    $html = ob_get_clean();

// JS ga JSON qaytariladi
    echo json_encode([
        'html'       => $html,
        'total'      => $total_count,
        'page'       => $paged,
        'pages'      => $total_pages,
        'per_page'   => $per_page,
    ]);
    wp_die();
}

<?php
add_action('wp_ajax_filter_products', 'filter_products');
add_action('wp_ajax_nopriv_filter_products', 'filter_products');

function filter_products()
{
    $catalog_id   = intval($_POST['catalog_id'] ?? 0);
    $category_id  = intval($_POST['category_id'] ?? 0);
    $brand_ids    = $_POST['brand_ids'] ?? [];
    $shape_ids    = $_POST['shape_ids'] ?? [];
    $color_ids    = $_POST['color_ids'] ?? [];
    $min_price    = floatval($_POST['min_price'] ?? 0);
    $max_price    = floatval($_POST['max_price'] ?? PHP_INT_MAX);
    $sizes = $_POST['size_sm_values'] ?? [];

    $products = get_posts([
        'post_type'      => 'product',
        'post_status'    => 'publish',
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
        if ($sizes) {
            $size_sm = $group['size_sm'] ?? null;
            if ($size_sm === null || !in_array($size_sm, $sizes)) continue;
        }

        $filtered[] = $product;
    }

    // Natijani HTML ko‘rinishda chiqaramiz
    foreach ($filtered as $product) {
        $group = get_field('product', $product->ID);
        $prices = get_discounted_price($product->ID);
        $image = $group['image']['url'] ?? get_the_post_thumbnail_url($product->ID, 'medium');
        $brand_title = get_the_title($group['brand'] ?? 0);
        $product_code = get_field('product_code', $product->ID);
        $description = $group['short_description'] ?? '';
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
                <div class="product-description"><?= esc_html($description) ?></div>
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
                    <button class="add-to-cart-btn">В корзину</button>
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

    wp_die();
}

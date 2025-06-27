<?php
/*
 * Template Name: Каталог
 */
get_header();

$catalog_id = get_the_ID();
$categories = get_posts([
    'post_type' => 'product_category',
    'meta_key' => 'catalog',
    'meta_value' => $catalog_id,
    'post_status' => 'publish',
    'posts_per_page' => -1,
]);
?>
    <div class="catalog" id="product-catalog" data-catalog-id="<?= get_the_ID() ?>">
        <div class="container">
            <div class="catalog_info">
                <a href="#" class="text">Каталог</a>
                <div class="text"><?php the_title(); ?></div>
            </div>

            <div class="catalog_title">
                <?php the_title(); ?>
            </div>

            <div class="catalog-top-controls">
                <div class="popular-categories">
                    <?php if ($categories): ?>
                        <div class="category-buttons">
                            <?php foreach ($categories as $index => $cat): ?>
                                <a href="#"
                                   class="category-btn"><?= esc_html(wp_trim_words($cat->post_title, 1, '')) ?></a>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
                <div class="sorting">
                    <span class="sorting-label">Сортировать по:</span>
                    <div class="filter_mobile" onclick="toggleCatalogFilters()">Фильтры</div>
                    <select class="sorting-select">
                        <option value="popular">Популярности</option>
                        <option value="price-asc">Цене (по возрастанию)</option>
                        <option value="price-desc">Цене (по убыванию)</option>
                        <option value="newest">Новинкам</option>
                        <option value="rating">Рейтингу</option>
                    </select>
                </div>


            </div>


            <div class="catalog-container">

                <aside class="catalog-filters" id="catalog-filters">
                    <div class="filter_container">
                        <div class="filter_close_button" onclick="window.hideCatalogFilters()"><img src="<?php echo get_template_directory_uri() ?>/assets/img/close.svg"
                                                                                                    alt=""></div>
                        <div class="filter-section">
                            <?php if ($categories): ?>
                                <h3 class="filter-title">Категории</h3>
                                <div class="filter-section-categorys">
                                    <?php foreach ($categories as $index => $cat): ?>
                                        <div class="filter-section-category <?= $index === 0 ? 'filter-section-category_active' : '' ?>"
                                             data-cat-id="<?= esc_attr($cat->ID) ?>">
                                            <?= esc_html($cat->post_title) ?>
                                        </div>
                                    <?php endforeach; ?>
                                </div>

                            <?php endif; ?>
                        </div>

                        <?php
                        $catalog_id = get_the_ID();
                        $min_price = PHP_INT_MAX;
                        $max_price = 0;

                        $all_products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'numberposts' => -1,
                        ]);

                        foreach ($all_products as $product) {
                            $group = get_field('product', $product->ID);
                            if (!$group) continue;

                            $category = $group['category'] ?? null;

                            if (!$category) continue;

                            if (is_array($category)) {
                                $category_id = $category[0]->ID ?? 0;
                            } elseif (is_object($category)) {
                                $category_id = $category->ID;
                            } else {
                                $category_id = (int)$category;
                            }

                            if (!$category_id) continue;

                            $linked_catalog = get_field('catalog', $category_id);

                            if (is_array($linked_catalog)) {
                                $linked_catalog_id = $linked_catalog[0]->ID ?? 0;
                            } elseif (is_object($linked_catalog)) {
                                $linked_catalog_id = $linked_catalog->ID;
                            } else {
                                $linked_catalog_id = (int)$linked_catalog;
                            }

                            if ($linked_catalog_id !== $catalog_id) continue;

                            $price_data = get_discounted_price($product->ID);
                            $price = $price_data['final'] ?? 0;

                            if ($price <= 0) continue;

                            $min_price = min($min_price, $price);
                            $max_price = max($max_price, $price);
                        }

                        if ($min_price === PHP_INT_MAX) $min_price = 0;
                        if ($max_price === 0) $max_price = 100000;

                        ?>
                        <div class="filter-section">
                            <h3 class="filter-title">Цена, ₽</h3>
                            <div class="price-range-slider">

                                <div class="price-inputs">
                                    <input type="number" class="price-input min-input" value="<?php echo esc_attr($min_price); ?>">
                                    <span class="price-separator">-</span>
                                    <input type="number" class="price-input max-input" value="<?php echo esc_attr($max_price); ?>">
                                </div>

                                <div class="range-slider">
                                    <input type="range" class="min-price" min="<?php echo esc_attr($min_price); ?>" max="<?php echo esc_attr($max_price); ?>" value="<?php echo esc_attr($min_price); ?>">
                                    <input type="range" class="max-price" min="<?php echo esc_attr($min_price); ?>" max="<?php echo esc_attr($max_price); ?>" value="<?php echo esc_attr($max_price); ?>">
                                </div>
                            </div>
                        </div>


                        <?php
                        $catalog_id = get_the_ID();

                        // Faqat shu katalogdagi mahsulotlarni olib kelamiz
                        $filtered_products = [];

                        $all_products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'numberposts' => -1,
                        ]);

                        foreach ($all_products as $product) {
                            $group = get_field('product', $product->ID);
                            if (!$group) continue;

                            $category = $group['category'] ?? null;
                            if (!$category) continue;

                            // Agar $category object emas, balki ID bo‘lsa - to‘g‘rilab olamiz
                            $category_id = is_object($category) ? $category->ID : (int)$category;
                            $linked_catalog = get_field('catalog', $category_id);
                            $linked_catalog_id = is_object($linked_catalog) ? $linked_catalog->ID : (int)$linked_catalog;

                            if ($linked_catalog_id === $catalog_id) {
                                $filtered_products[] = [
                                    'id' => $product->ID,
                                    'group' => $group,
                                ];
                            }
                        }

                        $brands = get_posts(['post_type' => 'brand', 'post_status' => 'publish', 'numberposts' => -1]);

                        if ($brands): ?>
                            <div class="filter-section">
                                <h3 class="filter-title">Бренд</h3>
                                <div class="filter-checkboxes">
                                    <?php foreach ($brands as $brand):
                                        $count = 0;
                                        foreach ($filtered_products as $p) {
                                            $brand_obj = $p['group']['brand'] ?? null;
                                            if ($brand_obj && is_object($brand_obj) && $brand_obj->ID == $brand->ID) {
                                                $count++;
                                            }
                                        }
//                                        if ($count === 0) continue;
                                        ?>
                                        <label class="filter-checkbox">
                                            <input type="checkbox" class="brand-filter" value="<?= $brand->ID ?>">
                                            <span class="checkmark"></span>
                                            <span class="filter-name"><?= esc_html($brand->post_title) ?></span>
                                            <span class="filter-count">(<?= $count ?>)</span>
                                        </label>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                        <?php
                        $shapes = get_terms(['taxonomy' => 'shape', 'hide_empty' => false]);
                        $shape_counts = [];

                        foreach ($filtered_products as $p) {
                            $shape = $p['group']['shape'] ?? null;
                            if (!$shape) continue;

                            if (is_array($shape)) {
                                foreach ($shape as $item) {
                                    $term_id = is_array($item) ? $item['term_id'] : (int)$item;
                                    $shape_counts[$term_id] = ($shape_counts[$term_id] ?? 0) + 1;
                                }
                            } else {
                                $term_id = is_array($shape) ? $shape['term_id'] : (int)$shape;
                                $shape_counts[$term_id] = ($shape_counts[$term_id] ?? 0) + 1;
                            }
                        }

                        if (!empty($shapes)): ?>
                            <div class="filter-section">
                                <h3 class="filter-title">Форма</h3>
                                <div class="filter-checkboxes">
                                    <?php foreach ($shapes as $shape):
                                        $count = $shape_counts[$shape->term_id] ?? 0;
//                                        if ($count === 0) continue;
                                        ?>
                                        <label class="filter-checkbox">
                                            <input type="checkbox" class="shape-filter"
                                                   data-term-id="<?= $shape->term_id ?>">
                                            <span class="checkmark"></span>
                                            <span class="filter-name"><?= esc_html($shape->name) ?></span>
                                            <span class="filter-count">(<?= $count ?>)</span>
                                        </label>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>

                        <?php
                        $colors = get_terms(['taxonomy' => 'color', 'hide_empty' => false]);
                        $color_counts = [];

                        foreach ($filtered_products as $p) {
                            $color = $p['group']['color'] ?? null;
                            if (!$color) continue;

                            if (is_array($color)) {
                                foreach ($color as $item) {
                                    $term_id = is_array($item) ? $item['term_id'] : (int)$item;
                                    $color_counts[$term_id] = ($color_counts[$term_id] ?? 0) + 1;
                                }
                            } else {
                                $term_id = is_array($color) ? $color['term_id'] : (int)$color;
                                $color_counts[$term_id] = ($color_counts[$term_id] ?? 0) + 1;
                            }
                        }

                        if (!empty($colors)): ?>
                            <div class="filter-section">
                                <h3 class="filter-title">Цвет</h3>
                                <div class="filter-checkboxes">
                                    <?php foreach ($colors as $color):
                                        $count = $color_counts[$color->term_id] ?? 0;
//                                        if ($count === 0) continue;
                                        ?>
                                        <label class="filter-checkbox">
                                            <input type="checkbox" class="color-filter"
                                                   data-term-id="<?= $color->term_id ?>">
                                            <span class="checkmark"></span>
                                            <span class="filter-name"><?= esc_html($color->name) ?></span>
                                            <span class="filter-count">(<?= $count ?>)</span>
                                        </label>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>



                        <?php
                        $catalog_id = get_the_ID();

                        $all_products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'numberposts' => -1,
                        ]);

                        $size_counts = [];

                        foreach ($all_products as $product) {
                            $fields = get_field('product', $product->ID);
                            if (!$fields) continue;

                            $category = $fields['category'] ?? null;
                            if (!$category) continue;

                            $category_id = is_object($category) ? $category->ID : (int)$category;

                            $linked_catalog = get_field('catalog', $category_id);
                            $linked_catalog_id = is_object($linked_catalog) ? $linked_catalog->ID : (int)$linked_catalog;

                            if ($linked_catalog_id !== $catalog_id) continue;

                            $size = $fields['size_sm'] ?? null;
                            if ($size === null || $size === '') continue;

                            $size = floatval($size);

                            if (!isset($size_counts[$size])) {
                                $size_counts[$size] = 0;
                            }
                            $size_counts[$size]++;
                        }

                        if (!empty($size_counts)) :
                            ksort($size_counts);
                            ?>
                            <div class="filter-section">
                                <h3 class="filter-title">Размер</h3>
                                <div class="filter-checkboxes">
                                    <?php foreach ($size_counts as $size => $count): ?>
                                        <label class="filter-checkbox">
                                            <input type="checkbox" class="size-filter" value="<?= esc_attr($size) ?>">
                                            <span class="checkmark"></span>
                                            <span class="filter-name"><?= esc_html($size) ?> см</span>
                                            <span class="filter-count">(<?= esc_html($count) ?>)</span>
                                        </label>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>


                        <div class="filter-section">
                            <h3 class="filter-title">Установка</h3>
                            <div class="filter-checkboxes">
                                <?php
                                $catalog_id = get_the_ID();
                                $terms = get_terms([
                                    'taxonomy' => 'installation',
                                    'hide_empty' => false,
                                ]);

                                $installation_counts = [];

                                $all_products = get_posts([
                                    'post_type' => 'product',
                                    'post_status' => 'publish',
                                    'posts_per_page' => -1,
                                ]);

                                foreach ($all_products as $product) {
                                    $group = get_field('product', $product->ID);
                                    if (!$group) continue;

                                    $category = $group['category'] ?? null;
                                    if (!$category) continue;
                                    $category_id = is_object($category) ? $category->ID : (int)$category;
                                    $linked_catalog = get_field('catalog', $category_id);
                                    $linked_catalog_id = is_object($linked_catalog) ? $linked_catalog->ID : (int)$linked_catalog;

                                    if ($linked_catalog_id !== $catalog_id) continue;

                                    $installations = $group['installation'] ?? [];
                                    if (!is_array($installations)) $installations = [$installations];

                                    foreach ($installations as $ins) {
                                        $term_id = is_array($ins) ? $ins['term_id'] : (int)$ins;
                                        $installation_counts[$term_id] = ($installation_counts[$term_id] ?? 0) + 1;
                                    }
                                }

                                if (!empty($terms) && !is_wp_error($terms)) :
                                    foreach ($terms as $term):
                                        $count = $installation_counts[$term->term_id] ?? 0;
                                        ?>
                                        <label class="filter-checkbox">
                                            <input type="checkbox" class="installation-filter"
                                                   data-term-id="<?= esc_attr($term->term_id) ?>">
                                            <span class="checkmark"></span>
                                            <span class="filter-name"><?= esc_html($term->name) ?></span>
                                            <span class="filter-count">(<?= esc_html($count) ?>)</span>
                                        </label>
                                    <?php endforeach;
                                endif;
                                ?>
                            </div>
                        </div>


                        <?php
                        $catalog_id = get_the_ID();

                        $yes_count = 0;
                        $no_count = 0;

                        $products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'numberposts' => -1,
                        ]);

                        foreach ($products as $product) {
                            $group = get_field('product', $product->ID);
                            if (!$group) continue;

                            $category = $group['category'] ?? null;
                            if (!$category) continue;

                            $category_id = is_object($category) ? $category->ID : (int)$category;
                            $linked_catalog = get_field('catalog', $category_id);
                            $linked_catalog_id = is_object($linked_catalog) ? $linked_catalog->ID : (int)$linked_catalog;

                            if ($linked_catalog_id !== $catalog_id) continue;

                            $anti_fog = $group['anti_fog'] ?? null;

                            if ($anti_fog) {
                                $yes_count++;
                            } else {
                                $no_count++;
                            }
                        }
                        ?>

                        <div class="filter-section">
                            <h3 class="filter-title">Функция антизапотевания</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" class="anti-fog-filter" value="1">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(<?= $yes_count ?>)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" class="anti-fog-filter" value="0">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(<?= $no_count ?>)</span>
                                </label>
                            </div>
                        </div>


                        <?php
                        $clock_yes_count = 0;
                        $clock_no_count = 0;
                        $catalog_id = get_the_ID();

                        $products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'numberposts' => -1,
                        ]);

                        foreach ($products as $product) {
                            $group = get_field('product', $product->ID);
                            if (!$group) continue;

                            $category = $group['category'] ?? null;
                            if (!$category) continue;

                            $category_id = is_object($category) ? $category->ID : (int)$category;
                            $linked_catalog = get_field('catalog', $category_id);
                            $linked_catalog_id = is_object($linked_catalog) ? $linked_catalog->ID : (int)$linked_catalog;

                            if ($linked_catalog_id !== $catalog_id) continue;

                            $built_clock = $group['built_clock'] ?? null;

                            if ($built_clock) {
                                $clock_yes_count++;
                            } else {
                                $clock_no_count++;
                            }
                        }
                        ?>

                        <div class="filter-section">
                            <h3 class="filter-title">Встроенные часы</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" class="built-clock-filter" value="1">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(<?= $clock_yes_count ?>)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" class="built-clock-filter" value="0">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(<?= $clock_no_count ?>)</span>
                                </label>
                            </div>
                        </div>


                        <?php
                        $cosmetic_yes_count = 0;
                        $cosmetic_no_count = 0;
                        $catalog_id = get_the_ID();

                        $products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'numberposts' => -1,
                        ]);

                        foreach ($products as $product) {
                            $group = get_field('product', $product->ID);
                            if (!$group) continue;

                            $category = $group['category'] ?? null;
                            if (!$category) continue;

                            $category_id = is_object($category) ? $category->ID : (int)$category;
                            $linked_catalog = get_field('catalog', $category_id);
                            $linked_catalog_id = is_object($linked_catalog) ? $linked_catalog->ID : (int)$linked_catalog;

                            if ($linked_catalog_id !== $catalog_id) continue;

                            $cosmetic = $group['cosmetic_mirror'] ?? null;

                            if ($cosmetic) {
                                $cosmetic_yes_count++;
                            } else {
                                $cosmetic_no_count++;
                            }
                        }
                        ?>

                        <div class="filter-section">
                            <h3 class="filter-title">Косметическое зеркало</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" class="cosmetic-mirror-filter" value="1">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(<?= $cosmetic_yes_count ?>)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" class="cosmetic-mirror-filter" value="0">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(<?= $cosmetic_no_count ?>)</span>
                                </label>
                            </div>
                        </div>


                        <?php
                        $catalog_id = get_the_ID();

                        $collection_terms = get_terms([
                            'taxonomy' => 'collection',
                            'hide_empty' => false,
                        ]);

                        if (!empty($collection_terms) && !is_wp_error($collection_terms)) :
                            $collection_counts = [];

                            // Barcha mahsulotlarni olish
                            $products = get_posts([
                                'post_type' => 'product',
                                'post_status' => 'publish',
                                'numberposts' => -1,
                            ]);

                            foreach ($products as $product) {
                                $group = get_field('product', $product->ID);
                                if (!$group) continue;

                                $category = $group['category'] ?? null;
                                if (!$category) continue;

                                $category_id = is_object($category) ? $category->ID : (int)$category;
                                $linked_catalog = get_field('catalog', $category_id);
                                $linked_catalog_id = is_object($linked_catalog) ? $linked_catalog->ID : (int)$linked_catalog;

                                if ($linked_catalog_id !== $catalog_id) continue;

                                $collections = $group['collection'] ?? [];

                                if (!is_array($collections)) {
                                    $collections = [$collections];
                                }

                                foreach ($collections as $term) {
                                    $term_id = is_array($term) ? ($term['term_id'] ?? 0) : (int)$term;
                                    if (!$term_id) continue;

                                    if (!isset($collection_counts[$term_id])) {
                                        $collection_counts[$term_id] = 0;
                                    }
                                    $collection_counts[$term_id]++;
                                }
                            }
                            ?>

                            <div class="filter-section">
                                <h3 class="filter-title">Коллекция</h3>
                                <div class="filter-checkboxes">
                                    <?php foreach ($collection_terms as $term): ?>
                                        <label class="filter-checkbox">
                                            <input type="checkbox" class="collection-filter"
                                                   data-term-id="<?= $term->term_id ?>">
                                            <span class="checkmark"></span>
                                            <span class="filter-name"><?= esc_html($term->name) ?></span>
                                            <span class="filter-count">(<?= $collection_counts[$term->term_id] ?? 0 ?>)</span>
                                        </label>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>



                        <?php
                        $catalog_id = get_the_ID();

                        $yes_count = 0;
                        $no_count = 0;

                        $products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'numberposts' => -1,
                        ]);

                        foreach ($products as $product) {
                            $group = get_field('product', $product->ID);
                            if (!$group) continue;

                            $category = $group['category'] ?? null;
                            if (!$category) continue;

                            $category_id = is_object($category) ? $category->ID : (int)$category;
                            $linked_catalog = get_field('catalog', $category_id);
                            $linked_catalog_id = is_object($linked_catalog) ? $linked_catalog->ID : (int)$linked_catalog;

                            if ($linked_catalog_id !== $catalog_id) continue;

                            $prices = get_discounted_price($product->ID);
                            $discount = $prices['discount'] ?? 0;

                            if ($discount > 0) {
                                $yes_count++;
                            } else {
                                $no_count++;
                            }
                        }
                        ?>

                        <div class="filter-section">
                            <h3 class="filter-title">Товар со скидкой</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" class="discount-filter" value="1">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(<?= $yes_count ?>)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" class="discount-filter" value="0">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(<?= $no_count ?>)</span>
                                </label>
                            </div>
                        </div>


                        <?php
                        $catalog_id = get_the_ID();

                        $in_stock_count = 0;

                        $products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'posts_per_page' => -1,
                        ]);

                        foreach ($products as $product) {
                            $group = get_field('product', $product->ID);
                            if (!$group) continue;

                            $category = $group['category'] ?? null;
                            if (!$category) continue;

                            $category_id = is_object($category) ? $category->ID : (int)$category;
                            $linked_catalog = get_field('catalog', $category_id);
                            $linked_catalog_id = is_object($linked_catalog) ? $linked_catalog->ID : (int)$linked_catalog;

                            if ($linked_catalog_id !== $catalog_id) continue;

                            if (!empty($group['in_stock'])) {
                                $in_stock_count++;
                            }
                        }
                        ?>


                        <div class="filter-section">
                            <h3 class="filter-title">Показать</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" class="in-stock-filter" value="1" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Только в наличии</span>
                                    <span class="filter-count">(<?= $in_stock_count ?>)</span>
                                </label>
                            </div>
                        </div>


                        <div class="action_buttons">

                            <div class="btn_clear action_button">
                                <a href="">Сбросить</a>
                            </div>

                            <div class="btn_show action_button">
                                <a href="">Показать</a>
                            </div>

                        </div>


                    </div>
                </aside>


                <div class="catalog-products-wrap">
                    <main class="catalog-products">
<!--                        <div class="loading-spinner" style="display: flex; justify-content: left; align-items: center;">-->
<!--                            <style>-->
<!--                                @keyframes fadeInOut {-->
<!--                                    0%, 100% { opacity: 0; }-->
<!--                                    50%      { opacity: 1; }-->
<!--                                }-->
<!--                            </style>-->
<!--                            <div style="-->
<!--                                font-size: 20px;-->
<!--                                color: #1C1230;-->
<!--                                animation: fadeInOut 1.5s infinite;-->
<!--                            ">-->
<!--                                Loading...-->
<!--                            </div>-->
<!--                        </div>-->

                    </main>


                    <div class="catalog-bottom-controls">
                        <button class="load-more">Показать еще</button>
                        <div class="catalog-bottom-controls-wrap">
                            <div class="pagination-count">
                                Показаны 0 из 0
                            </div>
                            <div class="pagination-bottom">
                                <!-- Sahifalar bu yerda paydo bo‘ladi -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="simple">
        <div class="container">
            <div class="simple-big-text">
                Добро пожаловать в Loki.ru — ваш идеальный источник тепла и уюта! <br>
                Наш интернет-магазин предлагает эксклюзивные печи и камины премиального качества, которые вы можете
                заказать с доставкой в Москву, Санкт-Петербург и другие города России. В каталоге Loki.ru представлены
                десятки моделей, сочетающих современный дизайн и передовые технологии. Здесь каждый найдет вариант,
                который не только станет сердцем интерьера, но и подарит тепло на долгие годы. <br>
                Что мы предлагаем? <br>
                Разновидности печей и каминов:
                <ul>
                    <li>Дровяные камины. Классическое решение для ценителей живого огня. Модели с чугунными топками,
                        стеклянными дверцами и системой длительного горения идеально подходят для загородных домов.
                    </li>
                    <li>Газовые камины. Современные решения с мгновенным розжигом и регулируемой мощностью. Безопасны,
                        экономичны и не требуют дров — идеальный выбор для городских интерьеров.
                    </li>
                    <li>Электрические печи. Стильная альтернатива для квартир и офисов. Реалистичное 3D-пламя, бесшумная
                        работа и возможность установки без дымохода.
                    </li>
                    <li>Печи-камины длительного горения. Универсальные модели для обогрева больших помещений. Высокий
                        КПД, эко-дизайн и возможность интеграции в систему водяного отопления.
                    </li>
                </ul>


                Коллекции Loki.ru<br>
                Вдохновляйтесь нашими линиями, где скандинавский минимализм встречается с инновациями:

                <ul>
                    <li>Nordic Flame</li>
                    <li>Ember Stone</li>
                    <li>Steel Horizon</li>
                    <li>Viking Core</li>
                    <li>Sky Hearth</li>
                    <li>Eternalis</li>
                    <li>Loki Pro</li>
                    <li>Frost & Fire</li>
                </ul>

                Как выбрать идеальную модель?<br>
                Ориентируйтесь на ключевые параметры:<br>
                <ul>
                    <li>Тип топлива. Дрова, газ, электричество или пеллеты — подберите вариант под ваши условия.</li>
                    <li>Материал. Чугун, сталь или керамика. Чугун долго сохраняет тепло, сталь легче, а керамика
                        устойчива к перепадам температур.
                    </li>
                    <li>Мощность. Рассчитайте необходимую производительность исходя из площади помещения.</li>
                    <li>Дизайн. Выберите стиль: хай-тек с хромированными элементами, классику с коваными деталями или
                        кантри с каменной облицовкой.
                    </li>
                    <li>Дополнительные функции. Автоматический розжиг, терморегулятор, защитное стекло, встроенный
                        теплообменник или система самоочистки.
                    </li>
                </ul>

                В Loki.ru вы найдете печи и камины на любой бюджет — от компактных электрокаминов до роскошных авторских
                моделей. Позвоните нам, чтобы получить консультацию или оформить заказ. Создайте атмосферу тепла и
                комфорта вместе с Loki.ru!<br>
                Loki.ru — там, где технологии встречают пламя.
            </div>
        </div>
    </div>

    <div class="request-form">
        <div class="container">
            <div class="form-title form-title-block">Поможем с выбором</div>
            <div class="form-subtitle form-title-block">Наши эксперты дадут исчерпывающие консультации по выбору
                продукции и помогут подобрать оптимальный вариант
            </div>

            <div class="form-content">
                <div class="form-title form-title-none">Поможем с выбором</div>
                <div class="form-subtitle form-title-none">Наши эксперты дадут исчерпывающие консультации по выбору
                    продукции и помогут подобрать оптимальный вариант
                </div>

                <?php echo do_shortcode('[contact-form-7 id="1174d82" title="Поможем с выбором"]'); ?>

            </div>
            <div class="form-image">
                <img src="<?php echo get_template_directory_uri() ?>/assets/img/formimg2.png" alt="Форма обратной связи"
                     class="form-img">
            </div>
        </div>
    </div>
<?php get_footer(); ?><?php

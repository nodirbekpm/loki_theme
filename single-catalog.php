<?php
/*
 * Template Name: Katalog
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
                        <div class="filter_close_button" onclick="window.hideCatalogFilters()"><img src="img/close.svg"
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
                        <div class="filter-section">
                            <h3 class="filter-title">Цена, ₽</h3>
                            <div class="price-range-slider">

                                <div class="price-inputs">
                                    <input type="number" class="price-input min-input" value="0">
                                    <span class="price-separator">-</span>
                                    <input type="number" class="price-input max-input" value="2390000">
                                </div>
                                <div class="range-slider">
                                    <input type="range" class="min-price" min="0" max="2390000" value="0">
                                    <input type="range" class="max-price" min="0" max="2390000" value="2390000">
                                </div>
                            </div>
                        </div>

                        <!--                        --><?php
                        //                        $brands = get_posts([
                        //                            'post_type' => 'brand',
                        //                            'post_status' => 'publish',
                        //                            'numberposts' => -1,
                        //                        ]);
                        //
                        //                        if ($brands):
                        //                            ?>
                        <!--                            <div class="filter-section">-->
                        <!--                                <h3 class="filter-title">Бренд</h3>-->
                        <!--                                <div class="filter-checkboxes">-->
                        <!--                                    --><?php //foreach ($brands as $brand):
                        //                                        $products = get_posts([
                        //                                            'post_type' => 'product',
                        //                                            'post_status' => 'publish',
                        //                                            'numberposts' => -1,
                        //                                            'meta_query' => [
                        //                                                [
                        //                                                    'key' => 'product_brand',
                        //                                                    'value' => $brand->ID,
                        //                                                    'compare' => '=',
                        //                                                ],
                        //                                            ],
                        //                                            'fields' => 'ids',
                        //                                        ]);
                        //                                        $product_count = count($products);
                        //                                        ?>
                        <!--                                        <label class="filter-checkbox">-->
                        <!--                                            <input type="checkbox" class="brand-filter" value="-->
                        <?php //= $brand->ID ?><!--">-->
                        <!--                                            <span class="checkmark"></span>-->
                        <!--                                            <span class="filter-name">-->
                        <?php //= esc_html(get_the_title($brand)) ?><!--</span>-->
                        <!--                                            <span class="filter-count">(-->
                        <?php //= esc_html($product_count) ?><!--)</span>-->
                        <!--                                        </label>-->
                        <!--                                    --><?php //endforeach; ?>
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        --><?php //endif; ?>
                        <!---->
                        <!---->
                        <!--                        --><?php
                        //                        $shapes = get_terms([
                        //                            'taxonomy' => 'shape',
                        //                            'hide_empty' => false,
                        //                        ]);
                        //
                        //                        if (!empty($shapes) && !is_wp_error($shapes)) :
                        //                            ?>
                        <!--                            <div class="filter-section">-->
                        <!--                                <h3 class="filter-title filter-title_close">Форма</h3>-->
                        <!--                                <div class="filter-checkboxes filter-content_close">-->
                        <!---->
                        <!--                                    --><?php
                        //                                    $all_products = get_posts([
                        //                                        'post_type' => 'product',
                        //                                        'post_status' => 'publish',
                        //                                        'posts_per_page' => -1,
                        //                                    ]);
                        //
                        //                                    $shape_counts = [];
                        //
                        //                                    foreach ($all_products as $product) {
                        //                                        $product_fields = get_field('product', $product->ID); // group field
                        //
                        //                                        if (!empty($product_fields['shape'])) {
                        //                                            $shape_field = $product_fields['shape'];
                        //
                        //                                            if (is_array($shape_field)) {
                        //                                                foreach ($shape_field as $item) {
                        //                                                    $term_id = is_array($item) && isset($item['term_id']) ? $item['term_id'] : (int) $item;
                        //                                                    if (!isset($shape_counts[$term_id])) {
                        //                                                        $shape_counts[$term_id] = 0;
                        //                                                    }
                        //                                                    $shape_counts[$term_id]++;
                        //                                                }
                        //                                            } else {
                        //                                                $term_id = is_array($shape_field) && isset($shape_field['term_id']) ? $shape_field['term_id'] : (int) $shape_field;
                        //                                                if (!isset($shape_counts[$term_id])) {
                        //                                                    $shape_counts[$term_id] = 0;
                        //                                                }
                        //                                                $shape_counts[$term_id]++;
                        //                                            }
                        //                                        }
                        //                                    }
                        //
                        //                                    foreach ($shapes as $index => $shape) :
                        //                                        $count = $shape_counts[$shape->term_id] ?? 0;
                        //                                        ?>
                        <!--                                        <label class="filter-checkbox">-->
                        <!--                                            <input type="checkbox" class="shape-filter" data-term-id="-->
                        <?php //= $shape->term_id ?><!--">-->
                        <!--                                            <span class="checkmark"></span>-->
                        <!--                                            <span class="filter-name">-->
                        <?php //= esc_html($shape->name) ?><!--</span>-->
                        <!--                                            <span class="filter-count">(-->
                        <?php //= $count ?><!--)</span>-->
                        <!--                                        </label>-->
                        <!--                                    --><?php //endforeach; ?>
                        <!---->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        --><?php //endif; ?>
                        <!---->
                        <!--                        --><?php
                        //                        $colors = get_terms([
                        //                            'taxonomy' => 'color',
                        //                            'hide_empty' => false,
                        //                        ]);
                        //
                        //                        if (!empty($colors) && !is_wp_error($colors)) :
                        //                            ?>
                        <!--                            <div class="filter-section">-->
                        <!--                                <h3 class="filter-title">Цвет</h3>-->
                        <!--                                <div class="filter-checkboxes">-->
                        <!---->
                        <!--                                    --><?php
                        //                                    $all_products = get_posts([
                        //                                        'post_type' => 'product',
                        //                                        'post_status' => 'publish',
                        //                                        'posts_per_page' => -1,
                        //                                    ]);
                        //
                        //                                    $color_counts = [];
                        //
                        //                                    foreach ($all_products as $product) {
                        //                                        $product_fields = get_field('product', $product->ID);
                        //
                        //                                        if (!empty($product_fields['color'])) {
                        //                                            $color_field = $product_fields['color'];
                        //
                        //                                            if (is_array($color_field)) {
                        //                                                foreach ($color_field as $item) {
                        //                                                    $term_id = is_array($item) && isset($item['term_id']) ? $item['term_id'] : (int) $item;
                        //                                                    if (!isset($color_counts[$term_id])) {
                        //                                                        $color_counts[$term_id] = 0;
                        //                                                    }
                        //                                                    $color_counts[$term_id]++;
                        //                                                }
                        //                                            } else {
                        //                                                $term_id = is_array($color_field) && isset($color_field['term_id']) ? $color_field['term_id'] : (int) $color_field;
                        //                                                if (!isset($color_counts[$term_id])) {
                        //                                                    $color_counts[$term_id] = 0;
                        //                                                }
                        //                                                $color_counts[$term_id]++;
                        //                                            }
                        //                                        }
                        //                                    }
                        //
                        //                                    foreach ($colors as $index => $color) :
                        //                                        $count = $color_counts[$color->term_id] ?? 0;
                        //                                        ?>
                        <!--                                        <label class="filter-checkbox">-->
                        <!--                                            <input type="checkbox" class="color-filter" data-term-id="-->
                        <?php //= $color->term_id ?><!--">-->
                        <!--                                            <span class="checkmark"></span>-->
                        <!--                                            <span class="filter-name">-->
                        <?php //= esc_html($color->name) ?><!--</span>-->
                        <!--                                            <span class="filter-count">(-->
                        <?php //= $count ?><!--)</span>-->
                        <!--                                        </label>-->
                        <!--                                    --><?php //endforeach; ?>
                        <!---->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        --><?php //endif; ?>

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
                                            <input type="checkbox" class="shape-filter" data-term-id="<?= $shape->term_id ?>">
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
                                            <input type="checkbox" class="color-filter" data-term-id="<?= $color->term_id ?>">
                                            <span class="checkmark"></span>
                                            <span class="filter-name"><?= esc_html($color->name) ?></span>
                                            <span class="filter-count">(<?= $count ?>)</span>
                                        </label>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>



                        <?php
                        $catalog_id = get_the_ID(); // joriy catalog ID

                        // Katalogga tegishli barcha productlarni olish
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
                            if (!$category || get_field('catalog', $category->ID) != $catalog_id) continue;

                            $size = $fields['size_sm'] ?? null;
                            if ($size === null || $size === '') continue;

                            $size = floatval($size); // formatlash

                            if (!isset($size_counts[$size])) {
                                $size_counts[$size] = 0;
                            }
                            $size_counts[$size]++;
                        }

                        if (!empty($size_counts)) :
                            ksort($size_counts); // tartib bilan chiqarish (20, 30, 40...)
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
                            <?php
                            $terms = get_terms([
                                'taxonomy' => 'installation',
                                'hide_empty' => false,
                            ]);

                            if (!empty($terms) && !is_wp_error($terms)) : ?>
                                <div class="filter-section">
                                    <h3 class="filter-title">Установка</h3>
                                    <div class="filter-checkboxes">
                                        <?php foreach ($terms as $index => $term) :
                                            // ACF orqali product postlaridan installation id bilan bog‘langanlarni sanaymiz
                                            $count_query = new WP_Query([
                                                'post_type' => 'product',
                                                'posts_per_page' => -1,
                                                'post_status' => 'publish',
                                                'meta_query' => [
                                                    [
                                                        'key' => 'product_installation', // <-- bu sizning ACF group ichidagi installation field name
                                                        'value' => '"' . $term->term_id . '"',
                                                        'compare' => 'LIKE'
                                                    ]
                                                ]
                                            ]);
                                            $count = $count_query->found_posts;
                                            ?>
                                            <label class="filter-checkbox">
                                                <input type="checkbox" <?= $index === 0 ? 'checked' : '' ?>>
                                                <span class="checkmark"></span>
                                                <span class="filter-name"><?= esc_html($term->name) ?></span>
                                                <span class="filter-count">(<?= esc_html($count) ?>)</span>
                                            </label>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            <?php endif; ?>

                        </div>

                        <?php
                        $yes_query = new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'post_status' => 'publish',
                            'meta_query' => [
                                [
                                    'key' => 'product_anti_fog',
                                    'value' => '1',
                                    'compare' => '='
                                ]
                            ]
                        ]);
                        $yes_count = $yes_query->found_posts;

                        $no_query = new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'post_status' => 'publish',
                            'meta_query' => [
                                [
                                    'key' => 'product_anti_fog',
                                    'value' => '0',
                                    'compare' => '='
                                ]
                            ]
                        ]);
                        $no_count = $no_query->found_posts;
                        ?>

                        <div class="filter-section">
                            <h3 class="filter-title">Функция антизапотевания</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(<?= $yes_count ?>)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(<?= $no_count ?>)</span>
                                </label>
                            </div>
                        </div>


                        <?php
                        $clock_yes_query = new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'post_status' => 'publish',
                            'meta_query' => [
                                [
                                    'key' => 'product_built_clock',
                                    'value' => '1',
                                    'compare' => '='
                                ]
                            ]
                        ]);
                        $clock_yes_count = $clock_yes_query->found_posts;

                        $clock_no_query = new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'post_status' => 'publish',
                            'meta_query' => [
                                [
                                    'key' => 'product_built_clock',
                                    'value' => '0',
                                    'compare' => '='
                                ]
                            ]
                        ]);
                        $clock_no_count = $clock_no_query->found_posts;
                        ?>

                        <div class="filter-section">
                            <h3 class="filter-title">Встроенные часы</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(<?= $clock_yes_count ?>)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(<?= $clock_no_count ?>)</span>
                                </label>
                            </div>
                        </div>


                        <?php
                        $cosmetic_yes_query = new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'post_status' => 'publish',
                            'meta_query' => [
                                [
                                    'key' => 'product_cosmetic_mirror',
                                    'value' => '1',
                                    'compare' => '='
                                ]
                            ]
                        ]);
                        $cosmetic_yes_count = $cosmetic_yes_query->found_posts;

                        $cosmetic_no_query = new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'post_status' => 'publish',
                            'meta_query' => [
                                [
                                    'key' => 'product_cosmetic_mirror',
                                    'value' => '0',
                                    'compare' => '='
                                ]
                            ]
                        ]);
                        $cosmetic_no_count = $cosmetic_no_query->found_posts;
                        ?>
                        <div class="filter-section">
                            <h3 class="filter-title">Косметическое зеркало</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(<?= $cosmetic_yes_count ?>)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(<?= $cosmetic_no_count ?>)</span>
                                </label>
                            </div>
                        </div>


                        <?php
                        $collection_terms = get_terms([
                            'taxonomy' => 'collection',
                            'hide_empty' => false,
                        ]);

                        if (!empty($collection_terms) && !is_wp_error($collection_terms)) : ?>
                            <div class="filter-section">
                                <h3 class="filter-title">Коллекция</h3>
                                <div class="filter-checkboxes">
                                    <?php foreach ($collection_terms as $term) :
                                        $count = 0;

                                        $products = get_posts([
                                            'post_type' => 'product',
                                            'post_status' => 'publish',
                                            'posts_per_page' => -1,
                                        ]);

                                        foreach ($products as $product) {
                                            $product_fields = get_field('product', $product->ID);
                                            $product_collections = $product_fields['collection'] ?? [];

                                            if (!is_array($product_collections)) {
                                                $product_collections = [$product_collections];
                                            }

                                            foreach ($product_collections as $collection_term_id) {
                                                if ((int)$collection_term_id === $term->term_id) {
                                                    $count++;
                                                    break;
                                                }
                                            }
                                        }
                                        ?>
                                        <label class="filter-checkbox">
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                            <span class="filter-name"><?= esc_html($term->name) ?></span>
                                            <span class="filter-count">(<?= $count ?>)</span>
                                        </label>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>


                        <?php
                        $yes_count = 0;
                        $no_count = 0;

                        $products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'posts_per_page' => -1,
                        ]);

                        foreach ($products as $product) {
                            $prices = get_discounted_price($product->ID);

                            if (!empty($prices['discount']) && $prices['discount'] > 0) {
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
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(<?= $yes_count ?>)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(<?= $no_count ?>)</span>
                                </label>
                            </div>
                        </div>


                        <?php
                        $in_stock_count = 0;

                        $products = get_posts([
                            'post_type' => 'product',
                            'post_status' => 'publish',
                            'posts_per_page' => -1,
                        ]);

                        foreach ($products as $product) {
                            $product_fields = get_field('product', $product->ID);
                            if (!empty($product_fields['in_stock'])) {
                                $in_stock_count++;
                            }
                        }
                        ?>

                        <div class="filter-section">
                            <h3 class="filter-title">Показать</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
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
                        <?php
                        $catalog_id = get_the_ID();

                        $categories = get_posts([
                            'post_type' => 'product_category',
                            'meta_key' => 'catalog',
                            'meta_value' => $catalog_id,
                            'posts_per_page' => -1,
                            'fields' => 'ids',
                        ]);

                        if ($categories):
                            $products = get_posts([
                                'post_type' => 'product',
                                'post_status' => 'publish',
                                'posts_per_page' => -1,
                                'meta_query' => [
                                    [
                                        'key' => 'product_category',
                                        'compare' => 'EXISTS',
                                    ]
                                ],
                            ]);
                            ?>

                            <?php foreach ($products as $product):
                            $product_fields = get_field('product', $product->ID);
                            if (!$product_fields) continue;

                            $product_category = $product_fields['category'] ?? null;
                            if (!$product_category || !in_array($product_category->ID, $categories)) continue;

                            $brand_post = $product_fields['brand'] ?? null;
                            $brand_title = $brand_post ? get_the_title($brand_post) : '';

                            $product_code = get_field('product_code', $product->ID);
                            $description = $product_fields['short_description'] ?? '';
                            $image = $product_fields['image']['url'] ?? get_the_post_thumbnail_url($product->ID, 'medium');

                            $prices = get_discounted_price($product->ID);
                            ?>

                            <div class="product-card">
                                <div class="product-image">
                                    <img src="<?= esc_url($image) ?>" alt="<?= esc_attr($brand_title) ?>"
                                         class="product-img">
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

                        <?php endforeach; ?>
                        <?php endif; ?>
                    </main>


                    <div class="catalog-bottom-controls">
                        <button class="load-more">Показать еще</button>
                        <div class="catalog-bottom-controls-wrap">
                            <div class="pagination-count">
                                Показаны 28 из 240
                            </div>

                            <div class="pagination-bottom">
                                <a href="#" class="pagination-link active">1</a>
                                <a href="#" class="pagination-link">2</a>
                                <a href="#" class="pagination-link">3</a>
                                <a href="#" class="pagination-link">4</a>
                                <a href="#" class="pagination-link">5</a>

                                <a href="#" class="pagination-link next">></a>
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

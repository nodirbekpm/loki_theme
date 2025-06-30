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


// GET'dan filter qiymatlarini olish
$price_query = new WP_Query([
    'post_type' => 'product',
    'posts_per_page' => -1,
    'meta_query' => [
        [
            'key' => 'catalog',
            'value' => $catalog_id,
            'compare' => '='
        ],
        [
            'key' => '_price',
            'compare' => 'EXISTS'
        ]
    ],
    'fields' => 'ids'
]);
$product_ids = $price_query->posts;
$prices = [];
foreach ($product_ids as $pid) {
    $price = get_post_meta($pid, '_price', true);
    if ($price !== '') $prices[] = floatval($price);
}
$min_catalog_price = count($prices) ? min($prices) : 0;
$max_catalog_price = count($prices) ? max($prices) : 999999999;

$min_price = isset($_GET['min_price']) ? floatval($_GET['min_price']) : $min_catalog_price;
$max_price = isset($_GET['max_price']) ? floatval($_GET['max_price']) : $max_catalog_price;


$in_stock = isset($_GET['in_stock']) && $_GET['in_stock'] == '1';
$orderby = isset($_GET['orderby']) ? sanitize_text_field($_GET['orderby']) : 'date-desc';
$paged = max(1, get_query_var('paged') ?: get_query_var('page'));


// Saralash variantlari
$order_map = [
    'price-asc' => ['key' => '_price', 'orderby' => 'meta_value_num', 'order' => 'ASC'],
    'price-desc' => ['key' => '_price', 'orderby' => 'meta_value_num', 'order' => 'DESC'],
    'title-asc' => ['orderby' => 'title', 'order' => 'ASC'],
    'title-desc' => ['orderby' => 'title', 'order' => 'DESC'],
    'date-desc' => ['orderby' => 'date', 'order' => 'DESC'],
    'date-asc' => ['orderby' => 'date', 'order' => 'ASC'],
];
$sort = isset($order_map[$orderby]) ? $order_map[$orderby] : $order_map['date-desc'];

// Category (ACF) filteri
$category_filter = isset($_GET['category']) ? array_map('intval', (array)$_GET['category']) : [];

// Attribute (taxonomies) filter
$tax_query = [];
foreach ($_GET as $key => $values) {
    if (strpos($key, 'pa_') === 0 && is_array($values)) {
        $tax_query[] = [
            'taxonomy' => $key,
            'field' => 'slug',
            'terms' => array_map('sanitize_title', $values),
            'operator' => 'IN'
        ];
    }
}

// Meta query — catalog, narx, stock, category
$meta_query = [
    'relation' => 'AND',
    [
        'key' => 'catalog',
        'value' => $catalog_id,
        'compare' => '=',
    ],
    [
        'key' => '_price',
        'value' => [$min_price, $max_price],
        'compare' => 'BETWEEN',
        'type' => 'NUMERIC'
    ],
];

if ($in_stock) {
    $meta_query[] = [
        'key' => '_stock_status',
        'value' => 'instock',
        'compare' => '='
    ];
}

if (!empty($category_filter)) {
    $meta_query[] = [
        'key' => 'category',
        'value' => $category_filter,
        'compare' => 'IN'
    ];
}

// Asosiy mahsulotlar query
$args = [
    'post_type' => 'product',
    'post_status' => 'publish',
    'posts_per_page' => 5,
    'paged' => $paged,
    'meta_query' => $meta_query,
    'tax_query' => $tax_query,
    'orderby' => $sort['orderby'],
    'order' => $sort['order'],
];

if (isset($sort['key'])) {
    $args['meta_key'] = $sort['key'];
}

// 1. Category filter
$categories = get_posts([
    'post_type' => 'category',
    'numberposts' => -1,
    'orderby' => 'title',
    'order' => 'ASC'
]);

$products = new WP_Query($args);

$current_count = $products->post_count;
$total_found = $products->found_posts;
$total_pages = $products->max_num_pages;

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
                                <?php
                                $cat_count = new WP_Query([
                                    'post_type' => 'product',
                                    'posts_per_page' => -1,
                                    'meta_query' => [
                                        ['key' => 'catalog', 'value' => $catalog_id, 'compare' => '='],
                                        ['key' => 'category', 'value' => $cat->ID, 'compare' => '=']
                                    ]
                                ]);
                                if ($cat_count->found_posts === 0) continue;
                                ?>
                                <a href="#"
                                   class="category-btn"><?= esc_html(wp_trim_words($cat->post_title, 1, '')) ?></a>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
                <!-- Sorting -->
                <div class="sorting">
                    <span class="sorting-label">Сортировать по:</span>
                    <div class="filter_mobile" onclick="toggleCatalogFilters()">Фильтры</div>
                    <form method="get">
                        <?php
                        foreach ($_GET as $key => $val) {
                            if ($key === 'orderby') continue;
                            if (is_array($val)) {
                                foreach ($val as $v) {
                                    echo '<input type="hidden" name="' . esc_attr($key) . '[]" value="' . esc_attr($v) . '">';
                                }
                            } else {
                                echo '<input type="hidden" name="' . esc_attr($key) . '" value="' . esc_attr($val) . '">';
                            }
                        }
                        ?>
                        <select class="sorting-select" name="orderby" onchange="this.form.submit()">
                            <option value="date-desc" <?= $orderby === 'date-desc' ? 'selected' : '' ?>>По новизне</option>
                            <option value="price-asc" <?= $orderby === 'price-asc' ? 'selected' : '' ?>>Сначала дешевые</option>
                            <option value="price-desc" <?= $orderby === 'price-desc' ? 'selected' : '' ?>>Сначала дорогие</option>
                            <option value="title-asc" <?= $orderby === 'title-asc' ? 'selected' : '' ?>>По названию (А-Я)</option>
                            <option value="title-desc" <?= $orderby === 'title-desc' ? 'selected' : '' ?>>По названию (Я-А)</option>
                        </select>
                    </form>
                </div>


            </div>


            <div class="catalog-container">

                <aside class="catalog-filters" id="catalog-filters">
                    <form method="get" class="filter_container">
                        <div class="filter_close_button"><img src="<?php echo get_template_directory_uri() ?>/assets/img/close.svg" alt=""></div>
                        <div class="filter-section">
                            <h3 class="filter-title">Категории</h3>
                            <div class="filter-section-categorys">
                                <?php foreach ($categories as $index => $cat): ?>
                                    <?php
                                    $cat_count = new WP_Query([
                                        'post_type' => 'product',
                                        'posts_per_page' => -1,
                                        'meta_query' => [
                                            ['key' => 'catalog', 'value' => $catalog_id, 'compare' => '='],
                                            ['key' => 'category', 'value' => $cat->ID, 'compare' => '=']
                                        ]
                                    ]);
                                    if ($cat_count->found_posts === 0) continue;
                                    ?>
                                    <div class="filter-section-category <?= in_array($cat->ID, $category_filter) ? 'filter-section-category_active' : '' ?>" data-cat-id="<?= esc_attr($cat->ID) ?>">
                                        <?= esc_html($cat->post_title) ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                        <div class="filter-section">
                            <h3 class="filter-title">Цена, ₽</h3>
                            <div class="price-range-slider">
                                <div class="price-inputs">
                                    <input type="number" name="min_price" class="price-input min-input" value="<?= esc_attr($min_price) ?>">
                                    <span class="price-separator">-</span>
                                    <input type="number" name="max_price" class="price-input max-input" value="<?= esc_attr($max_price) ?>">
                                </div>
                            </div>
                        </div>

                        <?php
                        // 2. Attribute filters
                        $attribute_taxonomies = wc_get_attribute_taxonomies();
                        foreach ($attribute_taxonomies as $tax) {
                            if (!$tax->attribute_public || $tax->attribute_type !== 'select') continue;
                            $taxonomy = 'pa_' . $tax->attribute_name;
                            if (!is_taxonomy_viewable($taxonomy)) continue;

                            $terms = get_terms(['taxonomy' => $taxonomy, 'hide_empty' => false]);
                            if (empty($terms)) continue;

                            $output = '';
                            foreach ($terms as $term) {
                                $term_name = strtolower(trim($term->name));
                                if (in_array($term_name, ['да', 'нет', 'есть'])) continue;

                                $term_products = new WP_Query([
                                    'post_type' => 'product',
                                    'posts_per_page' => -1,
                                    'meta_query' => [
                                        [ 'key' => 'catalog', 'value' => $catalog_id, 'compare' => '=' ]
                                    ],
                                    'tax_query' => [
                                        [
                                            'taxonomy' => $taxonomy,
                                            'field' => 'slug',
                                            'terms' => $term->slug,
                                        ]
                                    ]
                                ]);
                                if ($term_products->found_posts === 0) continue;
                                wp_reset_postdata();

                                $param = $_GET[$taxonomy] ?? [];
                                $checked = in_array($term->slug, (array)$param);

                                $output .= '<label class="filter-checkbox">';
                                $output .= '<input type="checkbox" name="' . esc_attr($taxonomy) . '[]" value="' . esc_attr($term->slug) . '" ' . ($checked ? 'checked' : '') . '>';
                                $output .= '<span class="checkmark"></span>';
                                $output .= '<span class="filter-name">' . esc_html(ucfirst($term->name)) . '</span>';
                                $output .= '<span class="filter-count">(' . $term_products->found_posts . ')</span>';
                                $output .= '</label>';
                            }

                            if (!empty($output)) {
                                echo '<div class="filter-section">';
                                echo '<h3 class="filter-title filter-title_close">' . esc_html(ucfirst($tax->attribute_label)) . '</h3>';
                                echo '<div class="filter-checkboxes filter-content_close">';
                                echo $output;
                                echo '</div></div>';
                            }
                        }
                        ?>

                        <?php
                        $stock_yes = (new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'meta_query' => [
                                [ 'key' => 'catalog', 'value' => $catalog_id, 'compare' => '=' ],
                                [ 'key' => '_stock_status', 'value' => 'instock', 'compare' => '=' ]
                            ]
                        ]))->found_posts;

                        $stock_no = (new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'meta_query' => [
                                [ 'key' => 'catalog', 'value' => $catalog_id, 'compare' => '=' ],
                                [ 'key' => '_stock_status', 'value' => 'outofstock', 'compare' => '=' ]
                            ]
                        ]))->found_posts;

                        $yes_count = (new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'meta_query' => [
                                [ 'key' => 'catalog', 'value' => $catalog_id, 'compare' => '=' ],
                                [ 'key' => '_sale_price', 'value' => 0, 'compare' => '>', 'type' => 'NUMERIC' ]
                            ]
                        ]))->found_posts;

                        $no_count = (new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'meta_query' => [
                                [ 'key' => 'catalog', 'value' => $catalog_id, 'compare' => '=' ],
                                [ 'key' => '_sale_price', 'compare' => 'NOT EXISTS' ]
                            ]
                        ]))->found_posts;
                        ?>

                        <div class="filter-section">
                            <h3 class="filter-title">Товар со скидкой</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="on_sale" value="1" <?= isset($_GET['on_sale']) && $_GET['on_sale'] == '1' ? 'checked' : '' ?>>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(<?= $yes_count ?>)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" name="on_sale" value="0" <?= isset($_GET['on_sale']) && $_GET['on_sale'] == '0' ? 'checked' : '' ?>>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(<?= $no_count ?>)</span>
                                </label>
                            </div>
                        </div>

                        <div class="filter-section">
                            <h3 class="filter-title">Показать</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="in_stock" value="1" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Только в наличии</span>
                                    <span class="filter-count">(<?= $stock_yes ?>)</span>
                                </label>
                            </div>
                        </div>

                        <div class="action_buttons">
                            <div class="btn_clear action_button">
                                <a href="<?= get_permalink($catalog_id) ?>">Сбросить</a>
                            </div>
                            <div class="btn_show action_button">
                                <a href="">Показать</a>
                            </div>
                        </div>
                    </form>
                </aside>


                <div class="catalog-products-wrap">
                    <main class="catalog-products">
                        <?php while ($products->have_posts()): $products->the_post();
                            global $product;
                            $brand_id = get_field('brand', $product->get_id());
                            $brand_title = $brand_id ? get_the_title($brand_id) : '';
                            $main_image = wp_get_attachment_image_url($product->get_image_id(), 'medium');
                            $price = $product->get_price();
                            $regular = $product->get_regular_price();
                            $sale = $product->get_sale_price();
                            ?>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="<?= esc_url($main_image) ?>" alt="<?= esc_attr(get_the_title()) ?>"
                                         class="product-img">
                                </div>
                                <div class="product-card__top">
                                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/addlikes.svg"
                                         alt="">
                                </div>
                                <div class="product-details">
                                    <div class="product-details__cont">
                                        <div class="product-title"><?= esc_html($brand_title) ?></div>
                                        <div class="product-article">Код: <?= esc_html($product->get_sku()) ?></div>
                                    </div>
                                    <div class="product-description">
                                        <?= esc_html(wp_trim_words(get_the_content(), 20)) ?>
                                    </div>
                                    <div class="product-wrap">
                                        <div class="product-prices">
                                            <div class="product-prices-wrap">
                                                <?php if ($regular > $price): ?>
                                                    <span class="current-price"><?= wc_price($regular) ?></span>
                                                <?php endif; ?>
                                                <?php if ($regular > $price): ?>
                                                    <span class="product-badge">-<?= round((($regular - $price) / $regular) * 100) ?>%</span>
                                                <?php endif; ?>
                                            </div>
                                            <span class="old-price"><?= wc_price($price) ?></span>
                                        </div>
                                        <button class="add-to-cart-btn"
                                                data-product_id="<?= esc_attr($product->get_id()) ?>">
                                            В корзину
                                        </button>
                                    </div>
                                    <div class="product-yandex">
                                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/plus.svg"
                                             alt="">
                                        1 199 баллов Плюса кэшбэк в
                                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ya-pay.svg"
                                             alt="">
                                    </div>
                                    <div class="product-split">
                                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/cask.svg"
                                             alt="">
                                        х4 платежа в
                                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ya-split.svg"
                                             alt="">
                                    </div>
                                </div>
                            </div>
                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                    </main>


                    <?php if ($total_pages > 1): ?>
                        <div class="catalog-bottom-controls">
                            <?php
                            // Asosiy URL va GET parametrlari
                            $base_url = get_pagenum_link(1);
                            $current_url = home_url(add_query_arg([])); // joriy sahifa GET parametrlari bilan
                            $parsed_url = parse_url($current_url);
                            parse_str($parsed_url['query'] ?? '', $query_args);

                            $query_args['paged'] = $paged + 1;
                            $next_url = esc_url(add_query_arg($query_args, $parsed_url['path']));
                            ?>

                            <?php if ($paged < $total_pages): ?>
                                <button class="load-more" data-next-page-url="<?= $next_url ?>">Показать еще</button>
                            <?php endif; ?>

                            <div class="catalog-bottom-controls-wrap">
                                <div class="pagination-count">
                                    Показаны <?= $current_count ?> из <?= $total_found ?>
                                </div>

                                <div class="pagination-bottom">
                                    <?php
                                    // Sahifa linklari
                                    for ($i = 1; $i <= $total_pages; $i++):
                                        $query_args['paged'] = $i;
                                        $url = esc_url(add_query_arg($query_args, $parsed_url['path']));
                                        $active = $i == $paged ? 'pagination-link active' : 'pagination-link';
                                        ?>
                                        <a href="<?= $url ?>" class="<?= $active ?>" data-page="<?= $i ?>"><?= $i ?></a>
                                    <?php endfor; ?>

                                    <?php if ($paged < $total_pages): ?>
                                        <a href="<?= $next_url ?>" class="pagination-link next">&gt;</a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    <?php endif; ?>

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

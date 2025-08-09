<?php
add_action('wp_ajax_load_catalog_products', 'load_catalog_products_callback');
add_action('wp_ajax_nopriv_load_catalog_products', 'load_catalog_products_callback');

function load_catalog_products_callback() {
    $paged = isset($_POST['paged']) ? absint($_POST['paged']) : 1;
    $catalog_id = isset($_POST['catalog_id']) ? absint($_POST['catalog_id']) : 0;
    parse_str($_POST['query_params'], $query_params);

    // Filter parametrlarini olish
    $min_price = isset($query_params['min_price']) ? floatval($query_params['min_price']) : 0;
    $max_price = isset($query_params['max_price']) ? floatval($query_params['max_price']) : 999999999;
    $in_stock = isset($query_params['in_stock']) && $query_params['in_stock'] == '1';
    $orderby = isset($query_params['orderby']) ? sanitize_text_field($query_params['orderby']) : 'date-desc';
    $category_filter = isset($query_params['category']) ? array_map('intval', (array)$query_params['category']) : [];

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

    // Tax query
    $tax_query = [];
    foreach ($query_params as $key => $values) {
        if (strpos($key, 'pa_') === 0 && is_array($values)) {
            $tax_query[] = [
                'taxonomy' => $key,
                'field' => 'slug',
                'terms' => array_map('sanitize_title', $values),
                'operator' => 'IN'
            ];
        }
    }

    // Meta query
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

    // WP_Query
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

    $products = new WP_Query($args);
    $total_pages = $products->max_num_pages;
    $current_count = $products->post_count;
    $total_found = $products->found_posts;

    // Mahsulotlar HTML
    ob_start();
    while ($products->have_posts()) : $products->the_post();
        global $product;
        $brand_id = get_field('brand', $product->get_id());
        $brand_title = $brand_id ? get_the_title($brand_id) : '';
        $main_image = wp_get_attachment_image_url($product->get_image_id(), 'medium');
        $price = $product->get_price();
        $regular = $product->get_regular_price();
        $sale = $product->get_sale_price();
        $link = get_permalink($product->ID);
        ?>
        <div class="product-card">
            <a href="<?= esc_url($link) ?>" class="product-image">
                <img src="<?= esc_url($main_image) ?>" alt="<?= esc_attr(get_the_title()) ?>" class="product-img">
            </a>
            <div class="product-card__top">
                <img src="<?php echo get_template_directory_uri() ?>/assets/img/addlikes.svg" alt="">
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
                    <button class="add-to-cart-btn" data-product-id="<?= esc_attr($product->get_id()) ?>">
                        В корзину
                    </button>
                </div>
                <div class="product-yandex">
                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/plus.svg" alt="">
                    1 199 баллов Плюса кэшбэк в
                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/ya-pay.svg" alt="">
                </div>
                <div class="product-split">
                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/cask.svg" alt="">
                    х4 платежа в
                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/ya-split.svg" alt="">
                </div>
            </div>
        </div>
    <?php
    endwhile;
    $products_html = ob_get_clean();

    // Pagination HTML
    ob_start();
    if ($total_pages > 1) {
        $pagination_args = [
            'base' => get_permalink($catalog_id) . '%_%',
            'format' => '?paged=%#%',
            'current' => $paged,
            'total' => $total_pages,
            'prev_text' => '«',
            'next_text' => '»',
            'type' => 'plain',
            'add_args' => array_diff_key($query_params, array_flip(['paged', 'page'])),
            'before_page_number' => '<span class="pagination-link">',
            'after_page_number' => '</span>',
        ];

        $pagination_links = paginate_links($pagination_args);
        $pagination_links = str_replace('page-numbers current', 'pagination-link active', $pagination_links);
        $pagination_links = str_replace('page-numbers', 'pagination-link', $pagination_links);
        $pagination_links = str_replace('prev page-numbers', 'pagination-link prev', $pagination_links);
        $pagination_links = str_replace('next page-numbers', 'pagination-link next', $pagination_links);
        ?>
        <div class="pagination-bottom">
            <?= $pagination_links ?>
        </div>
        <?php
    }
    $pagination_html = ob_get_clean();

    // Pagination count HTML
    $pagination_count = sprintf('Показаны %d из %d', ($paged * $current_count), $total_found);

    // Response
    wp_send_json([
        'products' => $products_html,
        'pagination_links' => $pagination_html,
        'pagination_count' => $pagination_count,
        'has_next_page' => ($paged < $total_pages)
    ]);

    wp_reset_postdata();
    wp_die();
}






add_action('wp_ajax_load_brand_products', 'load_brand_products_callback');
add_action('wp_ajax_nopriv_load_brand_products', 'load_brand_products_callback');

function load_brand_products_callback() {
    $paged = isset($_POST['paged']) ? absint($_POST['paged']) : 1;
    $brand_id = isset($_POST['catalog_id']) ? absint($_POST['catalog_id']) : 0;
    parse_str($_POST['query_params'], $query_params);

    // Filter parametrlarini olish
    $min_price = isset($query_params['min_price']) ? floatval($query_params['min_price']) : 0;
    $max_price = isset($query_params['max_price']) ? floatval($query_params['max_price']) : 999999999;
    $in_stock = isset($query_params['in_stock']) && $query_params['in_stock'] == '1';
    $orderby = isset($query_params['orderby']) ? sanitize_text_field($query_params['orderby']) : 'date-desc';
    $category_filter = isset($query_params['category']) ? array_map('intval', (array)$query_params['category']) : [];

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

    // Tax query
    $tax_query = [];
    foreach ($query_params as $key => $values) {
        if (strpos($key, 'pa_') === 0 && is_array($values)) {
            $tax_query[] = [
                'taxonomy' => $key,
                'field' => 'slug',
                'terms' => array_map('sanitize_title', $values),
                'operator' => 'IN'
            ];
        }
    }

    // Meta query
    $meta_query = [
        'relation' => 'AND',
        [
            'key' => 'brand',
            'value' => $brand_id,
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

    // WP_Query
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

    $products = new WP_Query($args);
    $total_pages = $products->max_num_pages;
    $current_count = $products->post_count;
    $total_found = $products->found_posts;

    // Mahsulotlar HTML
    ob_start();
    while ($products->have_posts()) : $products->the_post();
        global $product;
        $brand_title = $brand_id ? get_the_title($brand_id) : '';
        $main_image = wp_get_attachment_image_url($product->get_image_id(), 'medium');
        $price = $product->get_price();
        $regular = $product->get_regular_price();
        $sale = $product->get_sale_price();
        $link = get_permalink($product->ID);
        ?>
        <div class="product-card">
            <a href="<?= esc_url($link) ?>" class="product-image">
                <img src="<?= esc_url($main_image) ?>" alt="<?= esc_attr(get_the_title()) ?>" class="product-img">
            </a>
            <div class="product-card__top">
                <img src="<?php echo get_template_directory_uri() ?>/assets/img/addlikes.svg" alt="">
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
                    <button class="add-to-cart-btn" data-product-id="<?= esc_attr($product->get_id()) ?>">
                        В корзину
                    </button>
                </div>
                <div class="product-yandex">
                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/plus.svg" alt="">
                    1 199 баллов Плюса кэшбэк в
                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/ya-pay.svg" alt="">
                </div>
                <div class="product-split">
                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/cask.svg" alt="">
                    х4 платежа в
                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/ya-split.svg" alt="">
                </div>
            </div>
        </div>
    <?php
    endwhile;
    $products_html = ob_get_clean();

    // Pagination HTML
    ob_start();
    if ($total_pages > 1) {
        $pagination_args = [
            'base' => get_permalink($brand_id) . '%_%',
            'format' => '?paged=%#%',
            'current' => $paged,
            'total' => $total_pages,
            'prev_text' => '«',
            'next_text' => '»',
            'type' => 'plain',
            'add_args' => array_diff_key($query_params, array_flip(['paged', 'page'])),
            'before_page_number' => '<span class="pagination-link">',
            'after_page_number' => '</span>',
        ];

        $pagination_links = paginate_links($pagination_args);
        $pagination_links = str_replace('page-numbers current', 'brand_pagination-link active', $pagination_links);
        $pagination_links = str_replace('page-numbers', 'brand_pagination-link', $pagination_links);
        $pagination_links = str_replace('prev page-numbers', 'brand_pagination-link prev', $pagination_links);
        $pagination_links = str_replace('next page-numbers', 'brand_pagination-link next', $pagination_links);
        ?>
        <div class="pagination-bottom">
            <?= $pagination_links ?>
        </div>
        <?php
    }
    $pagination_html = ob_get_clean();

    // Pagination count HTML
    $pagination_count = sprintf('Показаны %d из %d', ($paged * $current_count), $total_found);

    // Response
    wp_send_json([
        'products' => $products_html,
        'pagination_links' => $pagination_html,
        'pagination_count' => $pagination_count,
        'has_next_page' => ($paged < $total_pages)
    ]);

    wp_reset_postdata();
    wp_die();
}
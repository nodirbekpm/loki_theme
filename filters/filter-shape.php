<?php

add_action('wp_ajax_filter_by_shape', 'handle_filter_by_shape');
add_action('wp_ajax_nopriv_filter_by_shape', 'handle_filter_by_shape');

function handle_filter_by_shape()
{
    $shape_ids = isset($_POST['shape_ids']) ? array_map('intval', $_POST['shape_ids']) : [];

    $filtered_products = [];

    $products = get_posts([
        'post_type' => 'product',
        'post_status' => 'publish',
        'numberposts' => -1,
    ]);

    foreach ($products as $product) {
        $group = get_field('product', $product->ID);
        if (!$group) continue;

        $product_shapes = is_array($group['shape']) ? $group['shape'] : [$group['shape']];
        $product_shape_ids = array_map(function ($term) {
            return is_array($term) ? (int)$term['term_id'] : (int)$term;
        }, $product_shapes);

        if (empty($shape_ids) || array_intersect($product_shape_ids, $shape_ids)) {
            $filtered_products[] = $product;
        }
    }

    foreach ($filtered_products as $product) {
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

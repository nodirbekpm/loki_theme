<?php
// cost
add_action('wp_ajax_filter_by_price', 'ajax_filter_by_price');
add_action('wp_ajax_nopriv_filter_by_price', 'ajax_filter_by_price');

function ajax_filter_by_price() {
    $min_price = isset($_POST['min_price']) ? intval($_POST['min_price']) : 0;
    $max_price = isset($_POST['max_price']) ? intval($_POST['max_price']) : PHP_INT_MAX;

    $products = get_posts([
        'post_type' => 'product',
        'post_status' => 'publish',
        'posts_per_page' => -1,
    ]);

    foreach ($products as $product) {
        $product_fields = get_field('product', $product->ID);
        if (!$product_fields) continue;
        $prices = get_discounted_price($product->ID);

        if (!$prices) continue;
        $final_price = $prices['final'];

        if ($final_price < $min_price || $final_price > $max_price) continue;

        $brand_post = $product_fields['brand'] ?? null;
        $brand_title = $brand_post ? get_the_title($brand_post) : '';
        $product_code = get_field('product_code', $product->ID);
        $description = $product_fields['short_description'] ?? '';
        $image = $product_fields['image']['url'] ?? get_the_post_thumbnail_url($product->ID, 'medium');
        $prices = get_discounted_price($product->ID);

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

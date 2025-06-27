<?php
add_action('wp_ajax_get_cart_products', 'get_cart_products');
add_action('wp_ajax_nopriv_get_cart_products', 'get_cart_products');

function get_cart_products()
{
    $cart = json_decode(stripslashes($_POST['cart'] ?? ''), true);
    if (!is_array($cart) || empty($cart)) {
        echo '<p>Корзинка пустая.</p>';
        wp_die();
    }

    ob_start();

    foreach ($cart as $item) {
        $post_id = isset($item['id']) ? intval($item['id']) : 0;
        $qty = isset($item['qty']) ? intval($item['qty']) : 1;

        if (!$post_id || !$qty) continue;

        $post = get_post($post_id);
        if (!$post || $post->post_type !== 'product') continue;

        $group = get_field('product', $post_id);
        $price_data = function_exists('get_discounted_price') ? get_discounted_price($post_id) : ['final' => 0];
        $img = $group['image']['url'] ?? get_the_post_thumbnail_url($post_id, 'medium');
        $brand_title = get_the_title($group['brand'] ?? 0);
        $product_code = get_field('product_code', $post_id);
        $price = $price_data['final'] ?? 0;
        $original = $price_data['original'] ?? 0;
        $discount = $price_data['discount'] ?? 0;
        $summa = $qty * $price;
        ?>

        <div class="product-item">
            <img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr($post->post_title); ?>" class="product-image">
            <div class="product-info">
                <div class="product-info-wrap">
                    <div class="product-sku">
                        <span><?php echo esc_html($brand_title); ?></span>Код: <?php echo esc_html($product_code); ?>
                    </div>
                    <div class="product-name"><?php echo esc_html($post->post_title); ?></div>
                </div>
                <div class="prices prices-desctop-none">
                    <div class="prices-wrap">
                        <?php if ($discount > 0): ?>
                            <span class="old-price"><?php echo number_format($original, 0, '', ' '); ?> ₽</span>
                            <span class="discount">-<?php echo $discount; ?>%</span>
                        <?php endif; ?>
                    </div>
                    <span class="current-price"><?php echo number_format($price, 0, '', ' '); ?> ₽</span>
                </div>
                <div class="quantity-control prices-desctop-none">
                    <button class="quantity-btn minus">-</button>
                    <input type="text" class="quantity-input" data-product-id="<?php echo $post_id; ?>" value="<?php echo $qty; ?>">
                    <button class="quantity-btn plus">+</button>
                </div>
                <div class="prices-summ prices-desctop-none">
                    <?php echo number_format($summa, 0, '', ' '); ?> ₽
                </div>
                <button class="remove-btn" data-product-id="<?php echo $post_id; ?>">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="prices-mobile-look">
                <div class="quantity-control prices-mobile-show">
                    <button class="quantity-btn minus">-</button>
                    <input type="text" class="quantity-input" data-product-id="<?php echo $post_id; ?>" value="<?php echo $qty; ?>">
                    <button class="quantity-btn plus">+</button>
                </div>
                <div class="prices-summ prices-mobile-show">
                    <?php echo number_format($summa, 0, '', ' '); ?> ₽
                </div>
            </div>
        </div>

        <?php
    }
    ?>
    <button class="clear-cart"><img src="<?= get_template_directory_uri() ?>/assets/img/trash_icon.svg" alt=""> Очистить корзину</button>
<?php

    $output = ob_get_clean();
    echo $output;
    wp_die();
}

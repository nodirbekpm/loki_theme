<?php
add_action('wp_ajax_get_cart_products', 'get_cart_products');
add_action('wp_ajax_nopriv_get_cart_products', 'get_cart_products');

function get_cart_products() {
    // JSON ma'lumotlarini xavfsiz olish
    $cart = isset($_POST['cart']) ? json_decode(stripslashes($_POST['cart']), true) : [];

    // Agar cart bo‘sh yoki massiv bo‘lmasa
    if (!is_array($cart) || empty($cart)) {
        echo '<p>Корзинка пустая.</p>';
        wp_die();
    }

    ob_start();

    foreach ($cart as $item) {
        $product_id = isset($item['id']) ? intval($item['id']) : 0;
        $qty = isset($item['qty']) ? intval($item['qty']) : 1;

        // Mahsulot ID va miqdor tekshiruvi
        if (!$product_id || !$qty) {
            continue;
        }

        // Mahsulotni olish
        $product = wc_get_product($product_id);
        if (!$product || $product->get_status() !== 'publish') {
            continue;
        }

        // WooCommerce ma'lumotlari
        $price = floatval($product->get_price()) ?: 0;
        $regular_price = floatval($product->get_regular_price()) ?: 0;
        $sale_price = floatval($product->get_sale_price()) ?: $regular_price;
        $discount = ($regular_price && $sale_price && $regular_price > $sale_price)
            ? round((($regular_price - $sale_price) / $regular_price) * 100)
            : 0;
        $summa = $qty * $price;

        // Rasm
        $img = wp_get_attachment_image_url($product->get_image_id(), 'medium') ?: get_template_directory_uri() . '/assets/img/placeholder.png';

        // Brand (ACF orqali, xavfsiz tekshirish)
        $brand_post = get_field('brand', $product_id);
        $brand_title = $brand_post ? esc_html(get_the_title($brand_post)) : '';

        // SKU yoki product code
        $sku = $product->get_sku() ? esc_html($product->get_sku()) : 'N/A';

        ?>
        <div class="product-item">
            <img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr($product->get_name()); ?>" class="product-image">
            <div class="product-info">
                <div class="product-info-wrap">
                    <div class="product-sku">
                        <span><?php echo $brand_title; ?></span>
                        Код: <?php echo $sku; ?>
                    </div>
                    <div class="product-name"><?php echo esc_html($product->get_name()); ?></div>
                </div>
                <div class="prices prices-desctop-none">
                    <div class="prices-wrap">
                        <?php if ($discount > 0): ?>
                            <span class="old-price"><?php echo number_format($regular_price, 0, '', ' '); ?> ₽</span>
                            <span class="discount">-<?php echo $discount; ?>%</span>
                        <?php endif; ?>
                    </div>
                    <span class="current-price"><?php echo number_format($price, 0, '', ' '); ?> ₽</span>
                </div>
                <div class="quantity-control prices-desctop-none">
                    <button class="quantity-btn minus">-</button>
                    <input type="text" class="quantity-input" data-product-id="<?php echo $product_id; ?>" value="<?php echo $qty; ?>">
                    <button class="quantity-btn plus">+</button>
                </div>
                <div class="prices-summ prices-desctop-none">
                    <?php echo number_format($summa, 0, '', ' '); ?> ₽
                </div>
                <button class="remove-btn" data-product-id="<?php echo $product_id; ?>">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="prices-mobile-look">
                <div class="quantity-control prices-mobile-show">
                    <button class="quantity-btn minus">-</button>
                    <input type="text" class="quantity-input" data-product-id="<?php echo $product_id; ?>" value="<?php echo $qty; ?>">
                    <button class="quantity-btn plus">+</button>
                </div>
                <div class="prices-summ prices-mobile-show">
                    <?php echo number_format($summa, 0, '', ' '); ?> ₽
                </div>
            </div>
        </div>
        <?php
    }

    // Agar savat bo‘sh bo‘lsa
    if (ob_get_length() === 0) {
        echo '<p>Корзинка пустая.</p>';
    } else {
        ?>
        <button class="clear-cart">
            <img src="<?= esc_url(get_template_directory_uri() . '/assets/img/trash_icon.svg') ?>" alt=""> Очистить корзину
        </button>
        <?php
    }

    $output = ob_get_clean();
    echo $output;
    wp_die();
}
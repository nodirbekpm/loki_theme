<?php
add_action('wp_ajax_get_cart2_products', 'get_cart2_products');
add_action('wp_ajax_nopriv_get_cart2_products', 'get_cart2_products');

function get_cart2_products() {
    $cart = json_decode(stripslashes($_POST['cart'] ?? ''), true);
    if (!is_array($cart) || empty($cart)) {
        echo '<p>Корзинка пуста.</p>';
        wp_die();
    }

    ob_start();
    $total_sum = 0;

    foreach ($cart as $item) {
        $product_id = isset($item['id']) ? intval($item['id']) : 0;
        $qty = isset($item['qty']) ? intval($item['qty']) : 1;

        if (!$product_id || !$qty) continue;

        $product = wc_get_product($product_id);
        if (!$product) continue;

        $title = $product->get_name();
        $price = $product->get_price();
        $sum = $qty * $price;
        $total_sum += $sum;
        ?>

        <div class="summary-row">
            <span><?php echo esc_html($title); ?></span>
            <span><?php echo $qty; ?> шт. × <?php echo number_format($price, 0, '', ' '); ?> ₽</span>
        </div>

        <?php
    }

    ?>
    <div class="summary-row total-row">
        <span>Итого к оплате:</span>
        <span><?php echo number_format($total_sum, 0, '', ' '); ?> ₽</span>
    </div>
    <?php

    echo ob_get_clean();
    wp_die();
}




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
        $post_id = isset($item['id']) ? intval($item['id']) : 0;
        $qty = isset($item['qty']) ? intval($item['qty']) : 1;

        if (!$post_id || !$qty) continue;

        $post = get_post($post_id);
        if (!$post || $post->post_type !== 'product') continue;

        $title = $post->post_title;
        $price_data = function_exists('get_discounted_price') ? get_discounted_price($post_id) : ['final' => 0];
        $price = $price_data['final'] ?? 0;

        $total_sum += $qty * $price;
        ?>

        <div class="summary-row">
            <span><?php echo esc_html($title); ?></span>
            <span><?php echo $qty; ?>шт. х <?php echo number_format($price, 0, '', ' '); ?> ₽</span>
        </div>

        <?php
    }

    // Yakuniy summa qatorini chiqarish
    ?>
    <div class="summary-row total-row">
        <span>Итого к оплате:</span>
        <span><?php echo number_format($total_sum, 0, '', ' '); ?> ₽</span>
    </div>
    <?php

    echo ob_get_clean();
    wp_die();
}



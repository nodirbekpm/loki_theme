<?php
function auto_assign_product_code($post_id) {
    if (get_post_type($post_id) !== 'product') return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

    // Mahsulot kodi mavjud bo‘lsa, o‘zgartirmaymiz
    $current_code = get_field('product_code', $post_id);
    if (!empty($current_code)) return; // <-- MUHIM: mavjud bo‘lsa, to‘xtaydi

    // Eng katta mavjud kodni topamiz
    $latest_product = new WP_Query([
        'post_type' => 'product',
        'posts_per_page' => 1,
        'meta_key' => 'product_code',
        'orderby' => 'meta_value_num',
        'order' => 'DESC',
        'post__not_in' => [$post_id],
        'fields' => 'ids',
    ]);

    $last_code = 0;
    if ($latest_product->have_posts()) {
        $last_product_id = $latest_product->posts[0];
        $last_code = (int) get_field('product_code', $last_product_id);
    }

    $new_code = $last_code + 1;
    update_field('product_code', $new_code, $post_id);
}
add_action('save_post_product', 'auto_assign_product_code');

<?php
function loki_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    register_nav_menus(array(
        'primary' => 'Primary Menu',
    ));
}
add_action('after_setup_theme', 'loki_theme_setup');

function loki_enqueue_assets() {
    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/style.min.css');
    wp_enqueue_style('custom-fonts', get_template_directory_uri() . '/assets/fonts/font.css');

}
add_action('wp_enqueue_scripts', 'loki_enqueue_assets', 10);



require_once get_template_directory() . '/inc/custom-post-types.php';


if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'Настройки сайта',
        'menu_title'    => 'Настройки сайта',
        'menu_slug'     => 'site-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}

function register_my_menus() {
    register_nav_menus([
        'header_menu' => 'Header menyusi',
    ]);
}
add_action('after_setup_theme', 'register_my_menus');

add_filter('nav_menu_css_class', function($classes, $item, $args) {
    if ($args->theme_location === 'header_menu') {
        return [];
    }
    return $classes;
}, 10, 3);

function make_product_code_field_readonly($field) {
    if ($field['name'] === 'product_code') {
        $field['readonly'] = 1;
    }
    return $field;
}
add_filter('acf/prepare_field', 'make_product_code_field_readonly');


require get_template_directory() . '/inc/acf-hooks.php';

// lIke qismi
function increment_like_callback() {
    $post_id = intval($_POST['post_id']);

    if ($post_id) {
        $likes = (int) get_post_meta($post_id, 'like_count', true);
        $likes++;
        update_post_meta($post_id, 'like_count', $likes);

        wp_send_json_success($likes);
    }

    wp_send_json_error();
}
add_action('wp_ajax_increment_like', 'increment_like_callback');
add_action('wp_ajax_nopriv_increment_like', 'increment_like_callback');

// Narxni hisoblash formulasi
function get_discounted_price($product_id) {
    $group = get_field('product', $product_id);

    if (!$group) return null;

    $cost = isset($group['cost']) ? (float)$group['cost'] : 0;
    $discount = isset($group['discount']) ? (float)$group['discount'] : 0;

    if ($cost && $discount > 0) {
        $new_price = $cost - ($cost * $discount / 100);
        return [
            'original' => $cost,
            'discount' => $discount,
            'final' => round($new_price),
        ];
    }

    return [
        'original' => $cost,
        'discount' => 0,
        'final' => $cost,
    ];
}

add_filter('wpcf7_autop_or_not', '__return_false');




// ================= Catalog sahifasida filterlash =====================

require_once get_template_directory() . '/inc/ajax/filter-products.php';

//foreach (glob(get_template_directory() . '/filters/*.php') as $filename) {
//    require_once $filename;
//}


// ================= Cart korzinka xullas =====================

require_once get_template_directory() . '/inc/ajax/cart.php';
require_once get_template_directory() . '/inc/ajax/cart2.php';
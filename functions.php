<?php
function loki_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    register_nav_menus(array(
        'primary' => 'Primary Menu',
    ));
}
add_action('after_setup_theme', 'loki_theme_setup');

function loki_enqueue_styles() {
    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/style.min.css', array(), '1.0.0');
    wp_enqueue_style('custom-fonts', get_template_directory_uri() . '/assets/fonts/font.css', array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'loki_enqueue_styles');

require_once get_template_directory() . '/inc/custom-post-types.php';


if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'General Settings',
        'menu_title'    => 'Site Settings',
        'menu_slug'     => 'site-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}

function auto_assign_product_code($post_id) {
    if (get_post_type($post_id) !== 'product') return;

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

    if (get_field('product_code', $post_id)) return;

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
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
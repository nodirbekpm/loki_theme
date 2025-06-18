<?php

function loki_theme_setup() {
    // Theme support for title tag
    add_theme_support('title-tag');

    // Registering Navigation Menus
    register_nav_menus(array(
        'primary' => 'Primary Menu',
    ));

    // Adding custom logo support
    add_theme_support('custom-logo');
}

add_action('after_setup_theme', 'loki_theme_setup');


function loki_enqueue_styles() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
    wp_enqueue_style('custom-fonts', get_stylesheet_directory_uri() . '/assets/fonts/font.css', array(), null);
}
add_action('wp_enqueue_scripts', 'loki_enqueue_styles');
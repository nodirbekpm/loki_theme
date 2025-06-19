<?php
/**
 * Maxsus post turlari va taksonomiyalarni ro‘yxatdan o‘tkazish
 */

function register_product_post_type() {
    register_post_type('product', [
        'labels' => [
            'name' => 'Mahsulotlar',
            'singular_name' => 'Mahsulot',
            'add_new' => 'Yangi mahsulot',
            'add_new_item' => 'Yangi mahsulot qo‘shish',
            'edit_item' => 'Mahsulotni tahrirlash',
            'new_item' => 'Yangi mahsulot',
            'view_item' => 'Mahsulotni ko‘rish',
            'search_items' => 'Qidirish',
            'not_found' => 'Topilmadi',
            'menu_name' => 'Mahsulotlar',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-cart',
        'supports' => ['title', 'editor', 'thumbnail'],
        'show_in_rest' => true,
        'taxonomies' => ['color', 'shape'],
    ]);
}
add_action('init', 'register_product_post_type');

function register_catalog_post_type() {
    register_post_type('catalog', [
        'labels' => [
            'name' => 'Kataloglar',
            'singular_name' => 'Katalog',
            'add_new_item' => 'Yangi katalog',
            'edit_item' => 'Katalogni tahrirlash',
            'menu_name' => 'Kataloglar',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-book',
        'supports' => ['title'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_catalog_post_type');

function register_brand_post_type() {
    register_post_type('brand', [
        'labels' => [
            'name' => 'Brendlar',
            'singular_name' => 'Brend',
            'add_new_item' => 'Yangi brend',
            'edit_item' => 'Brendni tahrirlash',
            'menu_name' => 'Brendlar',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-tag',
        'supports' => ['title'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_brand_post_type');

function register_product_category_post_type() {
    register_post_type('product_category', [
        'labels' => [
            'name' => 'Kategoriyalar',
            'singular_name' => 'Kategoriya',
            'add_new_item' => 'Yangi kategoriya',
            'edit_item' => 'Kategoriya tahriri',
            'menu_name' => 'Kategoriyalar',
        ],
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-networking',
        'supports' => ['title'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_product_category_post_type');

function register_color_taxonomy() {
    register_taxonomy('color', 'product', [
        'labels' => [
            'name' => 'Ranglar',
            'singular_name' => 'Rang',
            'add_new_item' => 'Yangi rang qo‘shish',
            'menu_name' => 'Ranglar',
        ],
        'public' => true,
        'hierarchical' => false,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'color'],
    ]);
}
add_action('init', 'register_color_taxonomy');

function register_shape_taxonomy() {
    register_taxonomy('shape', 'product', [
        'labels' => [
            'name' => 'Shakllar',
            'singular_name' => 'Shakl',
            'add_new_item' => 'Yangi shakl qo‘shish',
            'menu_name' => 'Shakllar',
        ],
        'public' => true,
        'hierarchical' => false,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'shape'],
    ]);
}
add_action('init', 'register_shape_taxonomy');

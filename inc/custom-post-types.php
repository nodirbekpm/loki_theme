<?php
/**
 * Maxsus post turlari va taksonomiyalarni ro‘yxatdan o‘tkazish
 */

//function register_product_post_type() {
//    register_post_type('product', [
//        'labels' => [
//            'name' => 'Продукты',
//            'singular_name' => 'Продукт',
//            'add_new' => 'Новый продукт',
//            'add_new_item' => 'Добавление нового продукта',
//            'edit_item' => 'Редактировать продукт',
//            'new_item' => 'Новый продукт',
//            'view_item' => 'Просмотр продукта',
//            'search_items' => 'Поиск',
//            'not_found' => 'Не найдено',
//            'menu_name' => 'Продукты',
//        ],
//        'public' => true,
//        'has_archive' => true,
//        'menu_icon' => 'dashicons-cart',
//        'supports' => ['title', 'editor', 'thumbnail'],
//        'show_in_rest' => true,
//        'taxonomies' => ['color', 'shape'],
//    ]);
//}
//add_action('init', 'register_product_post_type');

function register_catalog_post_type() {
    register_post_type('catalog', [
        'labels' => [
            'name' => 'Каталоги',
            'singular_name' => 'Каталог',
            'add_new_item' => 'Новый каталог',
            'edit_item' => 'Редактировать каталог',
            'menu_name' => 'Каталоги',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-book',
        'supports' => ['title'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_catalog_post_type');


add_action('init', 'clean_brand_taxonomy', 100);
function clean_brand_taxonomy() {
    if (taxonomy_exists('brand')) {
        unregister_taxonomy('brand');
    }
}

function register_brand_post_type() {
    register_post_type('brand', [
        'labels' => [
            'name' => 'Бренды',
            'singular_name' => 'Brend',
            'add_new_item' => 'Бренд',
            'edit_item' => 'Редактировать бренд',
            'menu_name' => 'Бренды',
        ],
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => ['slug' => 'brands', 'with_front' => false], // Yangi slug: /brands/vermont-castings
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => 20,
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_brand_post_type');



function register_product_category_post_type() {
    register_post_type('product_category', [
        'labels' => [
            'name' => 'Категории',
            'singular_name' => 'Категории',
            'add_new_item' => 'Новая категория',
            'edit_item' => 'Редактировать категорию',
            'menu_name' => 'Категории',
        ],
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-networking',
        'supports' => ['title'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'register_product_category_post_type');
//
//function register_color_taxonomy() {
//    register_taxonomy('color', 'product', [
//        'labels' => [
//            'name' => 'Цвета',
//            'singular_name' => 'Цвет',
//            'add_new_item' => 'Добавление нового цвета',
//            'menu_name' => 'Цвета',
//        ],
//        'public' => true,
//        'hierarchical' => false,
//        'show_in_rest' => true,
//        'rewrite' => ['slug' => 'color'],
//    ]);
//}
//add_action('init', 'register_color_taxonomy');
//
//function register_shape_taxonomy() {
//    register_taxonomy('shape', 'product', [
//        'labels' => [
//            'name' => 'Формы',
//            'singular_name' => 'Форма',
//            'add_new_item' => 'Добавить новую форму',
//            'menu_name' => 'Формы',
//        ],
//        'public' => true,
//        'hierarchical' => false,
//        'show_in_rest' => true,
//        'rewrite' => ['slug' => 'shape'],
//    ]);
//}
//add_action('init', 'register_shape_taxonomy');
//
//function register_installation_taxonomy() {
//    register_taxonomy('installation', 'product', [
//        'labels' => [
//            'name' => 'Установки',
//            'singular_name' => 'Установка',
//            'add_new_item' => 'Добавить новую установку',
//            'menu_name' => 'Установки',
//        ],
//        'public' => true,
//        'hierarchical' => false,
//        'show_in_rest' => true,
//        'rewrite' => ['slug' => 'installation'],
//    ]);
//}
//add_action('init', 'register_installation_taxonomy');
//
//function register_collection_taxonomy() {
//    register_taxonomy('collection', 'product', [
//        'labels' => [
//            'name' => 'Коллекции',
//            'singular_name' => 'Коллекция',
//            'add_new_item' => 'Добавить новую коллекцию',
//            'menu_name' => 'Коллекции',
//        ],
//        'public' => true,
//        'hierarchical' => false,
//        'show_in_rest' => true,
//        'rewrite' => ['slug' => 'collection'],
//    ]);
//}
//add_action('init', 'register_collection_taxonomy');

<?php
/**
 * Maxsus post turlari va taksonomiyalarni ro‘yxatdan o‘tkazish
 */
function register_product_post_type() {
    $labels = array(
        'name'                  => 'Mahsulotlar',
        'singular_name'         => 'Mahsulot',
        'menu_name'             => 'Mahsulotlar',
        'add_new'               => 'Yangi qo‘shish',
        'add_new_item'          => 'Yangi mahsulot qo‘shish',
        'edit_item'             => 'Mahsulotni tahrirlash',
        'new_item'              => 'Yangi mahsulot',
        'view_item'             => 'Mahsulotni ko‘rish',
        'search_items'          => 'Mahsulotlarni qidirish',
        'not_found'             => 'Mahsulot topilmadi',
        'not_found_in_trash'    => 'Savatda mahsulot topilmadi',
        'all_items'             => 'Barcha mahsulotlar',
        'archives'              => 'Mahsulotlar arxivi',
        'attributes'            => 'Mahsulot atributlari',
        'insert_into_item'      => 'Mahsulotga qo‘shish',
        'uploaded_to_this_item' => 'Ushbu mahsulotga yuklangan',
        'filter_items_list'     => 'Mahsulotlar ro‘yxatini filtrlash',
        'items_list_navigation' => 'Mahsulotlar ro‘yxati navigatsiyasi',
        'items_list'            => 'Mahsulotlar ro‘yxati',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => true,
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'comments'),
        'rewrite'            => array('slug' => 'products'),
        'show_in_rest'       => true,
        'menu_icon'          => 'dashicons-products',
        'taxonomies'         => array('product_category', 'brand', 'shape', 'color'),
        'capability_type'    => 'post',
        'menu_position'      => 5,
        'publicly_queryable' => true,
        'query_var'          => true,
    );

    register_post_type('product', $args);
}
add_action('init', 'register_product_post_type');

function register_product_category_taxonomy() {
    $labels = array(
        'name'              => 'Kategoriyalar',
        'singular_name'     => 'Kategoriya',
        'menu_name'         => 'Kategoriyalar',
        'search_items'      => 'Kategoriyalarni qidirish',
        'all_items'         => 'Barcha kategoriyalar',
        'edit_item'         => 'Kategoriyani tahrirlash',
        'update_item'       => 'Kategoriyani yangilash',
        'add_new_item'      => 'Yangi kategoriya qo‘shish',
        'new_item_name'     => 'Yangi kategoriya nomi',
        'parent_item'       => 'Yuqori kategoriya',
        'parent_item_colon' => 'Yuqori kategoriya:',
    );

    $args = array(
        'labels'            => $labels,
        'public'            => true,
        'hierarchical'      => true,
        'show_in_rest'      => true,
        'rewrite'           => array('slug' => 'product-category'),
        'show_admin_column' => true,
    );

    register_taxonomy('product_category', 'product', $args);
}
add_action('init', 'register_product_category_taxonomy');

function register_brand_taxonomy() {
    $labels = array(
        'name'              => 'Brendlar',
        'singular_name'     => 'Brend',
        'menu_name'         => 'Brendlar',
        'search_items'      => 'Brendlarni qidirish',
        'all_items'         => 'Barcha brendlar',
        'edit_item'         => 'Brendni tahrirlash',
        'update_item'       => 'Brendni yangilash',
        'add_new_item'      => 'Yangi brend qo‘shish',
        'new_item_name'     => 'Yangi brend nomi',
        'parent_item'       => 'Yuqori brend',
        'parent_item_colon' => 'Yuqori brend:',
    );

    $args = array(
        'labels'            => $labels,
        'public'            => true,
        'hierarchical'      => true,
        'show_in_rest'      => true,
        'rewrite'           => array('slug' => 'brand'),
        'show_admin_column' => true,
    );

    register_taxonomy('brand', 'product', $args);
}
add_action('init', 'register_brand_taxonomy');

function register_shape_taxonomy() {
    $labels = array(
        'name'              => 'Shakllar',
        'singular_name'     => 'Shakl',
        'menu_name'         => 'Shakllar',
        'search_items'      => 'Shakllarni qidirish',
        'all_items'         => 'Barcha shakllar',
        'edit_item'         => 'Shaklni tahrirlash',
        'update_item'       => 'Shaklni yangilash',
        'add_new_item'      => 'Yangi shakl qo‘shish',
        'new_item_name'     => 'Yangi shakl nomi',
    );

    $args = array(
        'labels'            => $labels,
        'public'            => true,
        'hierarchical'      => false,
        'show_in_rest'      => true,
        'rewrite'           => array('slug' => 'shape'),
        'show_admin_column' => true,
    );

    register_taxonomy('shape', 'product', $args);
}
add_action('init', 'register_shape_taxonomy');

function register_color_taxonomy() {
    $labels = array(
        'name'              => 'Ranglar',
        'singular_name'     => 'Rang',
        'menu_name'         => 'Ranglar',
        'search_items'      => 'Ranglarni qidirish',
        'all_items'         => 'Barcha ranglar',
        'edit_item'         => 'Rangni tahrirlash',
        'update_item'       => 'Rangni yangilash',
        'add_new_item'      => 'Yangi rang qo‘shish',
        'new_item_name'     => 'Yangi rang nomi',
    );

    $args = array(
        'labels'            => $labels,
        'public'            => true,
        'hierarchical'      => false,
        'show_in_rest'      => true,
        'rewrite'           => array('slug' => 'color'),
        'show_admin_column' => true,
    );

    register_taxonomy('color', 'product', $args);
}
add_action('init', 'register_color_taxonomy');
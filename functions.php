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


add_action('wp', function() {
    remove_all_actions('woocommerce_before_main_content');
    remove_all_actions('woocommerce_before_single_product');
    remove_all_actions('woocommerce_after_single_product');
});



add_action('pre_get_posts', function ($query) {
    if (!is_admin() && $query->is_main_query() && is_page()) {
        $paged = get_query_var('paged') ?: get_query_var('page') ?: 1;
        $query->set('paged', $paged);
    }
});


// ========================== IMPORT ===========================
add_action('pmxi_saved_post', 'custom_link_acf_fields_after_import', 10, 3);

function custom_link_acf_fields_after_import($post_id, $data, $import_id) {
    if (get_post_type($post_id) !== 'product') return;
    if (!function_exists('update_field')) return;

    // Field nomlari (ACF return format: Post Object)
    $catalog_name  = isset($data->catalog)  ? trim((string)$data->catalog)  : '';
    $category_name = isset($data->category) ? trim((string)$data->category) : '';
    $brand_name    = isset($data->brand)    ? trim((string)$data->brand)    : '';

    error_log("📦 PRODUCT ID: $post_id");
    error_log("➡️ Catalog: " . $catalog_name);
    error_log("➡️ Category: " . $category_name);
    error_log("➡️ Brand: " . $brand_name);

    function normalize($str) {
        return strtolower(trim(preg_replace('/\s+/', '', $str)));
    }

    function get_or_create_post_by_title($title, $post_type) {
        if (empty($title)) return 0;

        $normalized = normalize($title);
        $posts = get_posts([
            'post_type' => $post_type,
            'post_status' => 'publish',
            'numberposts' => -1,
        ]);

        foreach ($posts as $p) {
            if (normalize($p->post_title) === $normalized) {
                error_log("✅ Found existing $post_type: {$p->post_title} [ID: {$p->ID}]");
                return $p->ID;
            }
        }

        $new_id = wp_insert_post([
            'post_title'  => wp_strip_all_tags($title),
            'post_status' => 'publish',
            'post_type'   => $post_type,
        ]);

        error_log("🆕 Created new $post_type: $title [ID: $new_id]");
        return $new_id;
    }

    // Field key olish (qat'iy)
    $catalog_field_key  = 'field_685f75af11f98';  // ACF’da 'catalog' field ning haqiqiy KEY si
    $category_field_key = 'field_6853bfcd1d530'; // ACF’da 'category' field ning haqiqiy KEY si
    $brand_field_key    = 'field_6853bdd6265cf';    // ACF’da 'brand' field ning haqiqiy KEY si

    // Siz ACF → Field Group ichida har bir field ustiga bosib, field key’ni olasiz.

    // === Catalog ===
    $catalog_id = 0;
    if (!empty($catalog_name)) {
        $catalog_id = get_or_create_post_by_title($catalog_name, 'catalog');
        update_field($catalog_field_key, $catalog_id, $post_id);
        error_log("🔗 Linked catalog to product [ID: $catalog_id]");
    }

    // === Category ===
    $category_id = 0;
    if (!empty($category_name)) {
        $category_id = get_or_create_post_by_title($category_name, 'category');
        update_field($category_field_key, $category_id, $post_id);
        error_log("🔗 Linked category to product [ID: $category_id]");

        if ($catalog_id) {
            update_field($catalog_field_key, $catalog_id, $category_id); // catalog ni category ga bog'lash
            error_log("🔗 Linked catalog [$catalog_id] to category [$category_id]");
        }
    }

    // === Brand ===
    if (!empty($brand_name)) {
        $brand_id = get_or_create_post_by_title($brand_name, 'brand');
        update_field($brand_field_key, $brand_id, $post_id);
        error_log("🔗 Linked brand to product [ID: $brand_id]");
    }
}












<?php
$catalog_id = get_the_ID();

$categories = get_posts([
    'post_type' => 'product_category',
    'meta_key' => 'catalog',
    'meta_value' => $catalog_id,
    'posts_per_page' => -1,
    'fields' => 'ids',
]);

if ($categories):
    $products = get_posts([
        'post_type' => 'product',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'meta_query' => [
            [
                'key' => 'product_category',
                'compare' => 'EXISTS',
            ]
        ],
    ]);
    ?>

    <?php foreach ($products as $product):
    $product_fields = get_field('product', $product->ID);
    if (!$product_fields) continue;

    $product_category = $product_fields['category'] ?? null;
    if (!$product_category || !in_array($product_category->ID, $categories)) continue;

    if (empty($product_fields['in_stock'])) {
        continue;
    }

    $brand_post = $product_fields['brand'] ?? null;
    $brand_title = $brand_post ? get_the_title($brand_post) : '';

    $product_code = get_field('product_code', $product->ID);
    $description = $product_fields['short_description'] ?? '';
    $image = $product_fields['image']['url'] ?? get_the_post_thumbnail_url($product->ID, 'medium');

    $prices = get_discounted_price($product->ID);
    ?>

    <div class="product-card">
        <div class="product-image">
            <img src="<?= esc_url($image) ?>" alt="<?= esc_attr($brand_title) ?>"
                 class="product-img">
        </div>

        <div class="product-card__top">
            <img src="<?= get_template_directory_uri() ?>/assets/img/checking.svg" alt="">
            <img src="<?= get_template_directory_uri() ?>/assets/img/addlikes.svg" alt="">
        </div>

        <div class="product-details">
            <div class="product-details__cont">
                <div class="product-title"><?= esc_html($brand_title) ?></div>
                <div class="product-article">Код: <?= esc_html($product_code) ?></div>
            </div>

            <div class="product-description"><?= esc_html($description) ?></div>

            <div class="product-wrap">
                <div class="product-prices">
                    <div class="product-prices-wrap">
                        <?php if ($prices['discount'] > 0): ?>
                            <span class="current-price"><?= number_format($prices['original'], 0, '', ' ') ?> ₽</span>
                            <span class="product-badge">-<?= $prices['discount'] ?>%</span>
                        <?php endif; ?>
                    </div>
                    <span class="old-price"><?= number_format($prices['final'], 0, '', ' ') ?> ₽</span>
                </div>

                <button class="add-to-cart-btn">В корзину</button>
            </div>

            <div class="product-yandex">
                <img src="<?= get_template_directory_uri() ?>/assets/img/plus.svg" alt="">
                1 199 баллов Плюса кэшбэк в
                <img src="<?= get_template_directory_uri() ?>/assets/img/ya-pay.svg" alt="">
            </div>

            <div class="product-split">
                <img src="<?= get_template_directory_uri() ?>/assets/img/cask.svg" alt="">
                х4 платежа в
                <img src="<?= get_template_directory_uri() ?>/assets/img/ya-split.svg" alt="">
            </div>
        </div>
    </div>

<?php endforeach; ?>
<?php endif; ?>
<?php
/*
 * Template name: Главная страница
 * */

get_header();

$home = get_field('home');

?>

<?php if ($home['banner_hidden'] !== "Да"): ?>
    <div class="banner">


        <div class="container">
            <div class="banner-wrap">
                <div class="banner-text">

                    <div class="banner-text-cont">
                        <h1 class="banner-title"><?= $home['banner_title'] ?></h1>
                        <div class="banner-subtitle">
                            <?= $home['banner_description'] ?>
                        </div>

                    </div>
                    <div class="banner-button">
                        <a href="<?php echo $home['banner_link']['url'] ?>"><?= $home['banner_link']['title'] ?></a>
                    </div>


                </div>

                <div class="banner-img">
                    <img src="<?php echo $home['banner_image']['url'] ?>" alt="">
                </div>

            </div>
        </div>
    </div>
<?php endif; ?>

<?php if ($home['catalog_hidden'] !== "Да"): ?>
    <div class="catalog-new">
        <div class="container">
            <div class="catalog-wrap">
                <div class="catalog__blocks">
                    <?php
                    // Barcha kataloglarni olish
                    $catalogs = get_posts([
                        'post_type' => 'catalog',
                        'posts_per_page' => -1,
                        'post_status' => 'publish',
                        'order' => 'ASC',
                    ]);

                    foreach ($catalogs as $catalog) :
                        $card = get_field('card', $catalog->ID);
                        $card_title = $card['title'] ?? get_the_title($catalog);
                        $card_image = $card['image'] ?? [];
                        $card_mini_image = $card['mini_image'] ?? [];

                        // Mahsulotlar sonini hisoblash (catalog field’ga asoslanib)
                        $products = new WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => -1,
                            'post_status' => 'publish',
                            'fields' => 'ids', // Faqat ID’larni olish (optimallashtirish uchun)
                            'meta_query' => [
                                [
                                    'key' => 'catalog',
                                    'value' => $catalog->ID,
                                    'compare' => '=',
                                ],
                            ],
                        ]);

                        $product_count = $products->found_posts; // Mahsulotlar soni
                        wp_reset_postdata(); // Query’ni tozalash

                        $catalog_link = get_permalink($catalog->ID);
                        ?>
                        <a href="<?= esc_url($catalog_link) ?>" class="catalog__block">
                            <div class="catalog__block-cont">
                                <div class="catalog__block-count">
                                    <?= esc_html($product_count) ?> товара
                                </div>
                                <div class="catalog__block-title">
                                    <?= esc_html($card_title) ?>
                                </div>
                            </div>
                            <div class="catalog__block-imgmini">
                                <img src="<?= esc_url($card_mini_image['url'] ?? '') ?>" alt="">
                            </div>
                            <div class="catalog__block-img">
                                <img src="<?= esc_url($card_image['url'] ?? '') ?>" alt="">
                            </div>
                            <div class="catalog__block-href">
                                Перейти в раздел
                            </div>
                        </a>
                    <?php endforeach; ?>
                </div>


            </div>
        </div>
    </div>
<?php endif; ?>

<?php if ($home['brandw_hidden'] !== "Да"): ?>
    <?php
    // ACF field’lardan qora va oq mahsulotlarni olish
    $new = $home['brandw_new_product'] ?: [];
    $white = $home['brandw_white_product'] ?: [];

    // Qora mahsulot uchun ma'lumotlar
    $new_product_id = !empty($new['product']) ? (is_object($new['product']) ? $new['product']->ID : absint($new['product'])) : 0;
    $new_title = !empty($new['title']) ? $new['title'] : '';
    $new_product = $new_product_id ? wc_get_product($new_product_id) : null;
    $new_text = $new_product ? wp_strip_all_tags($new_product->get_short_description()) : '';

    // Oq mahsulot uchun ma'lumotlar
    $white_product_id = !empty($white['product']) ? (is_object($white['product']) ? $white['product']->ID : absint($white['product'])) : 0;
    $white_title = !empty($white['title']) ? $white['title'] : '';
    $white_product = $white_product_id ? wc_get_product($white_product_id) : null;
    $white_text = $white_product ? wp_strip_all_tags($white_product->get_short_description()) : '';

    // Narx va chegirma hisoblash funksiyasi
    function get_discounted_price($product) {
        if (!$product || !$product->is_purchasable() || $product->get_status() !== 'publish') {
            return null;
        }
        $regular_price = floatval($product->get_regular_price()) ?: 0;
        $sale_price = floatval($product->get_sale_price()) ?: $regular_price;
        $discount = ($regular_price && $sale_price && $regular_price > $sale_price)
            ? round((($regular_price - $sale_price) / $regular_price) * 100)
            : 0;
        return [
            'original' => $regular_price,
            'final' => $sale_price,
            'discount' => $discount
        ];
    }

    // Narxlar
    $new_price = $new_product ? get_discounted_price($new_product) : null;
    $white_price = $white_product ? get_discounted_price($white_product) : null;

    // Rasmlar
    $new_image = $new_product ? wp_get_attachment_image_url($new_product->get_image_id(), 'medium') : '';
    $white_image = $white_product ? wp_get_attachment_image_url($white_product->get_image_id(), 'medium') : '';
    ?>

    <div class="bandw">
        <div class="container">
            <div class="bandw-wrap">
                <div class="bandw__blocks">
                    <!-- Yangi mahsulot -->
                    <div class="bandw__block">
                        <div class="bandw__block-cont">
                            <div class="bandw__block-title">
                                <?= esc_html($new_title) ?: 'Название отсутствует' ?>
                            </div>
                            <div class="bandw__block-text">
                                <?= esc_html($new_text) ?: 'Описание отсутствует' ?>
                            </div>
                            <?php if ($new_price): ?>
                                <div class="bandw__block-prices">
                                    <?php if ($new_price['discount'] > 0): ?>
                                        <div class="bandw__block-discount">
                                            <div class="bandw__block-discount-t">
                                                <?= number_format($new_price['original'], 0, '', ' ') ?> ₽
                                            </div>
                                            <div class="bandw__block-procent">
                                                -<?= $new_price['discount'] ?>%
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                    <div class="bandw__block-price">
                                        <?= number_format($new_price['final'], 0, '', ' ') ?> ₽
                                    </div>
                                </div>
                            <?php else: ?>
                                <div class="bandw__block-prices">
                                    <div class="bandw__block-price">Цена недоступна</div>
                                </div>
                            <?php endif; ?>
                            <div class="bandw__block-img">
                                <?php if ($new_image): ?>
                                    <img src="<?= esc_url($new_image) ?>" alt="<?= esc_attr($new_title) ?>">
                                <?php else: ?>
                                    <img src="<?= esc_url(get_template_directory_uri() . '/assets/img/placeholder.png') ?>" alt="Нет изображения">
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>

                    <!-- Oq mahsulot -->
                    <div class="bandw__block">
                        <div class="bandw__block-cont">
                            <div class="bandw__block-title">
                                <?= esc_html($white_title) ?: 'Название отсутствует' ?>
                            </div>
                            <div class="bandw__block-text">
                                <?= esc_html($white_text) ?: 'Описание отсутствует' ?>
                            </div>
                            <?php if ($white_price): ?>
                                <div class="bandw__block-prices">
                                    <?php if ($white_price['discount'] > 0): ?>
                                        <div class="bandw__block-discount">
                                            <div class="bandw__block-discount-t">
                                                <?= number_format($white_price['original'], 0, '', ' ') ?> ₽
                                            </div>
                                            <div class="bandw__block-procent">
                                                -<?= $white_price['discount'] ?>%
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                    <div class="bandw__block-price">
                                        <?= number_format($white_price['final'], 0, '', ' ') ?> ₽
                                    </div>
                                </div>
                            <?php else: ?>
                                <div class="bandw__block-prices">
                                    <div class="bandw__block-price">Цена недоступна</div>
                                </div>
                            <?php endif; ?>
                            <div class="bandw__block-img">
                                <?php if ($white_image): ?>
                                    <img src="<?= esc_url($white_image) ?>" alt="<?= esc_attr($white_title) ?>">
                                <?php else: ?>
                                    <img src="<?= esc_url(get_template_directory_uri() . '/assets/img/placeholder.png') ?>" alt="Нет изображения">
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>


<?php if ($home['brand_hidden'] !== "Да"): ?>
    <div class="brands">
        <div class="container">
            <div class="brands-wrap">
                <div class="brands__blocks">
                    <?php
                    $brands = get_posts([
                        'post_type' => 'brand',
                        'post_status' => 'publish',
                        'posts_per_page' => -1,
                        'orderby' => 'title',
                        'order' => 'ASC',
                    ]);

                    foreach ($brands as $brand) {
                        $fields = get_field('brand', $brand->ID);
                        $logo = $fields['logo'] ?? null;
                        ?>
                        <div class="brands__block">
                            <?php if (!empty($logo['url'])): ?>
                                <img src="<?= esc_url($logo['url']) ?>" alt="<?= esc_attr(get_the_title($brand)) ?>">
                            <?php endif; ?>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<?php if ($home['about_company_hidden'] !== "Да"): ?>
    <div class="about">
        <div class="container">
            <div class="about-wrap">
                <div class="about__blocks">
                    <div class="about-left">
                        <div class="about-left-title">
                            <?= $home['about_company_title'] ?>
                        </div>
                        <div class="about-left-text">
                            <?= $home['about_company_text'] ?>
                        </div>
                        <div class="about-left__blocks">
                            <div class="about-left__block">
                                <div class="about-left__block-title">
                                    <?= $home['about_company_age']['value'] ?>
                                </div>
                                <div class="about-left_block-subtitle">
                                    <?= $home['about_company_age']['text'] ?>
                                </div>
                            </div>
                            <div class="about-left__block">
                                <div class="about-left__block-title">
                                    <?= $home['about_company_brand_count']['value'] ?>
                                </div>
                                <div class="about-left_block-subtitle">
                                    <?= $home['about_company_brand_count']['text'] ?>
                                </div>
                            </div>
                            <div class="about-left__block">
                                <div class="about-left__block-title">
                                    <?= $home['about_company_warranty_period']['value'] ?>
                                </div>
                                <div class="about-left_block-subtitle">
                                    <?= $home['about_company_warranty_period']['text'] ?>
                                </div>
                            </div>
                            <div class="about-left__block">
                                <div class="about-left__block-title">
                                    <?= $home['about_company_client_count']['value'] ?>
                                </div>
                                <div class="about-left_block-subtitle">
                                    <?= $home['about_company_client_count']['text'] ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-right">
                        <img src="<?php echo $home['about_company_image']['url'] ?>" alt="<?php echo $home['about_company_image']['alt'] ?>">
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<?php if ($home['sales_hits_hidden'] !== "Да"): ?>
    <div class="hits">
        <div class="container">
            <div class="hits-wrap">
                <div class="hits-title">
                    <?= $home['sales_hits_title'] ?>
                </div>
                <div class="hits__blocks">
                    <?php
                    $args = [
                        'post_type'      => 'product',
                        'post_status'    => 'publish',
                        'posts_per_page' => 8,
                        'orderby'        => 'date',
                        'order'          => 'DESC',
                    ];

                    $loop = new WP_Query($args);

                    while ($loop->have_posts()) : $loop->the_post();
                        $product = wc_get_product(get_the_ID());

                        $brand_id     = get_field('brand', $product->get_id());
                        $brand_title    = $brand_id    ? get_the_title($brand_id)    : '';

                        $regular_price = (float) $product->get_regular_price();
                        $sale_price    = (float) $product->get_sale_price();
                        $final_price   = $sale_price > 0 ? $sale_price : $regular_price;

                        $discount = ($regular_price && $sale_price)
                            ? round((($regular_price - $sale_price) / $regular_price) * 100)
                            : 0;
                        $product_title = $product->get_title();
                        $desc = $product->get_description();
                        $short_desc = $product->get_short_description();
                        $sku        = $product->get_sku();
                        $permalink  = get_permalink($product->get_id());
                        $image_url  = wp_get_attachment_image_url($product->get_image_id(), 'medium');

                        // Atributlar olish (Color, Shape, Installation)
                        $attributes = [];
                        foreach (['pa_color', 'pa_shape', 'pa_installation', 'pa_collection'] as $attr) {
                            $terms = wp_get_post_terms($product->get_id(), $attr);
                            foreach ($terms as $term) {
                                $attributes[] = $term->name;
                            }
                        }

                        $attributes_str = implode(', ', $attributes);
                        ?>
                        <div class="product-card">
                            <div class="product-image">
                                <img src="<?= esc_url($image_url) ?>" alt="<?= esc_attr($product->get_name()) ?>" class="product-img">
                            </div>

                            <div class="product-card__top">
                                <!--                                <img src="--><?php //= get_template_directory_uri() ?><!--/assets/img/checking.svg" alt="">-->
                                <img src="<?= get_template_directory_uri() ?>/assets/img/addlikes.svg" alt="">
                            </div>

                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title"><?= esc_html($brand_title) ?></div>
                                    <div class="product-article">Код: <?= esc_html($sku) ?></div>
                                </div>

                                <a href="<?= esc_url($permalink) ?>" style="cursor: pointer; color: #000;" class="product-description">
                                    <?php if($short_desc): ?>
                                        <?= esc_html($short_desc) ?>
                                    <?php else: ?>
                                        <?= esc_html($product_title) ?>
                                    <?php endif; ?>
                                </a>

                                <?php if (!empty($attributes_str)) : ?>
                                    <div class="product-attributes"><?= esc_html($attributes_str) ?></div>
                                <?php endif; ?>

                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <?php if ($sale_price > 0): ?>
                                                <span class="current-price"><?= number_format($regular_price, 0, '', ' ') ?> ₽</span>
                                                <span class="product-badge">-<?= $discount ?>%</span>
                                            <?php endif; ?>
                                        </div>
                                        <span class="old-price"><?= number_format($final_price, 0, '', ' ') ?> ₽</span>
                                    </div>

                                    <button class="add-to-cart-btn" data-product-id="<?= $product->get_id(); ?>">В корзину</button>
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
                    <?php endwhile; wp_reset_postdata(); ?>
                </div>



                <div class="hits-btn-go ">
                    <a href="shop.html">Перейти в каталог</a>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>


    <div class="request-form">
        <div class="container">
            <div class="form-title form-title-block">Поможем с выбором</div>
            <div class="form-subtitle form-title-block">Наши эксперты дадут исчерпывающие консультации по выбору
                продукции и помогут подобрать оптимальный вариант
            </div>

            <div class="form-content">
                <div class="form-title form-title-none">Поможем с выбором</div>
                <div class="form-subtitle form-title-none">Наши эксперты дадут исчерпывающие консультации по выбору
                    продукции и помогут подобрать оптимальный вариант
                </div>

                <?php echo do_shortcode('[contact-form-7 id="1174d82" title="Поможем с выбором"]'); ?>

            </div>
            <div class="form-image">
                <img src="<?php echo get_template_directory_uri() ?>/assets/img/formimg2.png" alt="Форма обратной связи"
                     class="form-img">
            </div>
        </div>
    </div>


<?php
get_footer();
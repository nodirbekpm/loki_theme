<?php
/*
 * Template name: Main page
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
                    $catalogs = get_posts([
                        'post_type' => 'catalog',
                        'posts_per_page' => -1,
                        'post_status' => 'publish',
                        'order' => 'ASC',
                    ]);

                    foreach ($catalogs as $catalog) :
                        $card = get_field('card', $catalog->ID);
                        $card_title = $card['title'] ?? get_the_title($catalog);
                        $card_image = $card['image'];
                        $product_count = 0;

                        $categories = get_posts([
                            'post_type' => 'product_category',
                            'meta_key' => 'catalog',
                            'meta_value' => $catalog->ID,
                            'posts_per_page' => -1,
                            'fields' => 'ids',
                        ]);

                        if ($categories) {
                            $products = get_posts([
                                'post_type' => 'product',
                                'posts_per_page' => -1,
                                'post_status' => 'publish',
                                'fields' => 'ids',
                            ]);

                            foreach ($products as $product_id) {
                                $product_group = get_field('product', $product_id);
                                $product_categories = $product_group['category'] ?? null;

                                if ($product_categories) {
                                    if (is_array($product_categories)) {
                                        foreach ($product_categories as $cat) {
                                            $cat_id = is_object($cat) ? $cat->ID : $cat;
                                            if (in_array($cat_id, $categories)) {
                                                $product_count++;
                                                break;
                                            }
                                        }
                                    } else {
                                        $cat_id = is_object($product_categories) ? $product_categories->ID : $product_categories;
                                        if (in_array($cat_id, $categories)) {
                                            $product_count++;
                                        }
                                    }
                                }
                            }
                        }

                        $catalog_link = get_permalink($catalog->ID);
                        ?>
                        <div class="catalog__block">
                            <div class="catalog__block-cont">
                                <div class="catalog__block-count">
                                    <?= esc_html($product_count) ?> товара
                                </div>
                                <div class="catalog__block-title">
                                    <?= esc_html($card_title) ?>
                                </div>
                            </div>
                            <div class="catalog__block-imgmini">
                                <img src="<?= esc_url($card_image['sizes']['thumbnail'] ?? '') ?>" alt="">
                            </div>
                            <div class="catalog__block-img">
                                <img src="<?= esc_url($card_image['url'] ?? '') ?>" alt="">
                            </div>
                            <a href="<?= esc_url($catalog_link) ?>" class="catalog__block-href">
                                Перейти в раздел
                            </a>
                        </div>
                    <?php endforeach; ?>
                </div>


            </div>
        </div>
    </div>
<?php endif; ?>

<?php
if ($home['brandw_hidden'] !== "Да"):
    $new = $home['brandw_new_product'];
    $white = $home['brandw_white_product'];

    $new_product = $new['product'];
    $white_product = $white['product'];

    $new_price = $new_product ? get_discounted_price($new_product->ID) : null;
    $white_price = $white_product ? get_discounted_price($white_product->ID) : null;

    $new_image = get_field('product', $new_product->ID)['image'] ?? null;
    $white_image = get_field('product', $white_product->ID)['image'] ?? null;
    ?>
    <div class="bandw">
        <div class="container">
            <div class="bandw-wrap">
                <div class="bandw__blocks">
                    <!-- Yangi mahsulot -->
                    <div class="bandw__block">
                        <div class="bandw__block-cont">
                            <div class="bandw__block-title">
                                <?= esc_html($new['title']) ?>
                            </div>
                            <div class="bandw__block-text">
                                <?= esc_html($new['text']) ?>
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
                            <?php endif; ?>
                            <div class="bandw__block-img">
                                <?php if (!empty($new_image['url'])): ?>
                                    <img src="<?= esc_url($new_image['url']) ?>" alt="">
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>

                    <!-- Oq mahsulot -->
                    <div class="bandw__block">
                        <div class="bandw__block-cont">
                            <div class="bandw__block-title">
                                <?= esc_html($white['title']) ?>
                            </div>
                            <div class="bandw__block-text">
                                <?= esc_html($white['text']) ?>
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
                            <?php endif; ?>
                            <div class="bandw__block-img">
                                <?php if (!empty($white_image['url'])): ?>
                                    <img src="<?= esc_url($white_image['url']) ?>" alt="">
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
                    $latest_products = get_posts([
                        'post_type' => 'product',
                        'post_status' => 'publish',
                        'posts_per_page' => 8,
                        'orderby' => 'date',
                        'order' => 'DESC',
                    ]);

                    foreach ($latest_products as $product) :
                        $product_fields = get_field('product', $product->ID); // group field
                        $brand_post = $product_fields['brand'] ?? null;
                        $brand_title = $brand_post ? get_the_title($brand_post) : '';

                        $product_code = get_field('product_code', $product->ID);
                        $description = $product_fields['short_description'] ?? '';
                        $image = $product_fields['image']['url'] ?? get_the_post_thumbnail_url($product->ID, 'medium');

                        $prices = get_discounted_price($product->ID);
                        ?>
                        <div class="product-card">

                            <div class="product-image">
                                <img src="<?= esc_url($image) ?>" alt="<?= esc_attr($brand_title) ?>" class="product-img">
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
                                            <?php endif; ?>
                                            <?php if ($prices['discount'] > 0): ?>
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
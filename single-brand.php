<?php
get_header();
$home_page_id = get_option('page_on_front');
$home = get_field('home', $home_page_id);
$brand = get_field('brand');

?>


    <div class="banner-light">
        <div class="container">

            <!-- breadcrumbs -->
            <div class="bread_crumbs">
                <a href="<?php echo esc_url(home_url('/')); ?>">Главная</a>
                <a href="<?php echo esc_url(get_post_type_archive_link('brand')); ?>">БРЕНДЫ</a>
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </div>

            <div class="banner-top">
                <div class="banner-text">
                    <div class="banner-light-title">
                        <?= $brand['title'] ?>
                    </div>
                    <div class="banner-light-subtitle">
                        <?= $brand['short_description'] ?>
                    </div>
                </div>

                <img src="<?php echo $brand['page_img']['url'] ?>" alt="">
            </div>

        </div>

        <div class="container">
            <div class="banner-light-text">
                <div class="banner-light-text-title">
                    <?= $brand['full_title'] ?>
                </div>
                <?php foreach ($brand['texts'] as $text){ ?>
                    <p><?= $text['text'] ?></p>
                <?php } ?>
                <a href="">Развернуть полное описание ↓</a>
            </div>
            <a href="/?catalog=современные-камины" class="banner-light-show">
                <span>Перейти в полный каталог продукции Palazzetti</span>
            </a>
        </div>
    </div>


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


<?php
get_footer();
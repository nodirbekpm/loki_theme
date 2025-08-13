<?php
get_header();

remove_all_actions('woocommerce_single_product_summary');
?>

<?php
defined('ABSPATH') || exit;

global $product, $post;
if (!$product instanceof WC_Product) {
    $product = wc_get_product($post->ID);
}

$home_page_id = get_option('page_on_front');
$home = get_field('home', $home_page_id);
$delivery_places = get_field('delivery_places', 'option');
$delivery_points = get_field('delivery_points', 'option');
$phone = get_field('phone', 'option');
$product_id = $product->get_id();
$product_code = $product->get_sku();

$catalog_id   = get_field('catalog', $product_id);
$category_id  = get_field('category', $product_id);
$brand_id     = get_field('brand', $product_id);
$instructions = get_field('instructions', $product_id); // may be WYSIWYG or string

// Get titles from IDs
$catalog_title  = $catalog_id  ? get_the_title($catalog_id)  : '';
$category_title = $category_id ? get_the_title($category_id) : '';
$brand_title    = $brand_id    ? get_the_title($brand_id)    : '';

// attributes
$attributes = $product->get_attributes();

if ( empty( $product ) || ! $product->is_type( 'simple' ) ) {
    echo '<p>Mahsulot topilmadi.</p>';
    get_footer();
    return;
}

// Chegirma %
$price_regular = (float) $product->get_regular_price();
$price_sale = (float) $product->get_sale_price();
$price_final = $price_sale ?: $price_regular;
$discount_percent = ($price_sale && $price_regular) ? round(100 - ($price_sale / $price_regular * 100)) : 0;
$in_stock = $product->is_in_stock();

$main_image_id = $product->get_image_id();
$gallery_ids = $product->get_gallery_image_ids();

error_log('Main Image ID: ' . print_r($main_image_id, true));
error_log('Gallery IDs: ' . print_r($gallery_ids, true));

?>

    <div class="product-card-single">
        <div class="container special">
            <!-- breadcrumbs -->
            <div class="bread_crumbs">
                <a href="/">Главная</a>

                <?php if ($catalog_id): ?>
                    <a href="<?php echo get_permalink($catalog_id); ?>">
                        <?php echo esc_html($catalog_title); ?>
                    </a>
                <?php endif; ?>

                <?php if ($category_id): ?>
                    <a href="<?php echo get_permalink($category_id); ?>">
                        <?php echo esc_html($category_title); ?>
                    </a>
                <?php endif; ?>

                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </div>



            <div class="product-card">
                <!-- Product Gallery -->
                <div class="product-gallery">

                    <!-- Thumbnails Slider -->
                    <div class="thumbnail-slider thumbnail-swiper">
                        <div class="swiper-wrapper">

                            <?php if ($main_image_id): ?>
                                <div class="swiper-slide thumbnail active">
                                    <img src="<?= esc_url(wp_get_attachment_image_url($main_image_id, 'medium')) ?>"
                                         alt="<?= esc_attr(get_post_meta($main_image_id, '_wp_attachment_image_alt', true)) ?>">
                                </div>
                            <?php endif; ?>

                            <?php foreach ($gallery_ids as $image_id): ?>
                                <div class="swiper-slide thumbnail">
                                    <img src="<?= esc_url(wp_get_attachment_image_url($image_id, 'medium')) ?>"
                                         alt="<?= esc_attr(get_post_meta($image_id, '_wp_attachment_image_alt', true)) ?>">
                                </div>
                            <?php endforeach; ?>

                        </div>
                    </div>

                    <!-- Main Image Slider -->
                    <div class="swiper main-slider main-swiper swiper-container">
                        <div class="swiper-wrapper">

                            <?php if ($main_image_id): ?>
                                <div class="main-slide swiper-slide">
                                    <img src="<?= esc_url(wp_get_attachment_image_url($main_image_id, 'large')) ?>"
                                         alt="<?= esc_attr(get_post_meta($main_image_id, '_wp_attachment_image_alt', true)) ?>">
                                </div>
                            <?php endif; ?>

                            <?php foreach ($gallery_ids as $image_id): ?>
                                <div class="main-slide swiper-slide">
                                    <img src="<?= esc_url(wp_get_attachment_image_url($image_id, 'large')) ?>"
                                         alt="<?= esc_attr(get_post_meta($image_id, '_wp_attachment_image_alt', true)) ?>">
                                </div>
                            <?php endforeach; ?>

                        </div>
                    </div>

                    <!-- Navigation / Pagination -->
                    <div class="pagination__block">
                        <div class="swiper2-button-prev">
                            <img src="<?= get_template_directory_uri() ?>/assets/img/prevsl.svg" alt="">
                        </div>
                        <div class="swiper2-pagination"></div>
                        <div class="swiper2-button-next">
                            <img src="<?= get_template_directory_uri() ?>/assets/img/nextsl.svg" alt="">
                        </div>
                    </div>

                </div>

                <!-- Product Info -->
                <div class="product-info">
                    <div class="product-info-top">
                        <div class="product-brand"><?= esc_html($brand_title) ?></div>
                        <div class="product-info-stock">
                            <img src="<?php echo get_template_directory_uri() ?>/assets/img/stock.svg" alt="">
                            <?= $in_stock ? 'в наличии' : 'нет в наличии' ?>
                        </div>
                    </div>

                    <div class="product-code">Код товара: <?= esc_html($product_code) ?></div>

                    <div class="product-title"><?= esc_html(get_the_title()) ?></div>

                    <div class="product-info__block">
                        <div class="price-section">
                            <div class="price-section-wrap">
                                <?php if ($discount_percent): ?>
                                    <span class="old-price"><?= number_format($price_regular, 0, '', ' ') ?> ₽</span>
                                    <span class="discount">-<?= $discount_percent ?>%</span>
                                <?php endif; ?>
                            </div>
                            <span class="current-price"><?= number_format($price_final, 0, '', ' ') ?> ₽</span>
                        </div>

                        <div class="action-buttons">
                            <button class="btn-add-card" data-product-id="<?= esc_attr($product->get_id()) ?>">В корзину</button>
                            <button class="btn-like-secondary" title="Сравнение">
                                <img src="<?php echo get_template_directory_uri() ?>/assets/img/sravnenie.svg" alt="">
                            </button>
                            <button data-product-id="<?= $product->get_id(); ?>" class="btn-like-secondary like_button" title="Понравилось">
<!--                                <img src="--><?php //echo get_template_directory_uri() ?><!--/assets/img/like23.svg" alt="">-->
                            </button>
                        </div>
                    </div>

                    <div class="show-discount">
                        <div class="show-discount-text">
                            <span>ВИДЕЛИ ГДЕ-ТО ДЕШЕВЛЕ? ПРОСТО УКАЖИТЕ ЦЕНУ ЗДЕСЬ</span>
                        </div>
                        <form class="footer__subscribe">
                            <input type="text" placeholder="ВАША ЦЕНА" class="footer__input">
                            <button class="footer__submit" type="submit">
                                <img src="<?php echo get_template_directory_uri() ?>/assets/img/arrow2.svg" alt="">
                            </button>
                        </form>
                    </div>

                    <div class="features-list-wrap">
                        <div class="features-list-title">Характеристики:</div>
                        <?php
                        // Asosiy 5 ta atribut slugi (sluglarini pa_ bilan yozish)
                        $main_keys = [
                            'pa_heating_area'     => 'Площадь отопления, м2',
                            'pa_power'            => 'Мощность, кВт',
                            'pa_material'         => 'Материал',
                            'pa_chimney_diameter' => 'Диаметр дымохода, мм',
                            'pa_weight'           => 'Вес, кг',
                        ];

                        // Barcha mavjud atribut qiymatlarini yig‘ib olamiz
                        $values = [];
                        foreach ($attributes as $attribute) {
                            $name  = $attribute->get_name(); // masalan pa_heating_area
                            $label = wc_attribute_label($name);
                            $value = $product->get_attribute($name);

                            if (!empty($value)) {
                                $values[$name] = [
                                    'label' => $label,
                                    'value' => $value,
                                ];
                            }
                        }
                        ?>
                        <ul class="features-list">
                            <?php foreach ($main_keys as $key => $label): ?>
                                <?php if (!empty($values[$key])): ?>
                                    <li><span><?= esc_html($label) ?></span><span><?= esc_html($values[$key]['value']) ?></span></li>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <div class="all-artibutes">
                        <a href="#tab-additional_information">Все характеристики</a>
                    </div>

                    <div class="delivery-wrap">
                        <div class="delivery-title">Доставка</div>
                        <ul class="delivery-info">
                            <?php foreach ($delivery_places as $place): ?>
                                <li><span><?= $place['title'] ?></span><span><?= $place['text'] ?></span></li>
                            <?php endforeach; ?>
                        </ul>
                        <div class="delivery-bottom">
                            Точный расчет доставки получите у менеджера по тел. <?= esc_html($phone) ?>
                        </div>
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

                    <div class="product-card__bottoms">
                        <div class="product-card__bottom">
                            <span>Нашли дешевле?</span>
                        </div>
                        <div class="product-card__bottom">
                            <span>Оплата 4 частями</span>
                        </div>
                        <div class="product-card__bottom">
                            <span>Рассрочка</span>
                        </div>
                    </div>
                </div>

                <!-- Tabs -->
                <div class="tabs">
                    <div class="tabs-header">
                        <button class="tab-btn active" data-tab="description">Описание</button>
                        <button class="tab-btn" data-tab="specs">Характеристики</button>
                        <button class="tab-btn" data-tab="manual">Инструкция</button>
                        <button class="tab-btn" data-tab="delivery">Доставка</button>
                        <button class="tab-btn" data-tab="reviews">Отзывы</button>
                    </div>

                    <?php

                    $description = $product ? $product->get_description() : '';
//                    $material           = $product->get_attribute('pa_material');
//                    $energy_consumption = $product->get_attribute('pa_energy_consumption');
//                    $made_in            = $product->get_attribute('pa_made_in');
//
//                    $equipment_raw = $product->get_attribute('pa_equipment');
//                    $equipment_array = array_filter(array_map('trim', explode(',', $equipment_raw)));
//                    $equipment = implode(', ', $equipment_array);
//
//                    $width_mm  = (int) $product->get_attribute('pa_width');
//                    $height_mm = (int) $product->get_attribute('pa_height');
//                    $depth_mm  = (int) $product->get_attribute('pa_depth');
//
//                    if ($width_mm && $height_mm && $depth_mm) {
//                        $width_cm  = round($width_mm / 10);
//                        $height_cm = round($height_mm / 10);
//                        $depth_cm  = round($depth_mm / 10);
//
//                        $sizes = "{$width_cm} см x {$height_cm} см x {$depth_cm} см";
//                    } else {
//                        $sizes = '';
//                    }

                    ?>

                    <div class="tab-content active" id="description">
                        <?= $description ?>
                    </div>

                    <div class="tab-content" id="specs">
                        <h3>Характеристики</h3>
                        <ul class="features-list">
                            <?php foreach ($values as $key => $data): ?>
                                <?php if (!array_key_exists($key, $main_keys)): ?>
                                    <li><span><?= esc_html($data['label']) ?>:</span><span><?= esc_html($data['value']) ?></span></li>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <div class="tab-content" id="manual">
                        <?= wpautop($instructions) ?>
                    </div>

                    <div class="tab-content" id="delivery">
                        <h3>Условия доставки</h3>
                        <p>Мы осуществляем доставку по всей России. Сроки и стоимость зависят от вашего местоположения и выбранного способа доставки.</p>
                        <?php if (!empty($delivery_points)): ?>
                            <?php foreach ($delivery_points as $place): ?>
                                <p><strong><?= esc_html($place['title']) ?>:</strong> <?= esc_html($place['text']) ?></p>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>

                    <div class="tab-content" id="reviews">
                        <h3>Отзывы о товаре</h3>
                        <p>Здесь будут отображаться отзывы покупателей о данном товаре.</p>
                        <div class="review">
                            <p><strong>Иван Иванов</strong> ★★★★★</p>
                            <p>Отличный товар, полностью соответствует описанию. Работает без нареканий уже месяц.</p>
                        </div>
                        <div class="review">
                            <p><strong>Петр Петров</strong> ★★★★☆</p>
                            <p>Хороший продукт, но есть небольшие недочеты в сборке. В целом доволен покупкой.</p>
                        </div>
                    </div>
                </div>

                <!-- accordion -->
                <div class="accordion">
                    <div class="accordion-item">
                        <button class="accordion-header">Описание</button>
                        <div class="accordion-content">
                            <?= $description ?>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <button class="accordion-header">Характеристики</button>
                        <div class="accordion-content">
                            <h3>Характеристики</h3>
                            <ul class="features-list">
                                <?php foreach ($values as $key => $data): ?>
                                    <?php if (!array_key_exists($key, $main_keys)): ?>
                                        <li><span><?= esc_html($data['label']) ?>:</span><span><?= esc_html($data['value']) ?></span></li>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <button class="accordion-header">Инструкция</button>
                        <div class="accordion-content">
                            <?= wpautop($instructions) ?>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <button class="accordion-header">Доставка</button>
                        <div class="accordion-content">
                            <h3>Условия доставки</h3>
                            <?php if (!empty($delivery_points)): ?>
                                <?php foreach ($delivery_points as $place): ?>
                                    <p><strong><?= esc_html($place['title']) ?>:</strong> <?= esc_html($place['text']) ?></p>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <button class="accordion-header">Отзывы</button>
                        <div class="accordion-content">
                            <h3>Отзывы о товаре</h3>
                            <div class="review">
                                <p><strong>Иван Иванов</strong> ★★★★★</p>
                                <p>Отличный товар, полностью соответствует описанию. Работает без нареканий уже
                                    месяц.</p>
                            </div>
                            <div class="review">
                                <p><strong>Петр Петров</strong> ★★★★☆</p>
                                <p>Хороший продукт, но есть небольшие недочеты в сборке. В целом доволен покупкой.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
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
                        $image_url  = wp_get_attachment_image_url($product->get_image_id(), 'full');

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
                            <a href="<?= esc_url($permalink) ?>" class="product-image">
                                <img src="<?= esc_url($image_url) ?>" alt="<?= esc_attr($product->get_name()) ?>" class="product-img">
                            </a>

                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <div data-product-id="<?= $product->get_id(); ?>" class="like_button"></div>
                            </div>

                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title"><?= esc_html($brand_title) ?></div>
                                    <div class="product-article">Код: <?= esc_html($sku) ?></div>
                                </div>

                                <a href="<?= esc_url($permalink) ?>" style="cursor: pointer; color: #000;" class="product-description">
                                    <?= esc_html($product_title) ?>
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
                <style>
                    .woocommerce form .form-row::after, .woocommerce form .form-row::before, .woocommerce-page form .form-row::after, .woocommerce-page form .form-row::before{
                        display: none !important;
                    }
                </style>
                <?php echo do_shortcode('[contact-form-7 id="1174d82" title="Поможем с выбором"]'); ?>

            </div>
            <div class="form-image">
                <img src="<?php echo get_template_directory_uri() ?>/assets/img/formimg2.png" alt="Форма обратной связи"
                     class="form-img">
            </div>
        </div>
    </div>

<?php get_footer(); ?>
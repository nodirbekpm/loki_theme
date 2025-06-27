<?php get_header();
$home_page_id = get_option('page_on_front');
$home = get_field('home', $home_page_id);
$delivery_places = get_field('delivery_places', 'option');
$delivery_points = get_field('delivery_points', 'option');
$phone = get_field('phone', 'option');
?>

    <div class="product-card-single">
        <div class="container special">
            <!-- breadcrumbs -->
            <div class="bread_crumbs">
                <a href="#">Главная</a>
                <a href="#">Каталог</a>

                <?php
                $product = get_post();
                $product_code = get_field('product_code', $product->ID);
                $group = get_field('product', $product->ID);
                $category = $group['category'] ?? null;
                $prices = get_discounted_price($product->ID);
                if ($category && is_object($category)) {
                    $catalog = get_field('catalog', $category->ID);

                    if ($catalog && is_object($catalog)) {
                        echo '<a href="' . get_permalink($catalog->ID) . '">' . esc_html($catalog->post_title) . '</a>';
                    }

                    echo '<a href="#">' . esc_html($category->post_title) . '</a>';
                }

                echo '<a href="#">' . esc_html(get_the_title()) . '</a>';
                ?>
            </div>


            <div class="product-card">
                <!-- Product Gallery -->
                <div class="product-gallery">
                    <div class=" thumbnail-slider thumbnail-swiper">
                        <div class="swiper-wrapper">
                            <?php foreach ($group['images'] as $index => $image): ?>
                                <div class="swiper-slide thumbnail <?php echo $index === 0 ? 'active' : ''; ?>">
                                    <img src="<?php echo esc_url($image['url']); ?>"
                                         alt="<?php echo esc_attr($image['alt']); ?>">
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="swiper main-slider main-swiper swiper-container">
                        <div class="swiper-wrapper">
                            <?php foreach ($group['images'] as $index => $image): ?>
                                <div class="main-slide swiper-slide">
                                    <img src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>">
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="pagination__block">
                        <div class="swiper2-button-prev"><img
                                    src="<?php echo get_template_directory_uri() ?>/assets/img/prevsl.svg" alt=""></div>
                        <div class="swiper2-pagination"></div>
                        <div class="swiper2-button-next"><img
                                    src="<?php echo get_template_directory_uri() ?>/assets/img/nextsl.svg" alt=""></div>

                    </div>
                </div>

                <!-- Product Info -->
                <div class="product-info">
                    <div class="product-info-top">
                        <div class="product-brand">LOKI</div>
                        <div class="product-info-stock">
                            <img src="<?php echo get_template_directory_uri() ?>/assets/img/stock.svg" alt=""> в наличии
                        </div>
                    </div>

                    <div class="product-code">Код товара: <?= $product_code ?></div>
                    <div class="product-title">
                        <?= $group['title'] ?>
                    </div>
                    <div class="product-info__block">
                        <div class="price-section">
                            <div class="price-section-wrap">
                                <?php if ($prices['discount'] > 0): ?>
                                    <span class="old-price"><?= number_format($prices['original'], 0, '', ' ') ?> ₽</span>
                                <?php endif; ?>
                                <?php if ($prices['discount'] > 0): ?>
                                    <span class="discount">-<?= $prices['discount'] ?>%</span>
                                <?php endif; ?>
                            </div>
                            <span class="current-price"><?= number_format($prices['final'], 0, '', ' ') ?> ₽</span>
                        </div>

                        <div class="action-buttons">
                            <button class="btn-add-card" data-product-id="<?php echo get_the_ID(); ?>">В корзину</button>
                            <button class=" btn-like-secondary" title="Сравнение"><img src="<?php echo get_template_directory_uri() ?>/assets/img/sravnenie.svg" alt="">
                            </button>
                            <button class=" btn-like-secondary" title="Понравилось"><img src="<?php echo get_template_directory_uri() ?>/assets/img/like23.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="show-discount">
                        <div class="show-discount-text">
                            <span>ВИДЕЛИ ГДЕ-ТО ДЕШЕВЛЕ?
                            ПРОСТО УКАЖИТЕ ЦЕНУ ЗДЕСЬ</span>
                        </div>
                        <!-- <div class="show-discount-btn"> -->
                        <!-- <a href="">ВАША ЦЕНА</a> -->
                        <!-- </div> -->
                        <form class="footer__subscribe">
                            <input type="email" placeholder="ВАША ЦЕНА" class="footer__input">
                            <button class="footer__submit" type="submit" class=""><img src="<?php echo get_template_directory_uri() ?>/assets/img/arrow2.svg" alt="">
                            </button>
                        </form>

                    </div>
                    <div class="features-list-wrap">
                        <div class="features-list-title">Характеристики:</div>
                        <ul class="features-list">
                            <li><span>Площадь отопления, м2</span><span><?= $group['heating_area'] ?></span></li>
                            <li><span>Мощность, кВт</span><span><?= $group['power'] ?></span></li>
                            <li><span>Материал</span><span><?= $group['material'] ?></span></li>
                            <li><span>Диаметр дымохода, мм</span><span><?= $group['chimney_diameter'] ?></span></li>
                            <li><span>Вес, кг</span><span><?= $group['weight'] ?></span></li>
                            <li><span>Ширина, мм</span><span><?= $group['width_mm'] ?></span></li>
                            <li><span>Гарантия</span><span><?= $group['guarantee'] ?></span></li>

                        </ul>
                    </div>
                    <div class="all-artibutes"><a href="">Все характеристики</a></div>
                    <div class="delivery-wrap">
                        <div class="delivery-title">Доставка</div>
                        <ul class="delivery-info">
                            <?php foreach ($delivery_places as $place): ?>
                            <li><span><?= $place['title'] ?></span><span><?= $place['text'] ?></span></li>
                            <?php endforeach; ?>
                        </ul>
                        <div class="delivery-bottom">
                            Точный расчет доставки получите у менеджера по тел. <?= $phone ?>
                        </div>
                    </div>
                    <div class="product-yandex">
                        <img src="img/plus.svg" alt="">
                        1 199 баллов Плюса кэшбэк в
                        <img src="img/ya-pay.svg" alt="">
                    </div>
                    <div class="product-split">
                        <img src="img/cask.svg" alt="">
                        х4 платежа в
                        <img src="img/ya-split.svg" alt="">
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

                    <div class="tab-content active" id="description">
                        <?= $group['description'] ?>
                    </div>

                    <div class="tab-content" id="specs">
                        <h3>Характеристики</h3>
                        <ul class="features-list">
                            <li><span>Материал:</span><span><?= $group['material'] ?></span></li>
                            <li><span>Размеры:</span><span><?= $group['sizes'] ?></span></li>
                            <li><span>Энергопотребление:</span><span><?= $group['energy_consumption'] ?></span></li>
                            <li><span>Страна производства:</span><span><?= $group['made_in'] ?></span></li>
                            <li><span>Комплектация:</span><span><?= implode(', ', array_column($group['equipment'], 'name')) ?></span></li>
                        </ul>
                    </div>

                    <div class="tab-content" id="manual">
                        <?= $group['instructions'] ?>
                    </div>

                    <div class="tab-content" id="delivery">
                        <h3>Условия доставки</h3>
                        <p>Мы осуществляем доставку по всей России. Сроки и стоимость зависят от вашего местоположения и
                            выбранного способа доставки.</p>
                        <?php foreach ($delivery_points as $place): ?>
                            <p><strong><?= $place['title'] ?>:</strong> <?= $place['text'] ?></p>
                        <?php endforeach; ?>
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
                            <h3>Печь-камин Loki Forest bronze</h3>
                            <p>Печь-камин Loki Forest bronze 3 стекла поможет Вам создать уютную и теплую атмосферу в
                                своем доме. Она обладает мощностью в 14 кВт и способна быстро обогреть даже большое
                                помещение. Благодаря высокому КПД в 82%, печь-камин эффективно использует энергию
                                топлива, что позволяет экономить на отоплении. Изготовлена печь из прочного и
                                долговечного материала - чугуна. Он обладает высокой теплоемкостью и способен долго
                                сохранять тепло, что делает печь-камин еще более эффективной. Loki Forest имеет
                                остекление с трех сторон, что позволяет наслаждаться видом пламени из разных точек
                                комнаты. Дверка с узором добавляет печи элегантности и делает ее настоящим украшением
                                интерьера. Диаметр дымохода в 150 мм гарантирует хорошую тягу и обеспечивает
                                безопасность эксплуатации печи. Большая топка с размерами 660х400х470 миллиметров удобна
                                для загрузки дров и позволяет печи работать на одной закладке длительное время, вмещает
                                в себя до 3,5 кг дров. Два регулятора подачи воздуха позволяют настроить оптимальный
                                режим горения и обеспечивают чистоту стекла от копоти. Это не только улучшает внешний
                                вид печи, но и повышает эффективность горения, а также экономит топливо.
                            </p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <button class="accordion-header">Характеристики</button>
                        <div class="accordion-content">
                            <h3>Характеристики</h3>
                            <ul class="features-list">
                                <li><span>Материал:</span><span>Пластик, металл</span></li>
                                <li><span>Размеры:</span><span>25 × 15 × 10 см</span></li>
                                <li><span>Энергопотребление:</span><span>50 Вт</span></li>
                                <li><span>Страна производства:</span><span>Китай</span></li>
                                <li><span>Комплектация:</span><span>Основной блок, кабель питания, инструкция</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <button class="accordion-header">Инструкция</button>
                        <div class="accordion-content">
                            <h3>Инструкция по применению</h3>
                            <p>1. Внимательно прочтите инструкцию перед использованием.</p>
                            <p>2. Не подвергайте устройство воздействию воды.</p>
                            <p>3. Храните в сухом месте при комнатной температуре.</p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <button class="accordion-header">Доставка</button>
                        <div class="accordion-content">
                            <h3>Условия доставки</h3>
                            <p><strong>Курьерская доставка:</strong> 1-3 дня, от 300 ₽</p>
                            <p><strong>Почта России:</strong> 3-14 дней, от 200 ₽</p>
                            <p><strong>Самовывоз:</strong> из наших пунктов выдачи, бесплатно</p>
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
                        $link = get_permalink($product->ID);
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

                                <a href="<?= esc_url($link) ?>" style="cursor: pointer; color: #000;" class="product-description"><?= esc_html($description) ?></a>

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

                                    <button class="add-to-cart-btn" data-product-id="<?php echo $product->ID; ?>">В корзину</button>
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

<?php get_footer(); ?>
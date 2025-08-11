<?php
$site_name = get_field('site_name', 'option');
$white_logo = get_field('white_logo', 'option');
$copyright = get_field('copyright', 'option');
$privacy_policy = get_field('privacy_policy', 'option');

$contact_time = get_field('contact_time', 'option');
$phone = get_field('phone', 'option');
$mail = get_field('mail', 'option');
$whatsapp = get_field('whatsapp', 'option');
$telegram = get_field('telegram', 'option');
$youtube = get_field('youtube', 'option');
$vk = get_field('vk', 'option');
$facebook = get_field('facebook', 'option');

$delivery_text = get_field('delivery_text', 'option');
$delivery_points = get_field('delivery_points', 'option');
$delivery_places = get_field('delivery_places', 'option');
?>


<footer class="footer">
    <div class="container">
        <div class="footer__container">
            <div class="footer__brand-mobile-top">
                <img src="<?php echo $white_logo['url'] ?>" alt="Логотип">
                <div class="footer__slogan"><?= $site_name ?></div>
            </div>
            <div class="footer__columns">
                <!-- Первая колонка -->
                <div class="footer__column footer__column-hide-mobile">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="footer__brand">
                        <img src="<?php echo $white_logo['url'] ?>" alt="Логотип">
                        <div class="footer__slogan"><?= $site_name ?></div>
                    </a>

                    <form class="footer__subscribe">
                        <input type="email" placeholder="Подпишитесь на скидки" class="footer__input">
                        <button class="footer__submit" type="submit" class=""><img
                                    src="<?php echo get_template_directory_uri() ?>/assets/img/arrow2.svg"
                                    alt=""></button>
                    </form>
                    <div class="footer__privacy">
                        <div>Подписываясь на email-рассылку, вы соглашаетесь с <a
                                    href="<?php echo $privacy_policy['link']['url'] ?>"
                                    class="footer__privacy-link">политика конфиденциальности</a></div>


                    </div>

                    <div class="footer__social">
                        <p class="footer__social-title">Присоединяйтесь к нам:</p>
                        <div class="footer__social-icons">
                            <a href="<?= $youtube['address'] ?>" class="footer__social-link">
                                <img src="<?= $youtube['icon']['url'] ?>" alt="<?= $youtube['title'] ?>">
                            </a>
                            <a href="<?= $vk['address'] ?>" class="footer__social-link">
                                <img src="<?= $vk['icon']['url'] ?>" alt="<?= $vk['title'] ?>">
                            </a>
                            <a href="<?= $facebook['address'] ?>" class="footer__social-link">
                                <img src="<?= $facebook['icon']['url'] ?>" alt="<?= $facebook['address'] ?>">
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Вторая колонка -->
                <div class="footer__column">
                    <div class="footer__menu-title">Каталог продукции</div>
                    <ul class="footer__menu">
                        <?php
                        $catalogs = get_posts([
                            'post_type' => 'catalog',
                            'posts_per_page' => -1,
                            'post_status' => 'publish',
                            'order' => 'ASC',
                        ])
                        ?>
                        <?php  foreach ($catalogs as $catalog) :
                            $card = get_field('card', $catalog->ID);
                            $catalog_link = get_permalink($catalog->ID);
                            ?>
                            <li><a href="<?= esc_url($catalog_link) ?>" class="footer__link"><?= $card['title'] ?></a></li>
                        <?php endforeach; ?>
                    </ul>

                    <a href="/brands/" class="footer__menu-title">Бренды</a>
                    <a href="#" class="footer__menu-title">ПРОЕКТНЫЕ ПОСТАВКИ</a>
                    <a href="/локи-для-профессионалов/" class="footer__menu-title">Для профессионалов</a>
                </div>

                <!-- Третья колонка -->
                <div class="footer__column footer__column-three">
                    <div class="footer__column-wrap">
                        <div class="footer__menu-title">Покупателям</div>
                        <ul class="footer__menu">
                            <li><a href="#" class="footer__link">Личный кабинет</a></li>
                            <li><a href="#" class="footer__link">Избранное </a></li>
                            <li><a href="/корзина/" class="footer__link">Доставка и оплата</a></li>
                            <li><a href="#" class="footer__link">Блог: гид по выбору</a></li>
                            <li><a href="#" class="footer__link">О компании</a></li>
                            <li><a href="#" class="footer__link">Рассрочка и кредит</a></li>
                            <li><a href="#" class="footer__link">Обмен и возврат</a></li>

                        </ul>
                    </div>
                    <!-- <div class="footer__column-wrap footer__column-four">

                </div> -->

                </div>

                <!-- Четвертая колонка -->
                <div class="footer__column footer__column-contacts">
                    <div class="footer__menu-title ">Контакты</div>
                    <ul class="footer__contacts">
                        <div class="small_block">
                            <li class="footer__contact-item footer__contact-item-tel">
                                <a href="tel:<?= $phone ?>"><?= $phone ?></a>
                            </li>
                            <li class="footer__contact-item tel">
                                <div>ежедневно:</div>
                                <div> с <?= $contact_time['start_time'] ?> до <?= $contact_time['end_time'] ?> МСК</div>
                            </li>
                        </div>
                        <div class="small_block">
                            <li class="footer__contact-item">
                                <div>whatsapp</div>
                                <a href="tel:<?= $whatsapp['address'] ?>"><?= $whatsapp['address'] ?></a>
                            </li>
                            <li class="footer__contact-item">
                                <div>telegram</div>
                                <span><?= $telegram['address'] ?></span>
                            </li>
                            <li class="footer__contact-item">
                                <img src="<?php echo $mail['icon']['url'] ?>" alt="<?= $mail['icon']['alt'] ?>">
                                <a href="mailto:<?= $mail['address'] ?>"><?= $mail['address'] ?></a>
                            </li>
                        </div>


                    </ul>
                </div>
            </div>

            <!-- Подвал -->
            <div class="footer__bottom">
                <p class="footer__copyright"><?= $copyright ?></p>
                <a href="<?= $privacy_policy['link']['url'] ?>" class="footer__bottom-link"><?= $privacy_policy['title'] ?></a>
            </div>

            <a class="up_link" href="#">
                <img src="<?php echo get_template_directory_uri() ?>/assets/img/fotbrend.svg" alt="">
            </a>
        </div>
    </div>
</footer>


</div>

<!-- jquery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!-- Load Inputmask -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.9/jquery.inputmask.min.js"></script>

<script>
    var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";
</script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script defer src="<?php echo get_template_directory_uri() ?>/assets/js/filter.js"></script>
<script defer src="<?php echo get_template_directory_uri() ?>/assets/js/cart.js"></script>
<script defer src="<?php echo get_template_directory_uri() ?>/assets/js/app.js"></script>
<script defer src="<?php echo get_template_directory_uri() ?>/assets/js/other.js"></script>

<script>
    window.toggleNav = function () {
        const menu = document.getElementById('navbar');
        const burger = document.querySelector('.burger');

        // Toggle "active" on both burger and menu
        burger.classList.toggle('active');
        menu.classList.toggle('active');

        // Toggle scroll lock on body
        if (menu.classList.contains('active')) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };
</script>

<noscript><link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/assets/css/style.min.css?v=1748246790517"></noscript>


</body>

</html>
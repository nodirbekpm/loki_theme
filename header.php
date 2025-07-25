<!doctype html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Главная - home</title>
    <?php wp_head(); ?>
    <style>
        .svgsprite {
            display: none !important;
        }
    </style>

    <!-- <style>ul{list-style-type:none;padding:0}ul li a{color:#000}html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}h1{margin:.67em 0}a{background-color:transparent;text-decoration:none;-webkit-text-decoration-skip:objects}img{border-style:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}*{-webkit-box-sizing:border-box;box-sizing:border-box}body{font-family:Montserat,sans-serif;font-size:12px;line-height:20px;background-color:#fff;color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.banner-button{border:1px solid #fff;width:174px;height:48px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:12px}.banner-button a{color:#fff}@media screen and (max-width:767px){.banner-button a{font-family:GT Eesti Pro Display;font-weight:400;font-size:14px;line-height:100%;letter-spacing:0}}.hits-btn-go{width:227px;height:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:12px;border:2px solid #888;margin:20px auto;display:none}.hits-btn-go a{color:#000}@media screen and (max-width:767px){.hits-btn-go{display:-webkit-box;display:-ms-flexbox;display:flex;width:227px;height:40px}.hits-btn-go a{font-family:GT Eesti Pro Display;font-weight:400;font-size:14px;line-height:100%;letter-spacing:0}}h1{font-family:GT Eesti Pro Display;font-weight:700;font-size:48px;line-height:100%;letter-spacing:0;color:#fff}@media screen and (max-width:767px){h1{font-family:GT Eesti Pro Display;font-weight:400;font-size:26px;line-height:100%;letter-spacing:0}}:root{--swiper-theme-color:#007aff}.header{max-width:100%;margin-left:auto;margin-right:auto;width:100%}@media screen and (min-width:568px) and (orientation:landscape){.header{margin-left:auto;margin-right:auto;max-width:100%;width:100%}}@media screen and (min-width:768px){.header{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1024px){.header{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1280px){.header{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1440px){.header{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1920px){.header{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}.header .header-wrap{height:80px;display:grid;grid-auto-flow:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;-webkit-box-shadow:0 1px 0 0 #e4e7ea;box-shadow:0 1px 0 0 #e4e7ea}.header .header-wrap .header-cont{display:grid;grid-auto-flow:column;gap:2rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.header .header-wrap .header-cont .header-text{max-width:120px;font-family:GT Eesti Pro Display;font-weight:400;font-size:11.81px;line-height:15.6px;letter-spacing:.25px;border-left:2px solid #000;padding-left:20px}.header .header-wrap .header-menu ul{display:grid;grid-auto-flow:column;gap:2rem}.header .header-wrap .header-mini{display:grid;grid-auto-flow:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem}.header .header-wrap .header-phone{display:none}@media screen and (max-width:767px){.header .header-wrap .header-cont{gap:0}.header .header-wrap .header-cont .header-text{padding-left:10px}.header .header-wrap .header-menu{display:none}.header .header-wrap .header-phone{display:block}.header .header-wrap .header-like{display:none}}.banner{max-width:100%;margin-left:auto;margin-right:auto;width:100%}@media screen and (min-width:568px) and (orientation:landscape){.banner{margin-left:auto;margin-right:auto;max-width:100%;width:100%}}@media screen and (min-width:768px){.banner{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1024px){.banner{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1280px){.banner{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1440px){.banner{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1920px){.banner{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}.banner .banner-wrap{overflow:hidden;border-radius:12px;background-color:#030509;position:relative;display:grid}.banner .banner-wrap .banner-text{position:absolute;height:100%;padding:120px 60px;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.banner .banner-wrap .banner-text .banner-text-cont .banner-subtitle{color:#fff;font-family:GT Eesti Pro Display;font-weight:700;font-size:48px;line-height:100%;letter-spacing:0}.banner .banner-wrap .banner-img{height:100%;justify-self:end}.banner .banner-wrap .banner-img img{max-width:100%}@media screen and (max-width:767px){.banner .banner-wrap{overflow:hidden;padding:36px 0;border-radius:0;background-color:#030509;position:relative;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}.banner .banner-wrap .banner-text{position:static;height:auto;padding:0;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.banner .banner-wrap .banner-text .banner-text-cont .banner-subtitle{font-family:GT Eesti Pro Display;font-weight:300;font-size:18px;line-height:100%;letter-spacing:0;color:#fffB2;text-align:center}.banner .banner-wrap .banner-text .banner-button{margin-top:40px}.banner .banner-wrap .banner-img{height:100%;max-width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-self:center}.banner .banner-wrap .banner-img img{position:relative;right:20px;max-width:100%}}.catalog-new{max-width:100%;margin-left:auto;margin-right:auto;width:100%;padding-top:30px;padding-bottom:30px}@media screen and (min-width:568px) and (orientation:landscape){.catalog-new{margin-left:auto;margin-right:auto;max-width:100%;width:100%}}@media screen and (min-width:768px){.catalog-new{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1024px){.catalog-new{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1280px){.catalog-new{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1440px){.catalog-new{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1920px){.catalog-new{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1280px) and (max-width:1439px){.catalog-new{padding-top:30px;padding-bottom:30px}}@media screen and (min-width:768px) and (max-width:1279px){.catalog-new{padding-top:30px;padding-bottom:30px}}@media screen and (max-width:767px){.catalog-new{padding-top:20px;padding-bottom:20px}}.catalog-new .catalog-wrap .catalog__blocks{display:grid;grid-template-columns:repeat(3,calc(33% - 1rem));-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:1rem}.catalog-new .catalog-wrap .catalog__blocks .catalog__block{padding:30px;background:#f8f8f8;display:grid;grid-auto-flow:row;gap:1rem;position:relative;border-radius:12px}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-cont .catalog__block-count{background:#fff;padding:10px 20px;border-radius:31px;display:inline-block;text-align:start}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-cont .catalog__block-title{z-index:500;font-family:GT Eesti Pro Display;font-weight:400;font-size:32px;line-height:32px;letter-spacing:0;vertical-align:middle;max-width:50%;position:relative;top:40px}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-imgmini{display:none}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-img{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-img img{max-width:100%}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-href{position:absolute;bottom:20px;left:20px}@media screen and (max-width:767px){.catalog-new .catalog-wrap .catalog__blocks{-ms-flex-pack:distribute;justify-content:space-around;grid-template-columns:repeat(3,calc(33% - 1rem));gap:1rem;padding:0 20px}.catalog-new .catalog-wrap .catalog__blocks .catalog__block{background-color:#fff;border:1px solid #f8f8f8;gap:1rem;padding:10px}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-cont{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;justify-items:center;padding:0}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-cont .catalog__block-title{max-width:100%;position:relative;top:auto;font-family:GT Eesti Pro Display;font-weight:300;font-size:10px;line-height:100%;letter-spacing:0;text-align:center}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-cont .catalog__block-count{display:none}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-imgmini{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-href,.catalog-new .catalog-wrap .catalog__blocks .catalog__block .catalog__block-img{display:none}}.bandw .bandw-wrap{max-width:100%;margin-left:auto;margin-right:auto;width:100%}@media screen and (min-width:568px) and (orientation:landscape){.bandw .bandw-wrap{margin-left:auto;margin-right:auto;max-width:100%;width:100%}}@media screen and (min-width:768px){.bandw .bandw-wrap{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1024px){.bandw .bandw-wrap{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1280px){.bandw .bandw-wrap{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1440px){.bandw .bandw-wrap{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1920px){.bandw .bandw-wrap{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}.bandw .bandw-wrap .bandw__blocks{display:-webkit-box;display:-ms-flexbox;display:flex;gap:2rem}.bandw .bandw-wrap .bandw__block{width:calc(50% - 1rem);background-color:#f1f3f4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;border-radius:12px}.bandw .bandw-wrap .bandw__block:last-child{background-color:#000;color:#fff}.bandw .bandw-wrap .bandw__block-cont{max-width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2rem;padding:20px}.bandw .bandw-wrap .bandw__block-title{font-family:GT Eesti Pro Display;font-weight:400;font-size:39.84px;line-height:52px;letter-spacing:0;text-align:center;vertical-align:middle}.bandw .bandw-wrap .bandw__block-discount{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:.5rem}.bandw .bandw-wrap .bandw__block-discount-t{font-family:Tondo Corp;font-weight:400;font-size:13px;line-height:19.5px;letter-spacing:0;text-align:center;vertical-align:middle;text-decoration:line-through;color:#9ea3af}.bandw .bandw-wrap .bandw__block-procent{background-color:#d61e3d;padding:10px 20px;border-radius:9px;color:#fff;font-family:Tondo Corp;font-weight:400;font-size:11px;line-height:11px;letter-spacing:0;text-align:center;vertical-align:middle}.bandw .bandw-wrap .bandw__block-price{font-family:GT Eesti Pro Display;font-weight:400;font-size:28px;line-height:36.4px;letter-spacing:0;text-align:center;vertical-align:middle}.bandw .bandw-wrap .bandw__block-img img{max-width:100%}@media screen and (max-width:767px){.bandw .bandw-wrap .bandw__block-title{font-family:GT Eesti Pro Display;font-weight:400;font-size:26px;line-height:52px;letter-spacing:0;text-align:center;vertical-align:middle}.bandw .bandw-wrap .bandw__blocks{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2rem}.bandw .bandw-wrap .bandw__block{width:100%}.bandw .bandw-wrap .bandw__block-cont{max-width:70%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:1rem;padding:15px}}.brands .brands-wrap{padding-top:30px;padding-bottom:30px;max-width:100%;width:100%;margin:0 auto}@media screen and (min-width:1280px) and (max-width:1439px){.brands .brands-wrap{padding-top:30px;padding-bottom:30px}}@media screen and (min-width:768px) and (max-width:1279px){.brands .brands-wrap{padding-top:30px;padding-bottom:30px}}@media screen and (max-width:767px){.brands .brands-wrap{padding-top:20px;padding-bottom:20px}}@media screen and (min-width:568px) and (orientation:landscape){.brands .brands-wrap{margin-left:auto;margin-right:auto;max-width:100%;width:100%}}@media screen and (min-width:768px){.brands .brands-wrap{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1024px){.brands .brands-wrap{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1280px){.brands .brands-wrap{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1440px){.brands .brands-wrap{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1920px){.brands .brands-wrap{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}.brands .brands__blocks{display:-webkit-box;display:-ms-flexbox;display:flex;gap:1rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.brands .brands__block{border-radius:12px;width:calc((100% / 7) - calc(5rem / 7));padding:30px;background-color:#f7f7f7;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.brands .brands__block img{max-width:100%}@media screen and (max-width:767px){.brands .brands-wrap .brands__blocks{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.brands .brands-wrap .brands__block{border-radius:12px;width:calc(50% - 1rem)}}.about .about-wrap{max-width:100%;margin-left:auto;margin-right:auto;width:100%}@media screen and (min-width:568px) and (orientation:landscape){.about .about-wrap{margin-left:auto;margin-right:auto;max-width:100%;width:100%}}@media screen and (min-width:768px){.about .about-wrap{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1024px){.about .about-wrap{margin-left:auto;margin-right:auto;max-width:98%;width:98%}}@media screen and (min-width:1280px){.about .about-wrap{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1440px){.about .about-wrap{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}@media screen and (min-width:1920px){.about .about-wrap{margin-left:auto;margin-right:auto;max-width:1440px;width:1440px}}.about .about__blocks{display:-webkit-box;display:-ms-flexbox;display:flex;gap:1rem;border-radius:12px;overflow:hidden}.about .about-left{-webkit-box-flex:1;-ms-flex:1 1 50%;flex:1 1 50%;padding:30px;display:grid;grid-auto-flow:row;-ms-flex-line-pack:center;align-content:center;gap:2rem}.about .about-left-title{font-family:GT Eesti Pro Display;font-weight:400;font-size:40px;line-height:52px;letter-spacing:0;vertical-align:middle}.about .about-right{-webkit-box-flex:1;-ms-flex:1 1 50%;flex:1 1 50%}.about .about-right img{max-width:100%}.about .about-left__blocks{display:grid;grid-template-columns:repeat(2,50%);gap:1rem}.about .about-left-text{font-family:GT Eesti Pro Display;font-weight:300;font-size:21.83px;line-height:33px;letter-spacing:0;vertical-align:middle}.about .about-left__block-title{font-family:GT Eesti Pro Display;font-weight:400;font-size:48px;line-height:48px;letter-spacing:.5px;vertical-align:middle}@media screen and (max-width:767px){.about .about__blocks{display:grid;grid-template-rows:repeat(2,50%)}.about .about-left{gap:1rem;padding:15px}.about .about-left-title{font-family:GT Eesti Pro Display;font-weight:400;font-size:26px;line-height:52px;letter-spacing:0;vertical-align:middle}.about .about-left-text{font-family:GT Eesti Pro Display;font-weight:300;font-size:12px;letter-spacing:0;vertical-align:middle;line-height:20px}.about .about-left__block-title{font-family:GT Eesti Pro Display;font-weight:400;font-size:26px;line-height:30px;letter-spacing:.5px;vertical-align:middle}.about .about-left__block{gap:0}}.request-form .form-title-block{display:none}.request-form .form-title{font-family:GT Eesti Pro Display;font-weight:400;font-size:42px;line-height:52px;letter-spacing:0}.request-form .form-subtitle{font-family:GT Eesti Pro Display;font-weight:300;font-size:16px;line-height:28px;letter-spacing:0}@media screen and (max-width:767px){.request-form .form-title-block{display:block;padding:15px 20px}}.footer__brand-mobile-top{display:none;margin-bottom:40px}.footer__slogan{color:rgba(255,255,255,.7);font-size:10px;line-height:1.4;max-width:100px}@media (max-width:768px){.footer__brand-mobile-top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem}}.page{position:relative;font-family:Gilroy,Arial,sans-serif}.page__content{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}</style> -->
</head>

<body <?php body_class('page'); ?>














<div class="page__content">











    <?php
    $site_name = get_field('site_name', 'option');
    $black_logo = get_field('black_logo', 'option');
    $phone = get_field('phone', 'option');
    ?>

    <div class="header">
        <div class="container">
            <div class="header-wrap">
                <div class="header-cont">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="header-logo">
                        <img src="<?php echo $black_logo['url'] ?>" alt="">
                    </a>
                    <div class="header-text">
                        <?= $site_name ?>
                    </div>
                </div>

                <div class="header-menu " id="navbar">
                    <ul>
                        <?php
                        wp_nav_menu([
                            'theme_location' => 'header_menu',
                            'container' => false,
                            'menu_class' => '',
                            'items_wrap' => '<ul>%3$s</ul>',
                        ]);
                        ?>
                        <li><a href="tel:<?= $phone ?>"><?= $phone ?></a></li>
                        <li class="mobile_links counter basket_counter">
                            <img src="<?php echo get_template_directory_uri() ?>/assets/img/cart.svg" alt="">
                            <a href="/корзина/">КОРЗИНА</a>
                            <span></span>
                        </li>

                        <li class="mobile_links">
                            <img src="<?php echo get_template_directory_uri() ?>/assets/img/like.svg" alt="">
                            <a href="#">ИЗБРАННОЕ</a>
                        </li>
                    </ul>
                </div>
                <div class="header-mini">
                    <a href="#">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/search.svg" alt="" class="header-search">
                    </a>

                    <a href="tel:74951253027" class="header-phone">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/phone 1.svg" alt="">
                    </a>

                    <a href="#" class="laptop_icon">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/like.svg" alt="" class="header-like">
                    </a>

                    <a href="/корзина/" class="laptop_icon counter basket_counter">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/cart.svg" alt="" class="header-gamb">
                        <span></span>
                    </a>


                    <div class="burger" onclick="toggleNav()">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>

                </div>


            </div>
        </div>
    </div>

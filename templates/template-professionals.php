<?php
/*
 * Template Name: ЛОКИ Для профессионалов
 */
get_header();


$banner_title = get_field('banner_title');
$banner_description = get_field('banner_description');
$banner_image = get_field('banner_image');
$banner_link = get_field('banner_link');
$banner_hidden = get_field('banner_hidden');

$benefit_title = get_field('benefit_title');
$benefits = get_field('benefits');
$benefits_hidden = get_field('benefits_hidden');

$brands_title = get_field('brands_title');
$brands_hidden = get_field('brands_hidden');

$form_title = get_field('form_title');
$form_description = get_field('form_description');
$form_image = get_field('form_image');
$form_hidden = get_field('form_hidden');

$phone = get_field('phone', 'option');

?>

<?php if ($banner_hidden !== "Да"): ?>
    <div class="banner-simple">
        <div class="container">
            <div class="banner-simple-wrap">
                <div class="banner-simple-text-wrap">
                    <div class="banner-simple-text">
                        <div class="banner-simple-text__title"><?= $banner_title ?></div>
                        <div class="banner-simple-text__subtitle">
                            <?= $banner_description ?>
                        </div>
                        <div class="banner-simple-btn">
                            <a href="<?php echo $banner_link['url'] ?>"> <?= $banner_link['title'] ?></a>
                        </div>
                    </div>
                </div>

                <img src="<?php echo $banner_image['url'] ?>" alt="">
            </div>
        </div>
    </div>
<?php endif; ?>

<?php if ($benefits_hidden !== "Да"): ?>
    <div class="advantage">
        <div class="container">
            <div class="advantage-wrap">
                <div class="advantage-title title-camins"><?= $benefit_title ?></div>
                <div class="advantage__blocks">
                    <?php foreach ($benefits as $benefit) { ?>
                        <div class="advantage__block">
                            <div class="advantage__block-img">
                                <img src="<?php echo $benefit['image']['url'] ?>" alt="<?= $benefit['image']['alt'] ?>">
                            </div>
                            <div class="advantage__block-title">
                                <?= $benefit['title'] ?>
                            </div>
                            <div class="advantage__block-text">
                                <?= $benefit['description'] ?>
                            </div>
                        </div>
                    <?php } ?>


                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<?php if ($brands_hidden !== "Да"): ?>
    <div class="brands best-brends">
        <div class="container">
            <div class="brands-wrap">
                <div class="best-brends-title title-camins">Работаем с лучшими брендами</div>

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


<?php if ($form_hidden !== "Да"): ?>
<div class="receive-form">
    <div class="container">
        <div class="receive-form-wrap">
            <div class="receive-form__blocks">
                <div class="receive-form__block">
                    <div class="receive-form-title">
                        <?= $form_title ?>
                    </div>
                    <div class="receive-form-subtitle">
                        <?= $form_description ?>
                    </div>
                    <?php echo do_shortcode('[contact-form-7 id="c1b3ee2" title="Получите партнерские условия работы"]'); ?>
                    <div class="receive-form__question">
                        Остались вопросы? Звоните!
                    </div>
                    <div class="receive-form__callback">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/phoneform.svg" alt=""><a href="<?= $phone ?>"><?= $phone ?></a>
                    </div>
                </div>
                <div class="receive-form__block">
                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/formimg2.svg" alt="">

                </div>
            </div>


        </div>
    </div>
</div>
<?php endif; ?>


<?php get_footer(); ?>

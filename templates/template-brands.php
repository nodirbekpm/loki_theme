<?php
/*
 * Template name: Бренды
 * */
get_header();

$banner_title = get_field('banner_title');
$banner_text = get_field('banner_text');
$banner_image = get_field('banner_image');
$banner_hidden = get_field('banner_hidden');
$brands_hidden = get_field('brands_hidden');

$brands = get_posts([
    'post_type' => 'brand',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'orderby' => 'title',
    'order' => 'ASC',
]);
?>

<?php if ($banner_hidden !== "Да"): ?>
    <div class="banner-minimal">
        <div class="container">
            <div class="banner-minimal-wrap">
                <div class="banner-minimal-text-wrap">
                    <div class="banner-minimal-text">
                        <div class="banner-minimal-text__title"><?= $banner_title ?></div>
                        <div class="banner-minimal-text__subtitle">
                            <?= $banner_text ?>
                        </div>

                    </div>
                </div>


                <img src="<?php echo $banner_image['url'] ?>" alt="$banner_image['alt']">
            </div>
        </div>

    </div>
<?php endif; ?>


<?php if ($brands_hidden !== "Да"): ?>
    <div class="palazzetti">
        <div class="container">
            <div class="palazzetti-wrap">
                <div class="palazzetti__blocks">
                    <?php
                    foreach ($brands as $brand) {
                        $fields = get_field('brand', $brand->ID);
                        $left_img = $fields['card_left_image'] ?? null;
                        $right_img = $fields['card_right_img'] ?? null;
                        $short_description = $fields['short_description'] ?? null;
                        $description = $fields['description'] ?? null;
                        $link = get_permalink($brand->ID);
                        ?>
                        <div class="brands__block">
                            <?php if (!empty($logo['url'])): ?>
                                <img src="<?= esc_url($logo['url']) ?>" alt="<?= esc_attr(get_the_title($brand)) ?>">
                            <?php endif; ?>
                        </div>
                        <div class="palazzetti__block">
                            <div class="palazzetti-img">
                                <?php if (!empty($left_img['url'])): ?>
                                    <img src="<?= esc_url($left_img['url']) ?>"
                                         alt="<?= esc_attr(get_the_title($brand)) ?>">
                                <?php endif; ?>
                                <?php if (!empty($right_img['url'])): ?>
                                    <img src="<?= esc_url($right_img['url']) ?>"
                                         alt="<?= esc_attr(get_the_title($brand)) ?>">
                                <?php endif; ?>

                            </div>
                            <div class="palazzetti-text">
                                <div class="palazzetti-text-wrap">
                                    <a href="<?= esc_url($link) ?>" class="palazzetti-text-title"><?= esc_attr(get_the_title($brand)) ?></a>
                                    <div class="palazzetti-text-subtitle"><?= $short_description ?></div>
                                </div>
                                <div class="palazzetti-text-all">
                                    <?= $description ?>
                                </div>
                                <div class="palazzetti-text-href">
                                    <a href="<?= esc_url($link) ?>">Узнайте больше о бренде</a>
                                </div>
                            </div>

                        </div>
                        <?php
                    }
                    ?>


                </div>
            </div>
        </div>
    </div>
<?php endif; ?>


<?php get_footer(); ?>

<?php
/*
 * Archive Template for Brand Custom Post Type
 */
get_header();

// Sahifa uchun ACF field’larni olish (agar sahifaga bog‘langan bo‘lsa)
$banner_title = get_field('banner_title', get_queried_object_id());
$banner_text = get_field('banner_text', get_queried_object_id());
$banner_image = get_field('banner_image', get_queried_object_id());
$banner_hidden = get_field('banner_hidden', get_queried_object_id());
$brands_hidden = get_field('brands_hidden', get_queried_object_id());
?>

<?php if ($banner_hidden !== "Да"): ?>
    <div class="banner-minimal">
        <div class="container">
            <div class="banner-minimal-wrap">
                <div class="banner-minimal-text-wrap">
                    <div class="banner-minimal-text">
                        <div class="banner-minimal-text__title"><?= esc_html($banner_title) ?></div>
                        <div class="banner-minimal-text__subtitle"><?= esc_html($banner_text) ?></div>
                    </div>
                </div>
                <?php if (!empty($banner_image['url'])): ?>
                    <img src="<?= esc_url($banner_image['url']) ?>" alt="<?= esc_attr($banner_image['alt'] ?? 'Banner Image') ?>">
                <?php endif; ?>
            </div>
        </div>
    </div>
<?php endif; ?>

<?php if ($brands_hidden !== "Да"): ?>
    <div class="palazzetti">
        <div class="container">
            <div class="palazzetti-wrap">
                <div class="palazzetti__blocks">
                    <?php if (have_posts()): ?>
                        <?php while (have_posts()): the_post(); ?>
                            <?php
                            // Group field’dan sub-field’larni olish
                            $brand_fields = get_field('brand', get_the_ID());
                            $left_img = !empty($brand_fields['card_left_image']) ? $brand_fields['card_left_image'] : null;
                            $right_img = !empty($brand_fields['card_right_img']) ? $brand_fields['card_right_img'] : null;
                            $short_description = !empty($brand_fields['short_description']) ? $brand_fields['short_description'] : null;
                            $description = !empty($brand_fields['description']) ? $brand_fields['description'] : null;
                            $logo = !empty($brand_fields['logo']) ? $brand_fields['logo'] : null;
                            $link = get_permalink();
                            ?>
                            <div class="brands__block">
                                <?php if (!empty($logo['url'])): ?>
                                    <img src="<?= esc_url($logo['url']) ?>" alt="<?= esc_attr(get_the_title()) ?>">
                                <?php endif; ?>
                            </div>
                            <div class="palazzetti__block">
                                <div class="palazzetti-img">
                                    <?php if (!empty($left_img['url'])): ?>
                                        <img src="<?= esc_url($left_img['url']) ?>" alt="<?= esc_attr(get_the_title()) ?>">
                                    <?php endif; ?>
                                    <?php if (!empty($right_img['url'])): ?>
                                        <img src="<?= esc_url($right_img['url']) ?>" alt="<?= esc_attr(get_the_title()) ?>">
                                    <?php endif; ?>
                                </div>
                                <div class="palazzetti-text">
                                    <div class="palazzetti-text-wrap">
                                        <a href="<?= esc_url($link) ?>" class="palazzetti-text-title"><?= esc_html(get_the_title()) ?></a>
                                        <div class="palazzetti-text-subtitle"><?= esc_html($short_description) ?></div>
                                    </div>
                                    <div class="palazzetti-text-all">
                                        <?= wp_kses_post($description) ?>
                                    </div>
                                    <div class="palazzetti-text-href">
                                        <a href="<?= esc_url($link) ?>">Узнайте больше о бренде</a>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                    <?php else: ?>
                        <p>Brendlar topilmadi</p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<?php get_footer(); ?>
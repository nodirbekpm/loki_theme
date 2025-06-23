<?php get_header(); ?>

<main class="catalog-archive">
    <div class="container">
        <h1>Все Каталоги</h1>

        <div class="catalog-list">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <div class="catalog-item">
                        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

                        <?php if (has_post_thumbnail()) : ?>
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail('medium'); ?>
                            </a>
                        <?php endif; ?>

                        <p><?php the_excerpt(); ?></p>
                    </div>
                <?php endwhile; ?>
            <?php else : ?>
                <p>Каталоги не найдены.</p>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>

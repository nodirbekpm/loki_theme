<?php get_header(); ?>
    <main class="product-page">
        <div class="container">
            <?php while (have_posts()) : the_post(); ?>
                <div class="product-details">
                    <div class="product-image">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                    <div class="product-info">
                        <h1><?php the_title(); ?></h1>
                        <p><?php the_content(); ?></p>
                        <p><strong>Brend:</strong> <?php echo get_the_term_list(get_the_ID(), 'brand', '', ', '); ?></p>
                        <button class="add-to-cart">Savatga qo‘shish</button>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
    </main>
<?php get_footer(); ?>
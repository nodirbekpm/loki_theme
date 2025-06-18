<?php
/*
 * Template Name: Katalog
 */
get_header(); ?>
    <main class="catalog-page">
        <div class="container">
            <h1><?php the_title(); ?></h1>
            <div class="filters">
                <!-- Filterlar bu yerda -->
                <form id="product-filters">
                    <select name="brand">
                        <option value="">Barcha brendlar</option>
                        <?php
                        $brands = get_terms(array('taxonomy' => 'brand', 'hide_empty' => false));
                        foreach ($brands as $brand) {
                            echo '<option value="' . esc_attr($brand->slug) . '">' . esc_html($brand->name) . '</option>';
                        }
                        ?>
                    </select>
                    <button type="submit">Filtrlash</button>
                </form>
            </div>
            <div class="products-grid">
                <?php
                $args = array(
                    'post_type' => 'product',
                    'posts_per_page' => 12,
                );
                $products = new WP_Query($args);
                if ($products->have_posts()) :
                    while ($products->have_posts()) : $products->the_post(); ?>
                        <div class="product-card">
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail('medium'); ?>
                                <h3><?php the_title(); ?></h3>
                                <p><?php the_excerpt(); ?></p>
                            </a>
                        </div>
                    <?php endwhile;
                    wp_reset_postdata();
                else :
                    echo '<p>Mahsulotlar topilmadi.</p>';
                endif;
                ?>
            </div>
        </div>
    </main>
<?php get_footer(); ?>
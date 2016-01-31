<?php if(have_rows('imagens_tab_galeria_hotel')): ?>
<div class="a-slick-gallery swiper-container a-clearfix">
    <div class="swiper-wrapper">
    <?php while ( have_rows('imagens_tab_galeria_hotel') ) : the_row(); ?>
        <?php if (get_sub_field('imagem_tab_galeria_hotel')): ?>
            <div class="a-slick-gallery__item swiper-slide">
                <img src="<?php echo get_sub_field('imagem_tab_galeria_hotel') ?>" alt="" class="a-img-responsive-max">
            </div>
       <?php endif ?>
    <?php endwhile; ?>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>
 <?php endif; ?>


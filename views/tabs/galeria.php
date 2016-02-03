<?php if(have_rows($cf)): ?>
<div class="a-slick-gallery swiper-container a-clearfix">
    <div class="swiper-wrapper">
    <?php while ( have_rows($cf) ) : the_row(); ?>
        <?php if (get_sub_field($cf_sub)): ?>
            <div class="a-slick-gallery__item swiper-slide">
                <img src="<?php echo get_sub_field($cf_sub) ?>" alt="" class="a-img-responsive-max">
            </div>
       <?php endif ?>
    <?php endwhile; ?>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>
 <?php endif; ?>


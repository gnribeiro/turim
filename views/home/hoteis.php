<section class="a-ligth p-t-80 p-b-70">
    <div class="a-container">
        <?php if(get_field('title_hotels_home')): ?>
            <h1 class="a-text-center"><?php the_field('title_hotels_home'); ?></h1>
        <?php endif ?>
        <?php if(get_field('content_hotels_home')): ?>
            <div class="a-text-center a-content p-b-25"><?php the_field('content_hotels_home'); ?></div>
            <div class="a-text-center"><i class="fa fa-instagram a-instragram"></i></div>
        <?php endif ?>

        <?php  if( have_rows('hotels_social_media_home') ):?>
        <div class="a-row a-clearfix p-t-30 a-phone-hoteis-home">
            <?php   while ( have_rows('hotels_social_media_home') ) : the_row(); ?>
            <div class="a-col-3">
                <div>
                    <a href="<?php echo get_sub_field('hotels_social_media_home_link');?>">
                        <img src="<?php echo get_sub_field('image_hotels_social_media_home');?>" alt="" class="a-img-responsive" border="0"/>
                    </a>
                </div>
                <div class="a-hotel-legend">
                    <a href="<?php echo get_sub_field('hotels_social_media_home_link');?>">
                        <i class="fa fa-instagram a-instragram"></i> <?php echo get_sub_field('title_hotels_social_media_home');?>
                    </a>
                </div>
            </div>
           <?php  endwhile;?>
        </div>
        <?php endif;?>
    </div>
</section>
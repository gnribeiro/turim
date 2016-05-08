<?php if( have_rows('slides-homepage') ): ?>
<section class="a-banner a-sliedshow a-relative a-banner--video a-clearfix" role="banner" id="slideshow">
    <?php $counter = 0; while ( have_rows('slides-homepage') ) : the_row(); ?>

    <?php if (get_sub_field('video_slides-homepage')):  $video = get_sub_field('video_slides-homepage'); ?>
        <div class="slide slide-<?php echo $counter?>" data-slide-video="video">
            <div>
                <video class="a-video" muted autoplay class="a-video" id="playerpage-<?php echo $counter?>" >
                    <source src="<?php echo $video['url']  ?>"  />
                    <object width="100%" style="width:100%; height:auto;" type="application/x-shockwave-flash" data=" <?php echo THEMEURL ?>assets/swf/flashmediaelement.swf">
                        <param name="movie" value=" <?php echo THEMEURL ?>assets/swf/flashmediaelement.swf" />
                        <param name="flashvars" value="controls=true&file=<?php echo $video['url']  ?>" />
                        <img src="" width="100%" title="No video playback capabilities" />
                    </object>
                </video>
            </div>

            <div class="a-video__content">
                <div class="a-container">
                    <?php if (get_sub_field('titulo_slides-homepage')): ?>
                         <h2  class="a-banner__title"><?php  echo get_sub_field('titulo_slides-homepage')?></h2>
                    <?php endif ?>

                    <?php if (get_sub_field('resume_slides-homepage')): ?>
                        <div class="a-banner__resume"><?php  echo get_sub_field('resume_slides-homepage')?></div>
                    <?php endif ?>

                    <?php if (get_sub_field('link_slides-homepage')): ?>
                        <div class="a-text-center">
                            <a href="<?php  echo get_sub_field('link_slides-homepage')?>" class="a-btn a-btn--transparent"><?php _e('Saber Mais' , 'turim')?><i class="fa fa-chevron-right"></i></a>
                        </div>
                    <?php endif ?>
                </div>
            </div>
        </div>
    <?php elseif (get_sub_field('image_slides-homepage')): $img=get_sub_field('image_slides-homepage');?>
        <div class="slide slide-<?php echo $counter?>" data-slide-video="false" style="background-size: cover; background-image: url(<?php echo $img['url']?>);">
            <div class="a-video__content">
                <div class="a-container">
                    <?php if (get_sub_field('titulo_slides-homepage')): ?>
                         <h2  class="a-banner__title"><?php  echo get_sub_field('titulo_slides-homepage')?></h2>
                    <?php endif ?>

                    <?php if (get_sub_field('resume_slides-homepage')): ?>
                        <div class="a-banner__resume"><?php  echo get_sub_field('resume_slides-homepage')?></div>
                    <?php endif ?>

                    <?php if (get_sub_field('link_slides-homepage')): ?>
                        <div class="a-text-center">
                            <a href="<?php  echo get_sub_field('link_slides-homepage')?>" class="a-btn a-btn--transparent"><?php _e('Saber Mais' , 'turim')?><i class="fa fa-chevron-right"></i></a>
                        </div>
                    <?php endif ?>
                </div>
            </div>
        </div>
    <?php endif ?>
    <?php $counter++  ?>
    <?php  endwhile; ?>
</section>
<?php endif; ?>
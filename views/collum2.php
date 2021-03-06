<?php global $post,  $site?>
<section class="a-lignt p-t-70 p-b-75">
  <div class="a-container">
   <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h1 class="a-text-center m-b-15"><?php the_title() ?></h1>
        <div class="a-bo a-text-center a-block-center-900 p-b-50"><?php the_content() ?></div>

        <?php if(get_field('image-collum-2') && get_field('content-collum-2')): ?>
        <div class="a-clearfix">
            <div class="a-col-6 a-text-right">
                <img src="<?php echo get_field('image-collum-2')?>" class="a-img-responsive"/>
            </div>
            <div class="a-col-6">
                <div class="a-bo a-bo--collum-2">
                    <?php echo get_field('content-collum-2') ?>
                </div>
                <div>
                  <a class="a-btn a-btn--dark m-t-15" data-a-widget="Amodal" data-a-widget-options="<?php echo $modal ?>"><?php _e('Pedir Adesão' , 'turim')?> <i class="fa fa-chevron-right" ></i></a>
                </div>
            </div>
        </div>
        <?php endif; ?>
      <?php endwhile; endif; ?>
  </div>
</section>

<?php echo $site->get_partial('modals/adesao_ask' , array('ajax'=>$ajax)) ?>

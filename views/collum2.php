<?php global $post ?>
<section class="a-lignt">
  <div class="a-container">
   <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <div class="a-col-9">
            <h1><?php the_title() ?></h1>
            <div class="a-bo"><?php the_content() ?></div>

            <?php if(has_post_thumbnail(get_the_ID())): ?>
              <div class="m-t-20">
                <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) );
     ?>" alt="" class="a-img-responsive"/>
              </div>
          <?php endif ?>
        </div>

        <?php if(get_field('image-collum-2') && get_field('content-collum-2')) ?>
        <div class="a-clearfix">
          <div class="a-col-6">
            <img src="<?php echo get_field('image-collum-2')?>" class="a-img-responsive"/>
          </div>
          <div class="a-col-6">
            <div class="a-bo">
                <?php echo get_field('content-collum-2') ?>
            </div>
          </div>
        </div>
        <?php endif ?>
      <?php endwhile; endif ?>
  </div>
</section>

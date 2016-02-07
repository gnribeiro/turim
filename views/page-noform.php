<?php global $post ?>

<section class="a-light p-t-70 p-b-75">
  <article class="a-container">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h1 class="a-text-center a-block-center-900"><?php the_title() ?></h1>

        <?php if(get_field('resume_page')): ?>
            <div class="a-bo a-bo--center m-b-25 a-text-center"><?php echo get_field('resume_page') ?></div>
        <?php endif ?>

        <?php if(has_post_thumbnail(get_the_ID())): ?>
            <div class="m-t-20 a-block-center-900 m-b-60 a-text-center">
                <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) );
         ?>" alt="" class="a-img-responsive"/>
            </div>
        <?php endif ?>
        <div class="a-bo a-bo--center "><?php the_content() ?></div>
    <?php endwhile; endif ?>
  </article>
</section>
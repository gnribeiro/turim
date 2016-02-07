<?php global $post;?>
<section class="a-light p-t-70 p-b-75">
  <article class="a-container">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php if(get_field('resume_page')): ?>
            <div class="a-bo a-bo--center m-b-20 a-text-center a-bo-resume-events">
                <?php echo get_field('resume_page') ?>
            </div>
        <?php endif ?>
        <h1 class="a-text-center a-block-center-900"><?php the_title() ?></h1>
        <div class="a-text-center m-b-55"><?php the_content() ?></div>

        <?php  if( have_rows('evento') ):?>
            <?php   while ( have_rows('evento') ) : the_row(); ?>
            <div class="a-clearfix a-bo-events" id="<?php echo  get_sub_field('id_event');?>">
                <div class="a-col-6">
                    <img src="<?php echo get_sub_field('image_event');?>" alt="" class="a-img-responsive">
                </div>
                <div class="a-col-6 p-l-10">
                    <?php if(get_sub_field('icon_event')): ?>
                        <div class="a-bo-events__icon">
                            <img src="<?php echo get_sub_field('icon_event');?>" alt="" />
                        </div>
                    <?php endif; ?>
                    <?php if(get_sub_field('title_event')): ?>
                        <h2 class="a-bo-events__title">
                            <?php echo get_sub_field('title_event');?>
                        </h2>
                    <?php endif; ?>

                    <?php if(get_sub_field('content_event')): ?>
                        <div class="a-bo-events__content">
                            <?php echo get_sub_field('content_event');?>
                        </div>
                    <?php endif; ?>


                    <?php if(get_sub_field('all_hoteis_events')): ?>
                        <div class="clearfix m-b-40">
                            <div class="a-col-4">
                                <h5 class="a-bo-events__title a-bo-events__title--small">
                                    <?php _e('HOTÉIS DISPONIVEIS' , 'turim')?>
                                </h5>
                            </div>
                            <div class="a-col-8 a-bo-events__list">
                                Todos os hotéis do Grupo
                            </div>
                        </div>
                    <?php elseif($posts = get_sub_field('hoteis_events')): ?>
                        <div class="clearfix m-b-40">
                            <div class="a-col-4">
                                <h5 class="a-bo-events__title a-bo-events__title--small">
                                    <?php _e('HOTÉIS DISPONIVEIS ' , 'turim')?>
                                </h5>
                            </div>
                            <div class="a-col-8 a-bo-events__list">
                                <ul>
                                <?php foreach( $posts as $post): setup_postdata($post); ?>
                                    <li><?php the_title(); ?></li>
                                    <?php endforeach;  wp_reset_postdata()?>
                                </ul>
                            </div>
                        </div>
                    <?php endif; ?>

                    <?php if(get_sub_field('position_events')): ?>
                        <div class="clearfix">
                            <div class="a-col-4">
                                <h5 class="a-bo-events__title a-bo-events__title--small">
                                    <?php _e('DISPOSIÇÃO' , 'turim')?>
                                </h5>
                            </div>
                            <div class="a-col-8  a-bo-events__list">
                                <?php echo get_sub_field('position_events') ?>
                            </div>
                        </div>
                     <?php endif; ?>
                </div>
            </div>
        <?php  endwhile; ; endif?>
    <?php endwhile; endif ?>
  </article>
</section>
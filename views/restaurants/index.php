<?php global $post, $site; ?>

<section class="a-dark-ligth-large p-t-80 p-b-10 ">
    <div class="a-container a-relative">



        <a class="a-btn a-btn--light a-btn--reserva" data-a-widget="Amodal" data-a-widget-options="<?php echo $modal ?>">
            <?php _e('Reservar Mesa' , 'turim') ?>
        </a>


        <?php  if ( have_posts() ): while ( have_posts() ) : the_post() ?>
            <div class="a-bo-content a-bo-content--medium a-ligth-txt">
                <?php the_content(); ?>
            </div>
        <?php endwhile;  endif; ?>
        <?php echo $site->get_partial('tabs/index', array('tabs'=> $tabs, 'tabs_json'=> $tabs_json)) ?>
    </div>
</section>
<section class="p-t-20 p-b-50">
    <div class="a-container a-relative">
     <?php if (get_field('facebook_rest')): ?>
            <a href="<?php echo get_field('facebook_rest') ?>" class="a-btn a-btn--dark" traget="_blank">
                <?php _e('Siga-nos no Facebook' , 'turim') ?>&nbsp;&nbsp;<i class="fa fa-facebook"></i>
            </a>
        <?php endif; ?>
    </div>
</section>
<?php echo $highlights ?>
<?php echo $site->get_partial('modals/reserva' , array('ajax'=>$ajax)) ?>

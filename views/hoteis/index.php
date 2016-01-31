<?php global $post, $site; ?>

<section class="a-dark-ligth-large p-t-80 p-b-10">
    <div class="a-container ">
        <?php  if ( have_posts() ): while ( have_posts() ) : the_post() ?>
            <h1 class="a-ligth-txt"> <?php _e('SOBRE O HOTEL' , 'turim')?></h1>
            <div class="a-bo-content a-bo-content--medium a-ligth-txt">
                <?php the_content(); ?>
            </div>
        <?php endwhile;  endif; ?>
        <?php echo $site->get_partial('tabs/index', array('tabs'=> $tabs, 'tabs_json'=> $tabs_json)) ?>
    </div>
</section>

<?php echo $site->get_partial('hoteis/services') ?>
<?php echo $highlights ?>
<?php echo $site->get_partial('hoteis/features' , array('services'=> $services)) ?>
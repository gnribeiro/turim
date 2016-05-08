<?php global $post, $site; ?>

<section class="a-ligth p-t-80 p-b-10">
    <div class="a-container a-relative">
        <?php  if ( have_posts() ): while ( have_posts() ) : the_post() ?>
            <h1 class="m-b-5"> <?php _e('SOBRE O HOTEL' , 'turim')?></h1>
            <div class="a-clearfix">
                <div class="a-bo-content a-col-8">
                    <?php the_content(); ?>
                </div>
                <div class="a-col-4">
                    <div class="a-bo-highlights a-bo-highlights--right a-text-right">
                        <div class="m-b-10">
                            <i class="fa fa-phone"></i>&nbsp;
                            <a href="tel:<?php echo get_field('phone_hotel'); ?>" class="a-link-phone"><?php echo get_field('phone_hotel'); ?></a>
                        </div>

                        <div>
                            <a href="mailTo:<?php echo get_field('email_hotel'); ?>" class="a-link-phone"><?php echo get_field('email_hotel'); ?></a>
                         </div>
                    </div>
                </div>
            </div>
        <?php endwhile;  endif; ?>

    </div>
</section>
<?php echo $site->get_partial('hoteis/galeria') ?>
<?php echo $site->get_partial('hoteis/events') ?>
<?php echo $site->get_partial('hoteis/services') ?>
<?php echo $highlights ?>
<?php echo $site->get_partial('hoteis/features' , array('services'=> $services)) ?>
<?php echo $site->get_partial('hoteis/contactos') ?>
<?php global $post, $site;?>
<section class="a-light p-t-70 p-b-75">
   <article class="a-container  a-casamentos">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h1><?php echo get_field('titulo_hotel_turim')  ?></h1>
        <div class="a-clearfix">
            <div class="a-col-9">
              <?php the_content(); ?>
            </div>
             <div class="a-col-3">
                <div class="pull-right">
                    <a class="a-btn a-btn--dark m-t-15" data-a-widget="Amodal" data-a-widget-options="<?php echo $modal ?>"><?php _e('Pedir Informação' , 'turim')?> <i class="fa fa-chevron-right" ></i></a>
                </div>
             </div>
        </div>
        <div class="a-relative">


        <div class="a-slick-gallery swiper-container a-clearfix">
            <div class="swiper-wrapper">
            <?php while ( have_rows('imagens_galeria_turim') ) : the_row(); ?>
                <?php if (get_sub_field('image_galeria_turim')): ?>
                    <div class="a-slick-gallery__item swiper-slide">
                      <?php $data = get_sub_field('image_galeria_turim') ?>
                        <img src="<?php echo $data['url'] ?>" alt=" echo $data['alt']" class="a-img-responsive-max">
                    </div>
               <?php endif ?>
            <?php endwhile; ?>
            </div>

        </div>
        <div class="swiper-button-next swiper-button-next--dark "></div>
        <div class="swiper-button-prev swiper-button-prev--dark"></div>
         </div>


    <?php endwhile; endif ?>
   </article>
</section>
<?php echo $site->get_partial('modals/info' , array('ajax'=>$ajax)) ?>
<?php echo $site->get_partial('hoteis/contactos') ?>
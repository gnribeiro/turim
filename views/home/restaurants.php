<section class="a-ligth p-t-80 p-b-70">
    <div class="a-container">
        <?php if(get_field('title_restaurantes_home')): ?>
            <h1><?php the_field('title_restaurantes_home'); ?></h1>
        <?php endif ?>

        <div class="a-row p-b-30 a-clearfix">
            <div class="a-col-9">
                <?php if(get_field('content_restaurantes_home')): ?>
                    <div class="a-content"><?php the_field('content_restaurantes_home'); ?></div>
                <?php endif ?>
            </div>
            <div class="a-col-3 a-text-right p-t-5">
                 <?php if(get_field('link_restaurantes_home')): ?>
                    <a class="a-btn a-btn--darkness" href="<?php the_field('link_restaurantes_home')?>">Ver Restaurantes <i class="fa fa-chevron-right"></i></a>
                <?php endif ?>
            </div>
        </div>
        <?php if(get_field('image_restaurantes_home')): ?>
            <div class="a-row">
                 <div class="a-col-12">
                    <img src="<?php echo get_field('image_restaurantes_home')?>" alt="" class="a-img-responsive" />
                 </div>
            </div>
        <?php endif ?>
    </div>
</section>


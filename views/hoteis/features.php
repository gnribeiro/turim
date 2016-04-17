<section class="a-ligth p-t-80 p-b-70">
    <div class="a-container a-features">
    <?php if(get_field('title_features_hotel')): ?>
      <h1 class="a-text-center m-b-15">
        <?php echo get_field('title_features_hotel') ?>
      </h1>
    <?php endif; ?>

    <?php if(get_field('title_features_hotel')): ?>
      <div class="a-text-center a-content p-b-25 a-block-center-550">
        <?php echo get_field('content_features_hotel') ?>
      </div>
    <?php endif; ?>

    <?php if(have_rows('features_hotel')): ?>
      <div class="a-row a-clearfix p-t-30">
        <?php while ( have_rows('features_hotel') ) : the_row(); ?>
        <div class="a-col-3">
            <?php if(get_sub_field('imagem_sub_feature_hotel')): ?>
                <div class="a-features__image">
                    <img src="<?php echo get_sub_field('imagem_sub_feature_hotel');?>" alt="" class="a-img-responsive" />
                </div>
            <?php endif;?>

            <?php if(get_sub_field('title_sub_featurehotel')): ?>
                <div class="a-features__title">
                    <?php echo get_sub_field('title_sub_featurehotel');?>
                </div>
            <?php endif;?>

            <?php if(get_sub_field('resume_sub_feature_hotel')): ?>
                <div class="a-features__resume">
                    <?php echo get_sub_field('resume_sub_feature_hotel');?>
                </div>
            <?php endif;?>

            <?php if(get_sub_field('content_sub_feature_hotel')): ?>
                <div class="a-features__content">
                    <?php echo get_sub_field('content_sub_feature_hotel');?>
                </div>
            <?php endif;?>
        </div>
        <?php endwhile; ?>
      </div>
    <?php endif; ?>
    </div>
</section>
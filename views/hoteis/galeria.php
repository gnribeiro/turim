<?php global $post, $site; ?>
<?php if(have_rows('conteudo_da_galeria')): ?>
  <section class="a-ligth p-t-20">
      <div class="a-container">
          <div class="a-clearfix a-tabs__content a-tabs__content--selected">
          <?php while ( have_rows('conteudo_da_galeria') ) : the_row(); ?>
              <?php if (get_sub_field("conteudo_da_galeria_image")): ?>
                <div class="a-col-4">
                    <?php  $data = get_sub_field("conteudo_da_galeria_image")?>
                    <?php if ($data): ?>
                        <div class="a-relative a-panel-promo" data-a-widget="AmodalImage" data-image="<?php echo get_sub_field('conteudo_da_galeria_image-large')
?>">
                            <img  src="<?php echo $data['url'] ?>" alt="<?php echo $data['alt'] ?>" class="a-img-responsive">
                            <?php if( get_sub_field('conteudo_da_galeria_info')): ?>
                                <div class="a-icon"><i class="fa fa-plus-circle"></i></div>
                                <div class="a-panel-promo__header__text a-panel-promo__header__text--bkg">
                                    <div class="a-text-center p-l-15  p-r-15">
                                    <?php if( get_sub_field('conteudo_da_galeria_title')): ?>
                                        <h6>
                                            <?php echo get_sub_field('conteudo_da_galeria_title') ?>
                                        </h6>
                                    <?php endif;  ?>

                                    <?php if( get_sub_field('conteudo_da_galeria_info')): ?>
                                        <div>
                                            <?php echo get_sub_field('conteudo_da_galeria_info') ?>
                                        </div>
                                        <?php endif;  ?>
                                    </div>
                                </div>
                            <?php endif;  ?>
                        </div>
                    <?php endif ?>
                </div>
             <?php endif ?>
          <?php endwhile; ?>
          </div>
      </div>
  </section>
<?php endif; ?>
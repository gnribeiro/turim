<div class="a-clearfix">
    <div class="a-col-8">
        <?php if( get_field('conteudo_hotel_tab_hist')): ?>
            <div class="p-r-15 a-ligth-txt">
                <?php echo get_field('conteudo_hotel_tab_hist') ?>
            </div>
        <?php endif; ?>

        <div class="a-clearfix">
            <?php if( get_field('image_left_hotel') ): ?>
                <div class="a-col-6  a-relative a-panel-promo">
                    <img src="<?php echo get_field('image_left_hotel')?>" alt=""
                     class="a-img-responsive">
                    <?php if( get_field('conteudo_highlight_image_left')): ?>
                    <div class="a-icon"><i class="fa fa-plus-circle"></i></div>
                    <div class="a-panel-promo__header__text a-panel-promo__header__text--bkg">
                        <div class="a-text-center p-l-15  p-r-15">
                            <?php if( get_field('titulo_highlight_image_left')): ?>
                                <h6>
                                    <?php echo get_field('titulo_highlight_image_left') ?>
                                </h6>
                            <?php endif;  ?>

                            <?php if( get_field('conteudo_highlight_image_left')): ?>
                                <div>
                                    <?php echo get_field('conteudo_highlight_image_left') ?>
                                </div>
                            <?php endif;  ?>
                        </div>
                     </div>
                    <?php endif;  ?>
                </div>
            <?php endif; ?>
            <?php if( get_field('image_highlights_hist_hotel_tab')): ?>
                <div class="a-col-6 a-relative a-panel-promo">
                 <img src="<?php echo get_field('image_highlights_hist_hotel_tab')?>"
                    alt="" class="a-img-responsive" />
                    <?php if( get_field('content_highlights_hist_hotel_tab')): ?>
                    <div class="a-icon"><i class="fa fa-plus-circle"></i></div>
                    <div class="a-panel-promo__header__text a-panel-promo__header__text--bkg">
                        <div class="a-text-center p-l-15  p-r-15">
                            <?php if( get_field('titulo_highlights_hist_hotel_tab')): ?>
                                <h6>
                                    <?php echo get_field('titulo_highlights_hist_hotel_tab') ?>
                                </h6>
                            <?php endif;  ?>

                            <?php if( get_field('content_highlights_hist_hotel_tab')): ?>
                                <div>
                                    <?php echo get_field('content_highlights_hist_hotel_tab') ?>
                                </div>
                            <?php endif;  ?>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
            <?php endif ?>
        </div>
    </div>
    <div class="a-col-4 m-t-10 a-relative a-panel-promo">
         <?php if( get_field('imagem_right_hotel')): ?>
            <img src="<?php echo get_field('imagem_right_hotel')?>" alt=""
            class="a-img-responsive" />
        <?php endif;  ?>
        <?php if( get_field('conteudo_highlight_image_left')): ?>
        <div class="a-icon"><i class="fa fa-plus-circle"></i></div>
        <div class="a-panel-promo__header__text a-panel-promo__header__text--bkg">
            <div class="a-text-center p-l-15  p-r-15">
                <?php if( get_field('conteudo_highlight_imagem_right')): ?>
                    <h6>
                        <?php echo get_field('titulo_highlight_image_right') ?>
                    </h6>
                <?php endif;  ?>

                <?php if( get_field('conteudo_highlight_imagem_right')): ?>
                    <div>
                        <?php echo get_field('conteudo_highlight_imagem_right') ?>
                    </div>
                <?php endif;  ?>
            </div>
         </div>
        <?php endif;  ?>
    </div>
</div>
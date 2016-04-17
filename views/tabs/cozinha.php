<div class="a-clearfix">
    <div class="a-col-8">
        <?php if( get_field('contedo_hist_tab_res')): ?>
            <div class="p-b-20 p-r-15 a-ligth-txt a-h-273">
                <?php echo get_field('contedo_hist_tab_res') ?>
            </div>
        <?php endif; ?>

        <div class="a-clearfix">
            <?php if( get_field('Image_left_rest_tab') ): ?>
                <div class="a-col-6 a-relative a-panel-promo">
                    <img src="<?php echo get_field('Image_left_rest_tab')?>" alt=""
                     class="a-img-responsive">
                    <?php if( get_field('conteudo_highlight_image-left')): ?>
                        <div class="a-icon"><i class="fa fa-plus-circle"></i></div>
                        <div class="a-panel-promo__header__text a-panel-promo__header__text--bkg">
                            <div class="a-text-center p-l-15  p-r-15">
                                <?php if( get_field('titulo_image_left')): ?>
                                    <h6>
                                        <?php echo get_field('titulo_image_left') ?>
                                    </h6>
                                <?php endif;  ?>

                                <?php if( get_field('conteudo_highlight_image-left')): ?>
                                    <div>
                                        <?php echo get_field('conteudo_highlight_image-left') ?>
                                    </div>
                                <?php endif;  ?>
                            </div>
                         </div>
                    <?php endif;  ?>
                </div>
            <?php endif; ?>
            <?php if( get_field('image_highlights_hist_rest_tab')): ?>
                <div class="a-col-6 a-relative a-panel-promo">
                 <div class="a-icon"><i class="fa fa-plus-circle"></i></div>
                 <img src="<?php echo get_field('image_highlights_hist_rest_tab')?>"
                    alt="" class="a-img-responsive" />
                    <?php if( get_field('content_highlights_hist_rest_tab')): ?>
                        <div class="a-panel-promo__header__text a-panel-promo__header__text--bkg">
                            <div class="a-text-center p-l-15  p-r-15">
                                <?php if( get_field('title_highlights_hist_rest_tab')): ?>
                                    <h6>
                                        <?php echo get_field('title_highlights_hist_rest_tab') ?>
                                    </h6>
                                <?php endif;  ?>

                                <?php if( get_field('content_highlights_hist_rest_tab')): ?>
                                    <div>
                                        <?php echo get_field('content_highlights_hist_rest_tab') ?>
                                    </div>
                                <?php endif;  ?>
                            </div>
                        </div>
                    <?php endif ?>
                </div>
            <?php endif ?>
        </div>
        <div class="a-clearfix">
            <div class="a-col-12 m-t-10 a-relative a-panel-promo">
                 <?php if( get_field('Image_left_second_rest_tab')): ?>
                     <div class="a-icon"><i class="fa fa-plus-circle"></i></div>
                    <img src="<?php echo get_field('Image_left_second_rest_tab')?>" alt=""
                    class="a-img-responsive" />
                    <?php if( get_field('conteudo_highlight_image-left')): ?>
                        <div class="a-panel-promo__header__text a-panel-promo__header__text--bkg">
                            <div class="a-text-center p-l-15  p-r-15">
                                <?php if( get_field('conteudo_second_image_left')): ?>
                                    <h6>
                                        <?php echo get_field('titulo_second_image_left') ?>
                                    </h6>
                                <?php endif;  ?>

                                <?php if( get_field('conteudo_highlight_image-left')): ?>
                                    <div>
                                        <?php echo get_field('conteudo_second_image_left') ?>
                                    </div>
                                <?php endif;  ?>
                            </div>
                         </div>
                    <?php endif;  ?>
                <?php endif;  ?>
            </div>
        </div>
    </div>
    <div class="a-col-4 ">
        <div class="a-relative a-panel-promo">
        <?php if( get_field('image_right_histotia_rest_tab')): ?>
            <img src="<?php echo get_field('image_right_histotia_rest_tab')?>" alt=""
            class="a-img-responsive" />
            <?php if( get_field('conteudo_highlight_image-left')): ?>
                <div class="a-icon"><i class="fa fa-plus-circle"></i></div>
                <div class="a-panel-promo__header__text a-panel-promo__header__text--bkg">
                    <div class="a-text-center p-l-15  p-r-15">
                        <?php if( get_field('conteudo_highlight_image_right')): ?>
                            <h6>
                                <?php echo get_field('titulo_image_right') ?>
                            </h6>
                        <?php endif;  ?>

                        <?php if( get_field('conteudo_highlight_image-left')): ?>
                            <div>
                                <?php echo get_field('conteudo_highlight_image_right') ?>
                            </div>
                        <?php endif;  ?>
                    </div>
                 </div>
            <?php endif;  ?>
        <?php endif;  ?>
        </div>
        <div class="m-t-10 a-relative a-panel-promo">
        <?php if( get_field('Image_right_second_rest_tab')): ?>
            <img src="<?php echo get_field('Image_right_second_rest_tab')?>" alt=""
            class="a-img-responsive" />
            <?php if( get_field('conteudo_highlight_image-left')): ?>
                <div class="a-icon"><i class="fa fa-plus-circle"></i></div>
                <div class="a-panel-promo__header__text a-panel-promo__header__text--bkg">
                    <div class="a-text-center p-l-15  p-r-15">
                        <?php if( get_field('conteudo_second_image_right')): ?>
                            <h6>
                                <?php echo get_field('title_second_image_right') ?>
                            </h6>
                        <?php endif;  ?>

                        <?php if( get_field('conteudo_highlight_image-left')): ?>
                            <div>
                                <?php echo get_field('conteudo_second_image_right') ?>
                            </div>
                        <?php endif;  ?>
                    </div>
                 </div>
            <?php endif;  ?>
        <?php endif;  ?>
        </div>
    </div>
</div>

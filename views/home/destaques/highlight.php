 <div class="a-panel-promo a-panel-promo--highlight a-clearfix">
            <div class="a-panel-promo__header">
                <img src="<?php echo $data['image_highlight'] ?>" alt="" class="a-img-responsive" />
                <div class="a-panel-promo__header__text">
                    <div>
                        <h6 class="a-uppercase"><?php echo $data['title_highlight'] ?></h6>
                        <div class="a-panel-promo__bo">
                            <?php echo $data['content_highlight'] ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="a-panel-promo__content">
                <div class="a-panel-promo__figure">
                    <div class="a-panel-promo__label"><?php echo $data['title'] ?></div>
                     <img src="<?php echo $data['image'] ?>" alt="" class="a-img-responsive" />
                </div>
                <div class="a-panel-promo__highlight">
                    <h6 class="a-uppercase"><?php echo $data['title-box'] ?></h6>
                    <div class="a-panel-promo__txt">
                        <?php echo $data['content'] ?>
                    </div>
                      <a href="<?php echo $data['link'] ?>" class="a-btn a-btn--light  a-btn--blue"><?php _e('Saber Mais' , 'turim') ?> <i class="fa fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
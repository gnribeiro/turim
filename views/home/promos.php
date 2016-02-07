<?php  global $site?>
<section class="a-dark-ligth p-b-65">
    <div class="a-container">
    <?php if (count($destaques)): foreach ($destaques as $value):?>
        <div class="a-panel-promo <?php echo 'a-panel-promo--' . $value['color_highlight']?> a-clearfix">
            <div class="a-panel-promo__header">
                <img src="<?php echo $value['image_highlight'] ?>" alt="" class="a-img-responsive" />
                <div class="a-panel-promo__header__text">
                    <div>
                        <h6 class="a-uppercase"><?php echo $value['title_highlight'] ?></h6>
                        <div class="a-panel-promo__bo">
                            <?php echo $value['content_highlight'] ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="a-panel-promo__content">
                <div class="a-panel-promo__figure">
                    <div class="a-panel-promo__label"> <?php echo $value['title'] ?></div>
                    <img src=" <?php echo $value['image'] ?>" alt="" class="a-img-responsive" />
                </div>
                <div class="a-panel-promo__highlight">
                    <div>
                        <h6 class="a-uppercase"><?php echo $value['title-box'] ?></h6>
                        <div class="a-panel-promo__txt">
                             <?php echo $value['content'] ?>
                        </div>
                        <a href="<?php echo $data['link'] ?>" class="a-btn a-btn--light <?php echo 'a-btn--' . $value['color_highlight']?>">
                            <?php _e('Saber Mais' , 'turim') ?> <i class="fa fa-chevron-right"></i>
                        </a>
                    </div>
                 </div>
            </div>
        </div>
    <?php endforeach ;endif ?>

    </div>
</section>
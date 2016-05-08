<?php global $site ;?>
<section class="a-ligth p-b-65">
    <div class="a-container">
    <?php if (count($destaques)): foreach ($destaques as $value):?>
        <div class="a-panel-promo <?php echo 'a-panel-promo--' . $value['color_highlight']?> a-clearfix">

            <div class="a-panel-promo__content">
                <div class="a-panel-promo__header">
                    <div class="a-panel-promo__header__text">
                        <div>
                            <h6 class="a-uppercase"><?php echo $value['title_highlight'] ?></h6>
                            <div class="a-panel-promo__bo__num">
                                <?php echo $value['num_hotels'] ?>
                            </div>
                            <div class="a-panel-promo__bo__info">
                                <?php echo $value['text_num'] ;?>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="a-panel-promo__figure">
                    <img src=" <?php echo $value['image'] ?>" alt="" class="a-img-responsive" />
                </div>
                <div class="a-panel-promo__highlight">
                    <div>
                        <h6 class="a-uppercase"><?php echo $value['title-box'] ?></h6>
                        <div class="a-panel-promo__bo">
                            <?php  if ($value['hotels']): ?>
                                <ul>
                                    <?php foreach ($value['hotels'] as $val): ?>
                                        <li>
                                            <a href="<?php get_permalink( $val->ID) ?>"><?php echo $val->post_title ?></a>
                                        </li>
                                    <?php endforeach ?>
                                </ul>
                            <?php endif ?>
                        </div>
                        <?php if (!empty($value['content'])): ?>
                            <div class="a-panel-promo__bo m-b-10">
                                <?php echo $value['content'] ?>
                            </div>
                        <?php endif ?>

                        <?php if ($value['link']): ?>
                            <div class="m-t-30">
                                <a href="<?php echo $value['link'] ?>" class="a-btn a-btn--light <?php echo 'a-btn--' . $value['color_highlight']?>">
                            <?php _e('Saber Mais' , 'turim') ?> <i class="fa fa-chevron-right"></i>
                                </a>
                            </div>
                        <?php endif ?>
                    </div>
                 </div>
            </div>
        </div>
    <?php endforeach ;endif ?>

    </div>
</section>
<?php global $post, $site; ?>
<section class="a-contacts-hotel">
    <div class="a-container">
      <div class="a-clearfix">
        <div class="a-col-3 a-sm-col-6">
          <div id="a-google-map" class="a-contacts-hotel__google-map" data-coord="<?php echo get_field('google_map_hotel') ?>"></div>
        </div>
        <div class="a-col-3 a-sm-col-6">
          <div class="p-t-20">
            <div class="a-contacts-hotel__title">

            <?php
                $hotel_title = (get_field('nome_hotel_contacts')) ?
                    get_field('nome_hotel_contacts') :
                    preg_replace('/turim/i', '<strong>TURIM</strong>', $post->post_title);

                echo  $hotel_title
             ?>
            </div>
            <?php if (get_field('morada_hotel')): ?>
                <div class="a-contacts-hotel__address">
                    <?php echo get_field('morada_hotel'); ?>
                </div>
            <?php endif ?>
            <?php if (get_field('location_link_hotel')): ?>
                <div class="a-contacts-hotel__location">
                   <a target="_blank" href="<?php echo  get_field('location_link_hotel')?>" class="a-btn a-btn--dark">&nbsp;<i class="fa fa-map-marker"></i> <?php _e('Ver Localização','turim') ?></a>
                </div>
            <?php endif ?>
          </div>
        </div>
        <div class="a-col-3 a-sm-col-6">
            <ul class="a-nolist">
                <?php if (get_field('email_hotel')): ?>
                    <li class="a-contacts-hotel__list">
                        <i class="fa fa-envelope"></i>&nbsp;
                        <a href="mailTo:<?php echo get_field('email_hotel'); ?>" class="a-link-phone">
                        <?php echo get_field('email_hotel'); ?>
                        </a>
                    </li>
                <?php endif ?>

                <?php if (get_field('phone_hotel')): ?>
                    <li class="a-contacts-hotel__list">
                        <i class="fa fa-phone"></i>&nbsp;
                        <a href="tel:<?php echo get_field('phone_hotel'); ?>" class="a-link-phone">
                        <?php echo get_field('phone_hotel'); ?>
                        </a>
                    </li>
                <?php endif ?>

                <?php if (get_field('transports_hotel')): ?>
                    <li class="a-contacts-hotel__list">
                        <a target="_blank" href="<?php echo get_field('transports_hotel'); ?>"><?php echo  _e('Ver Transportes Mais próximos' , 'turim')?></a>
                    </li>
                <?php endif ?>
            </ul>
        </div>
        <div class="a-col-3 a-sm-col-6">
            <?php if (get_field('tripadviser_hotel')): ?>
                <div class="a-contacts-hotel__tripadviser">
                    <?php echo  get_field('tripadviser_hotel') ?>
                </div>
            <?php endif ?>
        </div>
      </div>
    </div>
</section>
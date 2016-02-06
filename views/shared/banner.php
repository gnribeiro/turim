<?php global $site; ?>
<section class="a-banner a-relative <?php echo $class ?>" role="banner" <?php echo $style ?> >
    <div class="a-menu-main a-menu-main--header">
        <div class="a-container">
            <?php echo $site->get_partial('shared/menu')  ?>
        </div>
    </div>
    <div class="a-container">
        <h1 class="a-logo"><a href="<?php echo pll_home_url(); ?>">Turim</a></h1>
        <div class="a-menu">
            <a href="#" class="a-btn a-btn--menu">MENU</a>
            <a href="#" class="a-btn a-btn--reservation"><?php _e('RESERVA' , 'turim')?></a>
        </div>
        <h2  class="a-banner__title"><?php echo $title; ?></h2>
        <div class="a-banner__resume"><?php echo $resume; ?></div>
        <?php if (get_field('stars')): ?>
            <div class="a-banner__stars">
            <?php for ($i=1; $i <= get_field('stars') ; $i++) :?>
                 <i class="fa fa-star"></i>
            <?php endfor; ?>
            </div>
        <?php endif; ?>

        <?php if ($link): ?>
            <div class="a-text-center">
                <a href="<?php echo $link ?>" class="a-btn a-btn--transparent">
                <?php _e('Saber Mais' , 'turim')?><i class="fa fa-chevron-right"></i></a>
            </div>
        <?php endif ?>
        <?php if ((is_home() || is_front_page()) && count($weather) ): ?>
            <div class="a-weather">
                LISBOA, PORTUGAL <br>
                MAX: <?php echo $weather['high'] ?>ºC  MÍN: <?php echo $weather['low'] ?>ºC
            </div>
        <?php endif ?>



    </div>
    <?php echo $site->get_partial('shared/form-reservas' , array('hoteis' => $hoteis))?>
</section>


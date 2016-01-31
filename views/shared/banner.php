<?php global $site; ?>
<section class="a-banner a-relative <?php echo $class ?>" role="banner" <?php echo $style ?> >
    <div class="a-container">
        <h1 class="a-logo">Turim</h1>
        <div class="a-menu">
            <a href="#" class="a-btn a-btn--menu">MENU</a>
            <a href="#" class="a-btn a-btn--reservation">RESERVA</a>
        </div>
        <h2  class="a-banner__title"><?php echo $title; ?></h2>
        <div class="a-banner__resume"><?php echo $resume; ?></div>
        <div class="a-text-center">
            <a href="#" class="a-btn a-btn--transparent">Saber Mais <i class="fa fa-chevron-right"></i></a>
        </div>
        <div class="a-weather">
            LISBOA, PORTUGAL <br>
            MAX: 23ºC  MÍN: 17ºC
        </div>
    </div>
    <?php echo $site->get_partial('shared/form-reservas')?>
</section>


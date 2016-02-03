<?php global $site; ?>
<section class="a-banner a-relative <?php echo $class ?>" role="banner" <?php echo $style ?> >
    <div class="a-menu-main a-menu-main--header">
        <div class="a-container">
            <?php echo $site->get_partial('shared/menu')  ?>
        </div>
    </div>
    <div class="a-container">
        <h1 class="a-logo">Turim</h1>
        <div class="a-menu">
            <a href="#" class="a-btn a-btn--menu">MENU</a>
            <a href="#" class="a-btn a-btn--reservation">RESERVA</a>
        </div>
        <h2  class="a-banner__title"><?php echo $title; ?></h2>
        <div class="a-banner__resume"><?php echo $resume; ?></div>


        <?php if ($link): ?>
            <div class="a-text-center">
                <a href="<?php echo $link ?>" class="a-btn a-btn--transparent">Saber Mais <i class="fa fa-chevron-right"></i></a>
            </div>
        <?php endif ?>
        <?php if (is_home() || is_front_page()): ?>
            <div class="a-weather">
                LISBOA, PORTUGAL <br>
                MAX: 23ºC  MÍN: 17ºC
            </div>
        <?php endif ?>

    </div>
    <?php echo $site->get_partial('shared/form-reservas' , array('hoteis' => $hoteis))?>
</section>


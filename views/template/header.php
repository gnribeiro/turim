<?php echo $head; ?>
<body>
    <?php echo $data_header['reservation'] ?>
    <header class="main">
        <div class="a-menu-main a-menu-main--header">
            <div class="a-container">
                <?php echo $data_header['menu'] ?>
            </div>
        </div>
        <div class="a-header-social">
            <div class="a-container">
                <ul class="a-nolist a-pull-right">
                    <li class="a-social">
                        <a href="<?php echo get_option( 'facebook_site' ); ?>" class="a-social--facebook">facebook</a>
                    </li>
                     <li class="a-social">
                        <a href="<?php echo get_option( 'instagram_site' ); ?>" class="a-social--instagram">instagram</a>
                    </li>
                    <li  class="a-social a-hide-mobile">
                        <span class="a-social--phone"><a href="tel:210 330 800" class="a-link-phone a-link-phone--ligth">(+351) 210 330 800</a></span>
                    </li>
                    <li class="a-lang">
                        <ul class="a-lang__content">
                        <?php pll_the_languages(array('display_names_as'=>"name" , 'hide_if_empty' =>0));?>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="a-menu-content">
            <div class="a-container">
            <h1 class="a-logo"><a href="<?php echo pll_home_url(); ?>">Turim</a></h1>
            <div class="a-menu">
                <a href="#" class="a-btn a-btn--menu">MENU</a>
                <a href="#" class="a-btn a-btn--reservation"><?php _e('RESERVAR' , 'turim')?></a>
            </div>


        </div>

    </header>

    <?php if(isset($banner)) echo $banner; ?>

<?php echo $head; ?>
<body>
    <header class="main">
        <div class="a-container">
            <ul class="a-nolist a-pull-right">
                <li class="a-social">
                    <a href="<?php echo get_option( 'facebook_site' ); ?>" class="a-social--facebook">facebook</a>
                </li>
                 <li class="a-social">
                    <a href="<?php echo get_option( 'instagram_site' ); ?>" class="a-social--instagram">instagram</a>
                </li>
                <li  class="a-social">
                    <span class="a-social--phone">(+351) 210 330 800</span>
                </li>
                <li class="a-lang">
                    <ul class="a-lang__content">
                    <?php pll_the_languages(array('display_names_as'=>"name" , 'hide_if_empty' =>0));?>
                    </ul>
                </li>
            </ul>
        </div>
    </header>

    <?php if(isset($banner)) echo $banner; ?>

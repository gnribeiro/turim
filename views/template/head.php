<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7 ie6"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8 ie7"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9 ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <title><?php echo (get_field('titlle_seo')) ? get_field('titlle_seo') : 'TURIM'?></title>
    <meta name="description" content="<?php echo (get_field('desc_seo')) ? get_field('desc_seo') : 'TURIM'?>">
    <meta name="keywords"content="<?php echo (get_field('words_seo')) ? get_field('words_seo') : 'TURIM'?>">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="<?php echo THEMEURL?>favicon.ico" />
    <link rel="stylesheet" href="<?php echo THEMEURL?>assets/css/index.css">
    <script src="<?php echo THEMEURL?>assets/js/vendor/modernizr.min.js"></script>
    <?php wp_head(); ?>
    <script type='text/javascript'>
    /* <![CDATA[ */
    var vars_site = {
        "theme_url"        : '',
        "ajax_url"         : ' <?php echo admin_url( "admin-ajax.php" ) ?>',
        "language_current" : '<?php echo pll_current_language() ?>'
    };
    /* ]]> */
    </script>
    </head>
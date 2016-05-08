<?php
// update_option('siteurl', 'http://turim.aliceyoung.pt' );
// update_option('home', 'http://turim.aliceyoung.pt' );
define('EXT', '.php');
define('DOCROOT', realpath(dirname(__FILE__)).DIRECTORY_SEPARATOR);

//ini_set('display_errors', '1');

if(is_file( $core = dirname(__FILE__).'/libs/Core.php' ) )
    include $core;

            add_action('after_setup_theme', 'poe_lang');
            function poe_lang(){
                load_theme_textdomain('turim', get_template_directory() . '/lang' );
            }

?>
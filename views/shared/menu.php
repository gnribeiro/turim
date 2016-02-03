<?php
  wp_nav_menu(array(
    'theme_location' =>'primary',
    'walker'         => new GWP_Nav_Menu() ,
    'depth' => 4)
  );
?>
<?php
global $site;

echo $intros[0];

echo $site->get_partial('home/promos' , array('destaques' =>  $destaques ));

?>

<?php echo $intros[1]; ?>

<?php echo $site->get_partial('home/restaurants'); ?>

<?php echo $intros[2]; ?>

<?php echo $site->get_partial('home/hoteis'); ?>



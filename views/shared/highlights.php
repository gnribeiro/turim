<?php if(isset($style)):?>

<section class="a-highlights" style="<?php echo $style ?>">
  <div class="a-container">
    <?php if(get_field('titulo_highligter_rest')):  ?>
      <h1 class="a-highlights__title m-b-15">
        <?php echo get_field('titulo_highligter_rest'); ?>
      </h1>
    <?php endif ?>
     <?php if(get_field('content_highligter_rest')):  ?>
      <div class="a-highlights__content">
        <?php echo get_field('content_highligter_rest'); ?>
      </div>
    <?php endif ?>
     <?php if(get_field('resume_highligter_rest')):  ?>
      <div class="a-highlights__resume">
        <?php echo get_field('resume_highligter_rest'); ?>
      </div>
    <?php endif ?>
    <?php if(get_field('coordenadas_hotel_highligter')):  ?>
      <div class="a-highlights__resume">
        <?php  _e("Coordenadas" , 'turim') ?>
        <br>
        <a class="a-link--lighter" href="https://www.google.com/maps/dir/Current+Location/<?php echo get_field('coordenadas_hotel_highligter') ?>" target="blank"><?php echo get_field('coordenadas_hotel_highligter'); ?></a>
      </div>
    <?php endif ?>
  </div>
</section>

<?php endif ?>
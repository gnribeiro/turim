<?php if(isset($style)):?>

<section class="a-highlights" style="<?php echo $style ?>">
  <div class="a-container">
    <?php if(get_field('titulo_highligter_rest')):  ?>
      <h1 class="a-highlights__title">
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
  </div>
</section>

<?php endif ?>
<section class="a-ligth p-t-30 p-b-45">
  <div class="a-container a-services">
    <h3><?php _e('Serviços Disponíveis', 'turim'); ?></h3>

    <ul class="a-services__list">
      <?php if(get_field('num_rooms_rest')): ?>
        <li class="a-services__item a-services__item--room">
          <?php echo get_field('num_rooms_rest') ?>
          <br />
          <?php _e('quartos' , 'turim') ?>
        </li>
      <?php endif; ?>

       <?php if(get_field('services_restaurante')): ?>

        <?php foreach (get_field('services_restaurante') as $value): ?>
          <li class="a-services__item  <?php printf(__('a-services__item--%s' , 'turim'), $value);   ?>">
            <?php _e( $services[$value], 'turim') ?>
          </li>
        <?php endforeach; endif; ?>
    </ul>
  </div>
</section>


<div class="a-clearfix">
    <div class="a-col-8">
        <?php if( get_field('title_chef_tab_rest')): ?>
          <h2> <?php echo get_field('title_chef_tab_rest') ?></h2>
        <?php endif; ?>
        <?php if( get_field('content_chef_tab_rest')): ?>
            <div class="p-b-80 p-r-15 a-ligth-txt">
                <?php echo get_field('content_chef_tab_rest') ?>
            </div>
        <?php endif; ?>
    </div>

    <div class="a-col-4">
      <?php if( get_field('Imagem_chef_tab_rest')): ?>
            <img src="<?php echo get_field('Imagem_chef_tab_rest')?>" alt=""
            class="a-img-responsive" />
        <?php endif;  ?>
    </div>
</div>
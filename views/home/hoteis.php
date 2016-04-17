<section class="a-ligth p-t-80 p-b-70">
    <div class="a-container">
        <?php if(get_field('title_hotels_home')): ?>
            <h1 class="a-text-center m-b-10"><?php the_field('title_hotels_home'); ?></h1>
        <?php endif ?>
        <?php if(get_field('content_hotels_home')): ?>
            <div class="a-text-center a-content p-b-25"><?php the_field('content_hotels_home'); ?></div>
            <div class="a-text-center"><i class="fa fa-instagram a-instragram"></i></div>
        <?php endif ?>

        <?php  if(count($instagram)):?>
        <div class="a-row a-clearfix p-t-30 a-phone-hoteis-home">
            <?php   foreach ( $instagram as $value ) :  ?>
            <div class="a-col-3">
                <div>
                    <a href="<?php echo $value['link'] ?>" target="_blank">
                        <img src="<?php echo  $value['image']?>" alt="" class="a-img-responsive" border="0"/>
                    </a>
                </div>
                <div class="a-hotel-legend">
                    <a href="<?php echo $value['link'] ?>" target="_blank">
                        <i class="fa fa-instagram a-instragram"></i> <?php echo  $value['date']?> @TurimHotels
                    </a>
                </div>
            </div>
           <?php  endforeach;?>
        </div>
        <?php endif;?>
    </div>
</section>
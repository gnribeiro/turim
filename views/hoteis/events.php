<?php global $post, $site; ?>
<section class="a-ligth p-t-60">
    <?php  if( get_field("content_tab_events_hotel") ):?>
    <div class="a-container">
        <h1 class="m-b-5"> <?php _e('REUNIÕES & EVENTOS' , 'turim')?></h1>
        <div class="a-clearfix">
            <div class="a-col-6">
                 <?php if(get_field("content_tab_events_hotel")): ?>
                        <div class="a-bo-events__content">
                            <?php echo get_field("content_tab_events_hotel");?>
                        </div>
                    <?php endif; ?>
            </div>
            <div class="a-col-6">
                <div class="a-meetings-container a-clearfix">
                    <?php if (get_field("n_pessoas_sala_disposição_em_escola")): ?>
                        <div class="a-meetings a-meetings-escola">
                            <p class="a-meetings__title">
                                 <?php _e('DISPOSIÇÃO EM ESCOLA' , 'turim') ?>
                            </p>
                            <p class="a-meetings__content ">
                                <?php echo get_field("n_pessoas_sala_disposição_em_escola");?>
                                <br>
                                <?php _e('PESSOAS' , 'turim') ?>
                            </p>
                        </div>
                    <?php endif ?>

                    <?php if (get_field("n_pessoas_sala_disposição_em_plateia")): ?>
                        <div class="a-meetings a-meetings-plateia">
                            <p class="a-meetings__title">
                                 <?php _e('DISPOSIÇÃO EM PLATEIA' , 'turim') ?>
                            </p>
                            <p class="a-meetings__content ">
                                <?php echo get_field("n_pessoas_sala_disposição_em_plateia");?>
                                <br>
                                <?php _e('PESSOAS' , 'turim') ?>
                            </p>
                        </div>
                    <?php endif ?>

                    <?php if (get_field("n_pessoas_sala_disposição_em_u")): ?>
                        <div class="a-meetings a-meetings-u">
                            <p class="a-meetings__title">
                                 <?php _e('DISPOSIÇÃO EM U' , 'turim') ?>
                            </p>
                            <p class="a-meetings__content ">
                                <?php echo get_field("n_pessoas_sala_disposição_em_u");?>
                                <br>
                                <?php _e('PESSOAS' , 'turim') ?>
                            </p>
                        </div>
                    <?php endif ?>
                </div>
            </div>
        </div>
    </div>
    <?php endif ?>
</section>
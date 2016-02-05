<?php  global $site?>
<section class="a-dark-ligth p-b-65">
    <div class="a-container">
    <?php
        if (count($destaques)){
            foreach ($destaques as $value){
                $view = 'home/destaques/'.$value['color_highlight'];
                echo $site->get_partial($view, array('data' , $value));
            }
        }
    ?>

    </div>
</section>
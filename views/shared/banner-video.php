<?php global $site; ?>
<section class="a-banner a-relative a-banner--video" role="banner" style="background-size:contain; background-image:url(http://turim.aliceyoung.pt/wp-content/themes/turim/assets/images/img_01.png)">
    <div data-widget="Video" data-widget-options='{"videoId":"#playerpage"}'>
        <video class="a-video" muted autoplay class="a-video" id="playerpage" >
            <source src="<?php echo $video ?>"  />
            <object width="100%" style="width:100%; height:auto;" type="application/x-shockwave-flash" data=" <?php echo THEMEURL ?>assets/swf/flashmediaelement.swf">
                <param name="movie" value=" <?php echo THEMEURL ?>assets/swf/flashmediaelement.swf" />
                <param name="flashvars" value="controls=true&file=<?php echo $video ?>" />
                <img src="" width="100%" title="No video playback capabilities" />
            </object>
        </video>
    </div>

    <script>
        var video = document.getElementById('playerpage');
        video.addEventListener('click',function(){
        video.play();
        },false);
    </script>

    <div class="a-menu-main a-menu-main--header">
        <div class="a-container">
            <?php echo $site->get_partial('shared/menu')  ?>
        </div>
    </div>
    <div class="a-video__content">
        <div class="a-container">
            <h2  class="a-banner__title"><?php echo $title; ?></h2>
            <div class="a-banner__resume"><?php echo $resume; ?></div>
            <?php if (get_field('stars')): ?>
                <div class="a-banner__stars">
                <?php for ($i=1; $i <= get_field('stars') ; $i++) :?>
                     <i class="fa fa-star"></i>
                <?php endfor; ?>
                </div>
            <?php endif; ?>

            <?php if ($link): ?>
                <div class="a-text-center">
                    <a href="<?php echo $link ?>" class="a-btn a-btn--transparent">
                    <?php _e('Saber Mais' , 'turim')?><i class="fa fa-chevron-right"></i></a>
                </div>
            <?php endif ?>
        </div>
    </div>
</section>

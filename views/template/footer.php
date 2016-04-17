<?php global $site ?>
<footer class="a-main">
<?php

echo $site->get_partial('home/newsletter',
    array('ajax'=>Helper::setJson(array('action'=> 'newsletter'))));
?>
    <section class="a-light p-t-30 p-b-55">
        <div class="a-container">
            <div class="a-menu-main a-menu-main--footer">
                <?php echo $site->get_partial('shared/menu')  ?>
            </div>
        </div>
    </section>

    <section class="a-dark p-t-25 p-b-25">
        <div class="a-container">
            <div class="a-footer-contacts">
                <div class="a-footer-contacts__title"><?php _e('Fale connosco' , 'turim')?></div>
                <div class="a-footer-contacts__content">
                    <span class="a-footer-contacts__phone"><i class="fa fa-phone"></i>
                    <a href="tel:210 330 800" class="a-link-phone">210 330 800</a></span>
                    <span class="a-footer-contacts__email"><i class="fa fa-chevron-right"></i>  <a href="mailto:reservas@turimhoteis.com">reservas@turimhoteis.com</a> </span>
                </div>
            </div>
        </div>
    </section>
    <section class="a-light p-t-20 p-b-20">
        <div class="a-container">
            <div class="a-clearfix a-footer-copyright">
                <ul class="a-footer-copyright__list a-clearfix p-b-10">
                    <li>Copyright © <?php echo date("Y"); ?>  Turim Hotels. <?php _e('Todos os Direitos Reservados.' , 'turim')?> </li>
                    <li><a href="/<?php echo Helper::get_slug_pll('politica-de-privacidade' , 'page')?>/"><?php _e('Politica de Privacidade' , 'turim')?></a></li>
                    <li><a href="/<?php echo  Helper::get_slug_pll('termos-e-condicoes' , 'page') ?>/"><?php _e('Termos e Condições' , 'turim')?></a></li>
                </ul>
                <div class="a-pull-right">Powered by ALICE</div>
            </div>
        </div>
    </section>
</footer>
        <script src="https://maps.googleapis.com/maps/api/js"></script>
        <script src="<?php echo THEMEURL?>assets/js/index-min.js"></script>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', "<?php echo get_option( 'google_analytics' ); ?>", 'auto');
          ga('send', 'pageview');

        </script>

        <?php wp_footer(); ?>
    </body>
</html>
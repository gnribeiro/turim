<section class="a-dark p-b-40 p-t-40">
  <div class="a-container">
    <div class="a-row">
      <div class="a-col-4">
        <h3><?php _e('Subscreva a Newsletter' , 'turim')?></h3>
      </div>
      <div class="a-col-4 a-newsletter__info">
        <?php _e('Insira o seu e-mail e mantenha-se atualizado com as últimas notícias e promoções!
' , 'turim')?>
      </div>
      <div class="a-col-4">
        <form action="" method="post" enctype='multipart/form-data' data-a-widget="Ajax" data-a-widget-options="<?php echo $ajax ?>" class="a-relative a-newsletter__form">
          <div class="a-loading  a-hide">
                <img src="<?php printf('%s/assets/images/load.gif' , THEMEURL) ?>" alt="" />
            </div>
          <div class="a-clearfix">
            <input type="email" name="news-email" id="news-email" placeholder="E-mail"  class="a-input-email a-input-email--newsletter" />
            <input type="submit" value="<?php _e('Subscrever' , 'turim')?>" class="a-input-submit a-input-submit--newsletter" />
          </div>
          <div class="a-input-error"></div>
          <div class=" a-field-success" id="sucesso-news"></div>
        </form>
      </div>
    </div>
  </div>
</section>
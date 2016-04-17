<div id="adesao_ask" class="a-hide">
    <div class="a-modal__header">
        <h2><?php _e('PEDIR ADESÃO' , 'turim')?></h2>
        <?php _e('TURIM HOTÉIS  •  FICHA DE INSCRIÇÃO' , 'turim')?>
    </div>

     <form action="" enctype='multipart/form-data'  class="a-field-form a-field-form--modal" data-a-widget="Ajax" data-a-widget-options="<?php echo $ajax ?>" >
        <div class=" a-field-success" id="sucesso"></div>
        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal"for="nome"><?php _e('NOME' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="nome" placeholder="<?php _e('Introduzir Nome Completo' , 'turim')?>" id="nome" value="" />
            <div   class="a-input-error  a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="email"><?php _e('EMAIL' , 'turim')?></label>
            <input type="text" class="a-input-email a-input-email--modal" name="email" placeholder="<?php _e('Introduzir Email' , 'turim')?>" id="email" value=""/>
            <div   class="a-input-error  a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="phone"><?php _e('TELEMÓVEL' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="phone" placeholder="<?php _e('Introduzir telemóvel' , 'turim')?>" id="phone" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

         <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="address"><?php _e('MORADA' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="address" placeholder="<?php _e('Introduzir Morada' , 'turim')?>" id="address" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-clearfix">
            <div class="a-col-6">

                <label class="a-field__label a-field__label--modal" for="cp7"><?php _e('CÓDIGO POSTAL' , 'turim')?></label>
                <input class="a-input-text a-input-text--modal" type="text" name="cp7" placeholder="<?php _e('Introduzir Código Postal' , 'turim')?>" id="cp7" value="" />
                <div class="a-input-error a-input-error--modal"></div>
            </div>

            <div class="a-col-6">
                <label class="a-field__label a-field__label--modal" for="localidade"><?php _e('LOCALIDADE' , 'turim')?></label>
                <input class="a-input-text a-input-text--modal" type="text" name="localidade" placeholder="<?php _e('Introduzir Localidade' , 'turim')?>" id="localidade" value="" />
                <div class="a-input-error a-input-error--modal"></div>
            </div>
        </div>

        <div class="a-text-center a-relative">
            <div class="a-loading a-loading--modal a-hide">
                <img src="<?php printf('%s/assets/images/ring.gif' , THEMEURL) ?>" alt="" />
            </div>
            <button type="submit" class="a-btn a-btn--submit a-btn--submit--modal"> <?php _e('Enviar pedido de Adesão' , 'turim')?><i class="fa fa-chevron-right"></i></button>
        </div>
    </form>
</div>
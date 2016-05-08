<div id="info" class="a-hide">
    <div class="a-modal__header">
        <h2><?php _e('PEDIR INFORMAÇÕES' , 'turim')?></h2>
    </div>

    <form action="" id="form-info" enctype='multipart/form-data'  class="a-field-form a-field-form--modal" data-a-widget="Ajax" data-a-widget-options="<?php echo $ajax ?>" class="a-field-form">
        <div class=" a-field-success" id="sucesso"></div>
        <div class="a-field a-field--modal">
            <label class="a-field__label  a-field__label--modal"for="nome"><?php _e('NOME' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="nome" placeholder="<?php _e('Introduzir Nome Completo' , 'turim')?>" id="nome" value="" />
            <div class="a-input-error  a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label  a-field__label--modal" for="company"><?php _e('EMPRESA' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="company" placeholder=" <?php _e('Introduzir Empresa' , 'turim')?>" id="company" value="" />
            <div class="a-input-error  a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label  a-field__label--modal" for="email"><?php _e('EMAIL' , 'turim')?></label>
            <input type="text" class="a-input-email a-input-email--modal" name="email" placeholder="<?php _e('Introduzir email' , 'turim')?>" id="email" value=""/>
            <div class="a-input-error  a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label  a-field__label--modal" for="obs"><?php _e('ESCREVA AQUI A SUA MENSAGEM' , 'turim')?></label>
            <textarea class="a-input-textarea  a-input-textarea--modal" placeholder="<?php _e('Escreva aqui a sua mensagem' , 'turim')?>" name="obs" id="obs" ></textarea>
            <div class="a-input-error  a-input-error--modal"></div>
        </div>

        <div class="a-text-center a-relative">
            <div class="a-loading a-loading--modal a-hide">
                <img src="<?php printf('%s/assets/images/ring.gif' , THEMEURL) ?>" alt="" />

            </div>

            <button type="submit" class="a-btn a-btn--submit a-btn--submit--modal"> <?php _e('Enviar pedido' , 'turim')?><i class="fa fa-chevron-right"></i></button>
        </div>

    </form>
</div>
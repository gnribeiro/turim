<div id="reservation" class="a-hide">
    <div class="a-modal__header">
        <h2><?php _e('RESERVAR' , 'turim')?></h2>
        <?php _e('TURIM HOTÉIS • RESERVAS' , 'turim')?>
    </div>

    <form action=""  class="a-field-form a-field-form--modal" enctype='multipart/form-data'  class="a-field-form a-field-form--modal" data-a-widget="Ajax" data-a-widget-options="<?php echo $ajax ?>">
      <div class=" a-field-success" id="sucesso"></div>
      <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal"for="nome"><?php _e('NOME' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="nome" placeholder="<?php _e('Introduzir Nome Completo' , 'turim')?>" id="nome" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="phone"><?php _e('TELEMÓVEL' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="phone" placeholder=" <?php _e('Introduzir Telemóvel' , 'turim')?>" id="phone" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

         <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="persons"><?php _e('Nº PESSOAS' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="persons" placeholder="<?php _e('Introduzir nº de pessoas' , 'turim')?>" id="persons" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="date-reserve"><?php _e('DATA' , 'turim')?></label>
            <input type="text" class="a-input-text a-input-text--modal" name="date-reserve" placeholder="<?php _e('Introduzir Data' , 'turim')?>" id="date-reserve" value=""/>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="time"><?php _e('HORA' , 'turim')?></label>
            <input type="text" class="a-input-text a-input-text--modal" name="time" placeholder="<?php _e('Introduzir Hora' , 'turim')?>" id="time" value=""/>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-text-center a-relative">
            <div class="a-loading a-loading--modal a-hide">
                <img src="<?php printf('%s/assets/images/ring.gif' , THEMEURL) ?>" alt="" />
            </div>
            <input type="hidden" name="restaurent" value="<?php echo $restaurent; ?>">
            <button type="submit" class="a-btn a-btn--submit a-btn--submit--modal"> <?php _e('Enviar pedido de reserva' , 'turim')?><i class="fa fa-chevron-right"></i></button>
        </div>

    </form>
</div>
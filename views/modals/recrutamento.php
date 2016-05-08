<div id="recrutamento" class="a-hide">
    <div class="a-modal__header">
        <h2><?php _e('RECRUTAMENTO' , 'turim')?></h2>
        <?php _e('TURIM HOTÉIS • FICHA DE INSCRIÇÃO' , 'turim')?>
    </div>

    <form action="" id="form-recrutamento" enctype='multipart/form-data'  class="a-field-form a-field-form--modal" data-a-widget="Ajax" data-a-widget-options="<?php echo $ajax ?>" >
        <div class=" a-field-success" id="sucesso">
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal"for="nome"><?php _e('NOME' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="nome" placeholder="<?php _e('Introduzir Nome Completo' , 'turim')?>" id="nome" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="email"><?php _e('EMAIL' , 'turim')?></label>
            <input type="text" class="a-input-email a-input-email--modal" name="email" placeholder="<?php _e('Introduzir email' , 'turim')?>" id="email" value=""/>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="localidade"><?php _e('LOCALIDADE' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="localidade" placeholder="<?php _e('Introduzir Localidade' , 'turim')?>" id="localidade" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="phone"><?php _e('TELEMÓVEL' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="phone" placeholder="<?php _e('Introduzir telemóvel' , 'turim')?>" id="phone" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="age"><?php _e('IDADE' , 'turim')?></label>
            <input class="a-input-text a-input-text--modal" type="text" name="age" placeholder=" <?php _e('Introduzir idade' , 'turim')?>" id="age" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal ">
            <div class="a-clearfix">
                <div class="a-input-fake"></div>
                <label class="a-field__label--file" for="cvform"><?php _e('Anexar Ficheiro' , 'turim')?></label>
                <input type="file" class="a-input-file" id="cvform" name="cvform" />
            </div>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

       <div class="a-field a-field--modal">
            <select name="subject" class="a-field-select" id="subject" class="subject">
                <option value=''><?php _e('ÁREA DE CANDIDATURA' , 'turim')?></option>
                <option value='Receção'><?php _e('Receção' , 'turim')?></option>
                <option value='Restauração/Bar'><?php _e('Restauração/Bar' , 'turim')?></option>
                <option value='Manutenção/limpezas'><?php _e('Manutenção/limpezas' , 'turim')?></option>
                <option value='Bagageiro'><?php _e('Bagageiro' , 'turim')?></option>
                <option value='Outros'><?php _e('Outros' , 'turim')?></option>
            </select>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="obs"><?php _e('OBSERVAÇÕES' , 'turim')?></label>
            <textarea class="a-input-textarea a-input-textarea--modal" plceholder="Introduzir observações" name="obs" id="obs" ></textarea>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-text-center a-relative">
             <div class="a-loading a-loading--modal a-hide">
                <img src="<?php printf('%s/assets/images/ring.gif' , THEMEURL) ?>" alt="" />
            </div>

            <button type="submit" class="a-btn a-btn--submit a-btn--submit--modal"> <?php _e('Enviar' , 'turim')?><i class="fa fa-chevron-right"></i></button>
        </div>
    </form>
</div>
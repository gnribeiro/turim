<div id="recrutamento" class="a-hide">
    <div class="a-modal__header">
        <h2>RECRUTAMENTO</h2>
        TURIM HOTÉIS  •  FICHA DE INSCRIÇÃO
    </div>

    <form action="" id="form-recrutamento" enctype='multipart/form-data'  class="a-field-form a-field-form--modal" data-a-widget="Ajax" data-a-widget-options="<?php echo $ajax ?>" >
        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal"for="nome">NOME</label>
            <input class="a-input-text a-input-text--modal" type="text" name="nome" placeholder="Introduzir Nome Completo" id="nome" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="email">EMAIL</label>
            <input type="text" class="a-input-email a-input-email--modal" name="email" placeholder="Introduzir email" id="email" value=""/>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="localidade">LOCALIDADE</label>
            <input class="a-input-text a-input-text--modal" type="text" name="localidade" placeholder="Introduzir Localidade" id="localidade" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="phone">TELEMÓVEL</label>
            <input class="a-input-text a-input-text--modal" type="text" name="phone" placeholder="Introduzir telemóvel" id="phone" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="age">IDADE</label>
            <input class="a-input-text a-input-text--modal" type="text" name="age" placeholder="Introduzir idade" id="age" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal ">
            <div class="a-clearfix">
                <div class="a-input-fake"></div>
                <label class="a-field__label--file" for="cvform">Anexar Ficheiro</label>
                <input type="file" class="a-input-file" id="cvform" name="cvform" />
            </div>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <select name="type-company" id="" class="a-field-select a-field-select--modal">
                <option value="" class="a-field-option">ASSUNTO</option>
            </select>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="obs">OBSERVAÇÕES</label>
            <textarea class="a-input-textarea a-input-textarea--modal" plceholder="Introduzir observações" name="obs" id="obs" ></textarea>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-text-center a-relative">
             <div class="a-loading a-loading--modal a-hide">
                <i class="fa fa-spinner"></i>
            </div>

            <button type="submit" class="a-btn a-btn--submit">Enviar <i class="fa fa-chevron-right"></i></button>
        </div>
    </form>
</div>
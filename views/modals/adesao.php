<div id="adesao" class="a-hide">
    <div class="a-modal__header">
        <h2>ADESÃO</h2>
        TURIM HOTÉIS  •  FICHA DE INSCRIÇÃO
    </div>

     <form action="" enctype='multipart/form-data'  class="a-field-form a-field-form--modal" data-a-widget="Ajax" data-a-widget-options="<?php echo $ajax ?>" >
        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal"for="nome">NOME</label>
            <input class="a-input-text a-input-text--modal" type="text" name="nome" placeholder="Introduzir Nome Completo" id="nome" value="" />
            <div   class="a-input-error  a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="email">EMAIL</label>
            <input type="text" class="a-input-email a-input-email--modal" name="email" placeholder="Introduzir Email" id="email" value=""/>
            <div   class="a-input-error  a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="company">EMPRESA</label>
            <input class="a-input-text a-input-text--modal" type="text" name="company" placeholder="Introduzir Empresa" id="company" value="" />
            <div class="a-input-error  a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="nif">NIF</label>
            <input class="a-input-text a-input-text--modal" type="text" name="nif" placeholder="Introduzir Nif" id="nif" value="" />
            <div class="a-input-error  a-input-error--modal"></div>
        </div>

         <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="address">MORADA</label>
            <input class="a-input-text a-input-text--modal" type="text" name="address" placeholder="Introduzir Morada" id="address" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-clearfix">
            <div class="a-col-6">
                <div class="a-field a-field--modal">
                    <label class="a-field__label a-field__label--modal" for="cp7">CÓDIGO POSTAL</label>
                    <input class="a-input-text a-input-text--modal" type="text" name="cp7" placeholder="Introduzir Código Postal" id="cp7" value="" />
                    <div class="a-input-error a-input-error--modal"></div>
                </div>
            </div>

            <div class="a-col-6">
                <div class="a-field a-field--modal">
                    <label class="a-field__label a-field__label--modal" for="localidade">LOCALIDADE</label>
                    <input class="a-input-text a-input-text--modal" type="text" name="localidade" placeholder="Introduzir Localidade" id="localidade" value="" />
                    <div class="a-input-error a-input-error--modal"></div>
                </div>
            </div>
        </div>

        <div class="a-text-center a-relative">
            <div class="a-loading a-loading--modal a-hide">
                <i class="fa fa-spinner"></i>
            </div>
            <button type="submit" class="a-btn a-btn--submit">Enviar pedido de Adesão <i class="fa fa-chevron-right"></i></button>
        </div>
    </form>
</div>
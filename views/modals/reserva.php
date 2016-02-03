<div id="reservation" class="a-hide">
    <div class="a-modal__header">
        <h2>RESERVAR</h2>
        TURIM HOTÉIS  •  RESERVAS
    </div>

    <form action=""  class="a-field-form a-field-form--modal" enctype='multipart/form-data'  class="a-field-form a-field-form--modal" data-a-widget="Ajax" data-a-widget-options="<?php echo $ajax ?>">
      <div class=" a-field-success" id="sucesso"></div>
      <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal"for="nome">NOME</label>
            <input class="a-input-text a-input-text--modal" type="text" name="nome" placeholder="Introduzir Nome Completo" id="nome" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="phone"> TELEMÓVEL</label>
            <input class="a-input-text a-input-text--modal" type="text" name="phone" placeholder="Introduzir Telemóvel" id="phone" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

         <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="persons"> Nº PESSOA</label>
            <input class="a-input-text a-input-text--modal" type="text" name="persons" placeholder="Introduzir Morada" id="persons" value="" />
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="date-reserve">DATA</label>
            <input type="text" class="a-input-text a-input-text--modal" name="date-reserve" placeholder="Introduzir Data" id="date-reserve" value=""/>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-field a-field--modal">
            <label class="a-field__label a-field__label--modal" for="time">HORA</label>
            <input type="text" class="a-input-text a-input-text--modal" name="time" placeholder="Introduzir Hora" id="time" value=""/>
            <div class="a-input-error a-input-error--modal"></div>
        </div>

        <div class="a-text-center a-relative">
            <div class="a-loading a-loading--modal a-hide">
                <img src="<?php printf('%s/assets/images/ring.gif' , THEMEURL) ?>" alt="" />
            </div>
            <button type="submit" class="a-btn a-btn--submit a-btn--submit--modal">Enviar pedido de reserva <i class="fa fa-chevron-right"></i></button>
        </div>

    </form>
</div>
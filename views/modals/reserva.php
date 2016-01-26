<div id="reservation" class="a-hide">
    <div class="a-modal__header">
        <h2>RESERVAR</h2>
        TURIM HOTÉIS  •  RESERVAS
    </div>

    <form action=""  class="a-field-form" enctype='multipart/form-data'  class="a-field-form a-field-form--modal" data-a-widget="Ajax" data-a-widget-options="<?php echo $ajax ?>">
      <div class="a-field">
            <label class="a-field__label"for="nome">NOME</label>
            <input class="a-input-text" type="text" name="nome" placeholder="Introduzir Nome Completo" id="nome" value="" />
            <div class="a-input-error"></div>
        </div>

        <div class="a-field">
            <label class="a-field__label" for="phone"> TELEMÓVEL</label>
            <input class="a-input-text" type="text" name="phone" placeholder="Introduzir Telemóvel" id="phone" value="" />
            <div class="a-input-error"></div>
        </div>

         <div class="a-field">
            <label class="a-field__label" for="persons"> Nº PESSOA</label>
            <input class="a-input-text" type="text" name="persons" placeholder="Introduzir Morada" id="persons" value="" />
            <div class="a-input-error"></div>
        </div>

        <div class="a-field">
            <label class="a-field__label" for="date-reserve">DATA</label>
            <input type="text" class="a-input-text" name="date" placeholder="Introduzir Data" id="date-reserve" value=""/>
            <div class="a-input-error"></div>
        </div>

        <div class="a-field">
            <label class="a-field__label" for="time">HORA</label>
            <input type="text" class="a-input-text" name="time" placeholder="Introduzir Hora" id="time" value=""/>
            <div class="a-input-error"></div>
        </div>

        <div class="text-center a-relative">
            <div class="a-loading a-loading--modal a-hide">
                <i class="fa fa-spinner"></i>
            </div>
            <button type="submit" class="a-btn a-btn--submit">Enviar pedido de reserva <i class="fa fa-chevron-right"></i></button>
        </div>

    </form>
</div>
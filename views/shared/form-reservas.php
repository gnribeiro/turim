<div class="a-reservar">
    <div class="a-reservar__header">
        RESEVAR
        <button class="a-btn a-btn--close-reservar"><i class="fa fa-times"></i></button>
    </div>
    <div class="a-reservar__content"   class="a-field-form">
        <form method="guet" action="https://www.secure-hotel-booking.com/TURIM-Hotels/24LT/search" target="_blank" class="a-field-form-reserva">
            <input type="hidden" id="language" name="language" value="en">
            <input type="hidden" name="guestCountSelector" value="ReadOnly">
            <input type="hidden" name="nights" value="" id="nights-reservar">
            <div class="a-field a-field--nopd m-b-15">
                <select name="selectedHotelId" id="selectedHotelId" class="a-field-select">
                  <option value="">All hotels</option>
                  <?php foreach ($hoteis as $key => $value): ?>
                        <option value="<?php echo $key ?>"> <?php echo $value ?></option>
                    <?php endforeach ?>
                </select>
            </div>

            <div class="a-clearfix m-b-15">
                <div class="a-col-5">
                    <label lass="a-field__label" for="arrivalDate">DE:</label>
                    <div class="a-input-text--date-reserva-content ">
                        <input class="a-input-text a-input-text--date-reserva" type="text" name="arrivalDate" placeholder="_/_/___" id="arrivalDate" value="" />
                        <i class="fa fa-calendar"></i>
                    </div>
                </div>
                 <div class="a-col-5  a-pull-right">
                    <label lass="a-field__label" for="checkoutDate">ATÉ:</label>
                    <div class="a-input-text--date-reserva-content">
                        <input class="a-input-text a-input-text--date-reserva" type="text" name="checkoutDate" placeholder="_/_/___" id="checkoutDate" value="" />
                        <i class="fa fa-calendar"></i>
                    </div>
                </div>
            </div>

             <div class="a-clearfix m-b-25">
                <div class="a-col-4">

                    <div class="a-select-limit-content">
                        <label class="a-field__label a-field__label--reserva" for="selectedAdultCount">ADULTOS</label>
                        <select name="selectedAdultCount" id="selectedAdultCount" class="a-field-select">
                            <option value="">  ___  </option>
                            <?php for($i=1 ; $i<=10 ; $i++): ?>
                            <option value="<?php echo $i ?>"><?php echo $i ?></option>
                            <?php endfor; ?>
                        </select>
                    </div>
                </div>
                 <div class="a-col-4">

                    <div class="a-select-limit-content m-l-10">
                        <label class="a-field__label a-field__label--reserva" for="selectedChildCount">CRIANÇAS</label>
                        <select name="selectedChildCount" id="selectedChildCount" class="a-field-select">
                            <option value="">  ___  </option>
                            <?php for($i=1 ; $i<=10 ; $i++): ?>
                            <option value="<?php echo $i ?>"><?php echo $i ?></option>
                            <?php endfor; ?>
                        </select>
                    </div>
                </div>
                <div class="a-col-4 ">
                    <div class="a-select-limit-content a-pull-right">
                        <label class="a-field__label a-field__label--reserva" for="selectedInfantCount">BEBÉS</label>

                        <select name="selectedInfantCount" id="selectedInfantCount" class="a-field-select">
                            <option value="">  ___  </option>
                            <?php for($i=1 ; $i<=10 ; $i++): ?>
                            <option value="<?php echo $i ?>"><?php echo $i ?></option>
                            <?php endfor; ?>
                        </select>
                    </div>
                </div>

            </div>
            <div class="a-field a-field--nopd">
                <input class="a-input-text a-input-text--light" type="text" name="rate" placeholder="Insira Código Promocional" id="rate" value="" />
            </div>

            <div class="m-t-25 a-clearfix">
                <button type="submit" class="a-btn a-btn--light a-pull-left">Disponibilidade <i class="fa fa-chevron-right"></i></button>
                <a href="https://www.secure-hotel-booking.com/turim-hotels/24WJ" target="_blank"class="a-btn a-btn--transparent a-pull-right">Corporate <i class="fa fa-chevron-right"></i></a>
            </div>
        </form>
    </div>
</div>
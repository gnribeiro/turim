<div class="a-reservar">
    <div class="a-reservar__header">
        <?php _e('RESERVAR' , 'turim')?>
        <button class="a-btn a-btn--close-reservar"><i class="fa fa-times"></i></button>
    </div>
    <div class="a-reservar__content"   class="a-field-form">
        <form method="guet" action="https://www.secure-hotel-booking.com/TURIM-Hotels/24LT/search" target="_blank" class="a-field-form-reserva">
            <input type="hidden" id="language" name="language" value="en">
            <input type="hidden" name="guestCountSelector" value="ReadOnly">
            <input type="hidden" name="nights" value="" id="nights-reservar">
            <div class="a-field a-field--nopd m-b-15">
                <select name="selectedHotelId" id="selectedHotelId" class="a-field-select">
                  <option value=""><?php _e("Todos os Hotéis", "turim")?></option>
                  <?php foreach ($hoteis as $key => $value): ?>
                        <option value="<?php echo $key ?>"> <?php echo $value ?></option>
                    <?php endforeach ?>
                </select>
            </div>

            <div class="a-clearfix m-b-15">
                <div class="a-col-5">
                    <label lass="a-field__label" for="arrivalDate"><?php _e('DE:' , 'turim')?></label>
                    <div class="a-input-text--date-reserva-content ">
                        <input class="a-input-text a-input-text--date-reserva" type="text" name="arrivalDate" placeholder="_/_/___" id="arrivalDate" value="" />
                        <i class="fa fa-calendar"></i>
                    </div>
                </div>
                 <div class="a-col-5  a-pull-right">
                    <label lass="a-field__label" for="checkoutDate"><?php _e('ATÉ:' , 'turim')?></label>
                    <div class="a-input-text--date-reserva-content">
                        <input class="a-input-text a-input-text--date-reserva" type="text" name="checkoutDate" placeholder="_/_/___" id="checkoutDate" value="" />
                        <i class="fa fa-calendar"></i>
                    </div>
                </div>
            </div>

             <div class="a-clearfix m-b-25">
                <div class="a-col-4">

                    <div class="a-select-limit-content">
                        <label class="a-field__label a-field__label--reserva" for="selectedAdultCount"><?php _e('ADULTOS' , 'turim')?></label>
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
                        <label class="a-field__label a-field__label--reserva" for="selectedChildCount"><?php _e('CRIANÇAS' , 'turim')?></label>
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
                        <label class="a-field__label a-field__label--reserva" for="selectedInfantCount"><?php _e('BEBÉS' , 'turim')?></label>

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
                <input class="a-input-text a-input-text--light" type="text" name="rate" placeholder="<?php _e('Insira Código Promocional' , 'turim')?>" id="rate" value="" />
            </div>

            <div class="m-t-25 a-clearfix">
                <button type="submit" class="a-btn a-btn--light a-pull-left"> <?php _e('Disponibilidade' , 'turim')?><i class="fa fa-chevron-right"></i></button>
                <a href="https://www.secure-hotel-booking.com/turim-hotels/24WJ" target="_blank"class="a-btn a-btn--transparent a-pull-right"><?php _e('Corporate' , 'turim')?><i class="fa fa-chevron-right"></i></a>
            </div>
        </form>
    </div>
</div>
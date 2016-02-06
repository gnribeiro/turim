<?php global $post ?>
<article class="a-container a-clearfix p-t-70 p-b-75">
    <div class="a-col-9 a-sm-col-8">
        <?php if(have_posts()): while(have_posts()): the_post(); ?>
            <header><h1><?php the_title() ?></h1></header>

            <div class="a-bo"><?php the_content() ?></div>
        <?php endwhile; endif; ?>

        <form action="" method="post" class="m-t-40 a-field-form">
            <?php $error   =  Helper::get_flashdata("error");?>
            <?php $sucesso =  Helper::get_flashdata("mensagem_sucesso");?>

            <?php if ($sucesso): ?>
                <div class="a-field p-b-15" >
                    <?php echo $sucesso; ?>
                </div>
            <?php endif ?>

            <div class="a-field">
                <label class="a-field__label"for="nome">NOME</label>
                <input class="a-input-text" type="text" name="nome" placeholder="Introduzir Nome Completo" id="nome" value="<?php Helper::input_value( "nome"  , $error)?>" />
                <div class="a-input-error">
                     <?php if($erro= Helper::get_flashdata("nome-error")): echo $erro; endif;?>
                </div>
            </div>

            <div class="a-field">
                <select name="type-company" id="" class="a-field-select">
                    <option value=""  class="a-field-option">Particular ou Empresa</option>
                    <option value="Particular" <?php Helper::check_select('type-company', 'Particular', $error ); ?> class="a-field-option">Particular</option>
                    <option value="Empresa"    <?php Helper::check_select('type-company', 'Empresa' , $error); ?>class="a-field-option">Empresa</option>
                </select>
                 <div class="a-input-error">
                    <?php if($erro= Helper::get_flashdata("type-company-error")): echo $erro; endif;?>
                </div>
            </div>

            <div class="a-field">
                <select name="hotel" id="" class="a-field-select">
                    <option value="" class="a-field-option">HOTEL</option>
                    <?php foreach ($hoteis as $key => $value): ?>
                        <option value="<?php echo $key ?>"  <?php Helper::check_select('hotel',  $key , $error); ?>> <?php echo $value ?></option>
                    <?php endforeach ?>
                </select>
                <div class="a-input-error">
                     <?php if($erro= Helper::get_flashdata("hotel-error")): echo $erro; endif;?>
                </div>
            </div>

            <div class="a-field">
                <label class="a-field__label" for="email">EMAIL</label>
                <input type="text" class="a-input-email" name="email" placeholder="Introduzir email" id="email" value="<?php Helper::input_value( "email", $error)?>"/>
                <div class="a-input-error">
                    <?php if($erro= Helper::get_flashdata("email-error")): echo $erro; endif;?>
                </div>
            </div>

             <div class="a-field">
                <select name="subject" id="" class="a-field-select">
                    <option value="" class="a-field-option">ASSUNTO</option>
                    <option value="reservar" class="a-field-option">reservar</option>

                </select>
                <div class="a-input-error">
                    <?php if($erro= Helper::get_flashdata("subject-error")): echo $erro; endif;?>
                </div>
            </div>

            <div class="a-field">
                <label class="a-field__label" for="reserva">QUARTO/Nº DE RESERVA</label>
                <input class="a-input-text" type="text" name="reserva" placeholder="Introduzir Número de Reserva ou Quarto" id="reserva" value="<?php Helper::input_value( "reserva"  , $error)?>"/>
                <div class="a-input-error">
                   <?php if($erro= Helper::get_flashdata("reserva-error")): echo $erro; endif;?>
                </div>
            </div>

            <div class="a-field">
                <label class="a-field__label" for="mensage">MENSAGEM</label>
                <textarea class="a-input-textarea" name="mensage" id="mensage" cols="30" rows="10"><?php Helper::input_value( "mensage",$error)?></textarea>
                <div class="a-input-error">
                <?php if($erro= Helper::get_flashdata("mensage-error")): echo $erro; endif;?>
                </div>
            </div>

            <div class="a-field">
                <div class="a-clearfix">
                    <div class="a-pull-left">
                        <input type="text"  class="a-input-text a-input-text--captcha" name="captcha" placeholder="Inserir código de segurança" id="captcha" value=""/>
                    </div>
                    <div class="a-pull-left">
                        <div class="a-dark a-captcha__text">
                            <img src="<?php echo $captcha ?>" alt="">
                        </div>
                    </div>
                </div>
                <div class="a-input-error">
                    <?php if($erro= Helper::get_flashdata("captcha-error")): echo $erro; endif;?>
                </div>
            </div>
            <div class="pull-right">
                <button type="submit" class="a-btn a-btn--submit">Enviar <i class="fa fa-chevron-right"></i></button>
            </div>
            <?php wp_nonce_field( 'contact-form' ); ?>
            <input type="hidden" name="action" value="contacts" />
            <?php //Helper::unset_all_flashdata(); ?>
        </form>
    </div>

    <aside class="a-col-3 a-sm-col-4">
        <div class="a-aside">
        <div class="a-aside__header">
            <h5>NÚMERO ÚNICO</h5>
            <div class="m-b-15">INFORMAÇÕES E RESERVAS</div>
            <h3>210 330 800</h3>
        </div>
        <?php if(isset($contacts)): ?>
        <div class="a-aside__content">
            <?php echo $contacts ?>
        </div>
        <?php endif; ?>
        </div>
    </aside>
</article>
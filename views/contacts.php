<?php global $post ?>
<article class="a-container a-clearfix">
    <div class="a-col-9">
        <?php if(have_posts()): while(have_posts()): the_post(); ?>
            <header><h1><?php the_title() ?></h1></header>

            <div class="a-bo"><?php the_content() ?></div>
        <?php endwhile; endif; ?>

        <form action="" method="post">
            <?php $error =  Helper::get_flashdata("error"); $error_nome =  Helper::get_flashdata("nome-error");?>
            <div class="a-field">
                <label class="a-field__label"for="nome">NOME</label>
                <input class="a-input-text" type="text" name="nome" placeholder="Introduzir Nome Completo" id="nome" value="<?php Helper::input_value( "nome"  , $error)?>" />
                <div class="a-error">
                <?php if($error_nome): echo $error_nome; endif;?>
                </div>
            </div>
            
            <div class="a-field">
                <select name="type-company" id="" class="a-field-select">
                    <option value="" class="a-field-option">PARTICULAR OU EMPRESA</option>
                </select>
            </div>

            <div class="a-field">
                <select name="type-company" id="" class="a-field-select">
                    <option value="" class="a-field-option">HOTEL</option>
                </select>
            </div>

            <div class="a-field">
                <label for="email">EMAIL</label>
                <?php $error_email =  Helper::get_flashdata("email-error");?>
                <input type="text" name="email" placeholder="Introduzir email" id="email" value="<?php Helper::input_value( "email"  , $error)?>"/>
                <div class="a-error">
                    <?php if($error_email): echo $error_email; endif;?>
                </div>
            </div>

             <div class="a-field">
                <select name="type-company" id="" class="a-field-select">
                    <option value="" class="a-field-option">ASSUNTO</option>
                </select>
            </div>

            <div class="a-field">
                <label for="numero-reserva">QUARTO/Nº DE RESERVA</label>
                <?php $error_phone =  Helper::get_flashdata("phone-error");?>
                <input class="a-input-text" type="text" name="numero-reserva" placeholder="Introduzir Número de Reserva ou Quarto" id="numero-reserva" value="<?php Helper::input_value( "phone"  , $error)?>"/>
                <div class="a-error">
                    <?php if($error_phone): echo $error_phone; endif;?>
                </div>
            </div>
            
            <div class="a-field">
                <label for="mensage">MENSAGEM</label>
                <?php $error_mensage =  Helper::get_flashdata("mensage-error");?>
                <textarea class="a-input-textarea" name="mensage" id="mensage" cols="30" rows="10"><?php Helper::input_value( "mensage"  , $error)?></textarea>
                <div class="a-error">
                    <?php if($error_mensage): echo $error_mensage; endif;?>
                </div>
            </div>

            <div class="a-field">
                <label for="email">EMAIL</label>
                <?php $error_email =  Helper::get_flashdata("email-error");?>
                <div class="a-clearfix">
                    <div class="a-col-8">
                        <input type="text" name="email" placeholder="Introduzir email" id="email" value="<?php Helper::input_value( "email"  , $error)?>"/>
                    </div>
                    <div class="a-col-4">
                        <div class="a-dark">1122</div>
                    </div>
                </div>
                <div class="a-error">
                    <?php if($error_email): echo $error_email; endif;?>
                </div>
            </div>

            <input type="submit" name="send-contact" value="Send" />
            <?php wp_nonce_field( 'contact-form' ); ?>
            <input type="hidden" name="action" value="contacts" />
            <?php //Helper::unset_all_flashdata(); ?>
        </form>
    </div>
    <aside class="a-col-3">
        <div class="a-aside-header">
            <h4>
                
            </h4>
        </div>
        <?php if(isset($contacts)): ?>
        <div class="a-aside-content">
            <?php echo $contacts ?>
        </div>
        <?php endif; ?>
    </aside>
</article>
<?php
require_once LIBS . 'validFluent.php';
require_once LIBS . 'Gwp_Mailman.php';

Class Gwp_Form_Handler {

    public static function init() {
        add_action( 'wp_loaded', array( __CLASS__, 'contacts_action' ), 20 );

    }

    public static function  contacts_action(){
        if ( 'POST' !== strtoupper( $_SERVER[ 'REQUEST_METHOD' ] ) ) {
            return;
        }


        if ( empty( $_POST[ 'action' ] ) || 'contacts' !== $_POST[ 'action' ] || empty( $_POST['_wpnonce'] ) || ! wp_verify_nonce( $_POST['_wpnonce'], 'contact-form' ) ) {
            return;
        }

        if (isset($_SESSION['GWP_captcha']) && !empty($_SESSION['GWP_captcha'])) {
            //pr($_SESSION['GWP_captcha']["code"]);
        }

        $error         = array();
        $captcha_error = false;

        $validation = Validation::factory($_POST);
        $validation->rule('nome',         'not_empty');
        $validation->rule('email',        'not_empty');
        $validation->rule('email',        'Valid::email');
        $validation->rule('mensage',      'not_empty');
        $validation->rule('subject',      'not_empty');
        $validation->rule('type-company', 'not_empty');
        $validation->rule('captcha',      'not_empty');

        if(!$validation->check()){
            Helper::set_flashdata("data",  $_POST);

            foreach ($validation->errors('forms/contactos') as $key => $value) {
                $error[] = $key;
                Helper::set_flashdata("{$key}-error",  $value);
            }

              Helper::set_flashdata("error",   true);
        }


        if(!in_array('captcha', $error) && isset($_SESSION['GWP_captcha'])
         && !empty($_SESSION['GWP_captcha']))
        {
            if($_SESSION['GWP_captcha']["code"] !== $_POST['captcha']){
                $error[] = "codigo errado";
               Helper::set_flashdata(
                "captcha-error", Helper::message("forms/contactos", "captcha.code")
               );

               Helper::set_flashdata("error",   true);
            }
        }

        if(!count($error)){

            $mail    = new Gwp_Mailman();
            $emailTo = get_option('emails_contactos');
            //$attachments= array(ABSPATH . 'wp-content/uploads/2016/01/slider.jpg');
            //$mail->set_attachments($attachments);

            $dados= array(
                'nome'         => $_POST['nome'],
                'email'        => $_POST['email'],
                'mensage'      => $_POST['mensage'],
                'subject'      => $_POST['subject'],
                'reserva'      => $_POST['reserva'],
                'typecompany'  => $_POST['type-company'],
                'hotel'        => $_POST['hotel']
            );

            $mail->set_subject('Mensagem do Formulario');
            $mail->set_template('contactos.php');
            $mail->set_from("turim-hotels <dirgeral@turimhoteis.com>");
            $mail->set_to($emailTo);
            $mail->set_vars($dados);
            $send = $mail->send();

            $message = ($send) ? Helper::message("forms/contactos", "sucesso.msg")
                : Helper::message("forms/contactos", "sucesso.error") ;

            Helper::set_flashdata("mensagem_sucesso", $message);
        }

    }
}


?>
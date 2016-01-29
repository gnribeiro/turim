<?php
require_once LIBS . 'validFluent.php';

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
            pr($_SESSION['GWP_captcha']["code"]);
        }

        $error         = array();
        $captcha_error = false;

        $validation = Validation::factory($_POST);
        $validation->rule('nome',         'not_empty');
        $validation->rule('phone',        'not_empty');
        $validation->rule('email',        'not_empty');
        $validation->rule('email',        'Valid::email');
        $validation->rule('mensage',      'not_empty');
        $validation->rule('subject',      'not_empty');
        $validation->rule('reserva',      'not_empty');
        $validation->rule('type-company', 'not_empty');
        $validation->rule('hotel'       , 'not_empty');
        $validation->rule('captcha',      'not_empty');

        if(!$validation->check()){
            Helper::set_flashdata("data",  $_POST);

            foreach ($validation->errors('forms/contactos') as $key => $value) {
                $error[] = $key;
                Helper::set_flashdata("{$key}-error",  $value);
            }
        }


        if(!in_array('captcha', $error) && isset($_SESSION['GWP_captcha'])
         && !empty($_SESSION['GWP_captcha']))
        {
            if($_SESSION['GWP_captcha']["code"] !== $_POST['captcha']){
               Helper::set_flashdata(
                "captcha-error", Helper::message("forms/contactos", "captcha.code")
               );
            }
        }

        if(!count($error)){
            Helper::set_flashdata(
                "sucesso", Helper::message("forms/contactos", "sucesso.msg")
            );
        }
    }
}


?>
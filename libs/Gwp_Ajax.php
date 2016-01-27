<?php

require_once LIBS . 'Gwp_Mailman.php';
require_once LIBS . 'UTF8.php';
require_once LIBS . 'Wparr.php';
require_once LIBS . 'Valid.php';
require_once LIBS . 'Validation.php';

Class Gwp_Ajax{

    function __construct(){

      add_action( 'wp_ajax_recrutament',        array( $this, 'recrutament' ) );
      add_action( 'wp_ajax_nopriv_recrutament', array( $this, 'recrutament' ) );

      add_action( 'wp_ajax_info',        array( $this, 'info' ) );
      add_action( 'wp_ajax_nopriv_info', array( $this, 'info' ) );

      add_action( 'wp_ajax_adesao',        array( $this, 'adesao' ) );
      add_action( 'wp_ajax_nopriv_adesao', array( $this, 'adesao' ) );

      add_action( 'wp_ajax_reservas',        array( $this, 'reservas' ) );
      add_action( 'wp_ajax_nopriv_reservas', array( $this, 'reservas' ) );

    }


    public function recrutament(){

        $errors      = array();
        $allowedExts = array("pdf", "doc", "docx");
        $mimetypes   = array("application/msword",  "text/pdf");
        $filename    = $_FILES['cvform']["name"];
        $filename    = explode(".", $filename);
        $extension   = end($filename);

        if(!in_array($extension, $allowedExts) &&
           !in_array($_FILES["cvform"]["type"], $mimetypes))
        {
            $errors['cvform'] = Helper::message("forms/recrutamento", "cvform.mimetypes");
        }

        $data = array();
        parse_str($_POST['dados'], $data);

        $validation = Validation::factory($data );
        $validation->rule('nome',        'not_empty');
        $validation->rule('phone',       'not_empty');
        $validation->rule('phone',       'numeric');
        $validation->rule('email',       'not_empty');
        $validation->rule('email',       'Valid::email');
        $validation->rule('localidade',  'not_empty');
        $validation->rule('age',         'not_empty');
        $validation->rule('age',         'numeric');
        $validation->rule('obs',         'not_empty');
        $validation->rule('subject',     'not_empty');

        $validation->check();

        $errors = array_merge($errors , $validation->errors('forms/recrutamento'));

        if(count($errors)){
            echo   json_encode( $errors);
        }
        else{
            $uploadfile = wp_handle_upload( $_FILES["cvform"], array( 'test_form' => false ) );

            if ( $uploadfile && !isset( $uploadfile['error'] ) ) {
                $sucess = array(
                    'sucesso' => Helper::message("forms/recrutamento", "sucesso.msg")
                );
                echo json_encode($sucess) ;
            }
            else{
                $errors['cvform'] = Helper::message("forms/recrutamento", "cvform.mainerror");
                echo   json_encode( $errors);
            }
        }

        die();
    }

    public function info(){
        $errors  = array();
        $data    = array();
        parse_str($_POST['dados'], $data);

        $validation = Validation::factory($data );
        $validation->rule('nome',        'not_empty');
        $validation->rule('company',     'not_empty');
        $validation->rule('address',     'not_empty');
        $validation->rule('cp7',         'not_empty');
        $validation->rule('email',       'not_empty');
        $validation->rule('email',       'Valid::email');
        $validation->rule('localidade',  'not_empty');
        $validation->rule('obs',         'not_empty');
        $validation->check();

        $errors = $validation->errors('forms/info');

        if(count($errors)){
            echo   json_encode( $errors);
        }
        else{
            $sucess = array(
                'sucesso' => Helper::message("forms/info", "sucesso.msg")
            );
            echo json_encode($sucess) ;
        }

        die();
    }


    public function adesao(){
        $errors  = array();
        $data    = array();
        parse_str($_POST['dados'], $data);

        $validation = Validation::factory($data );
        $validation->rule('nome',        'not_empty');
        $validation->rule('company',     'not_empty');
        $validation->rule('address',     'not_empty');
        $validation->rule('nif',         'not_empty');
        $validation->rule('nif',         'numeric');
        $validation->rule('cp7',         'not_empty');
        $validation->rule('email',       'not_empty');
        $validation->rule('email',       'Valid::email');
        $validation->rule('localidade',  'not_empty');
        $validation->check();

        $errors = $validation->errors('forms/adesao');

        if(count($errors)){
            echo   json_encode( $errors);
        }
        else{
            $sucess = array(
                'sucesso' => Helper::message("forms/adesao", "sucesso.msg")
            );
            echo json_encode($sucess) ;
        }

        die();
    }


    public function reservas(){
        $errors  = array();
        $data    = array();
        parse_str($_POST['dados'], $data);

        $validation = Validation::factory($data );
        $validation->rule('nome',        'not_empty');
        $validation->rule('phone',       'not_empty');
        $validation->rule('phone',       'numeric');
        $validation->rule('persons',     'not_empty');
        $validation->rule('persons',     'numeric');
        $validation->rule('cp7',         'not_empty');
        $validation->rule('date ',       'not_empty');
        $validation->rule('time',        'not_empty');
        $validation->check();

        $errors = $validation->errors('forms/reserva');

        if(count($errors)){
            echo   json_encode( $errors);
        }
        else{
            $sucess = array(
                'sucesso' => Helper::message("forms/reserva", "sucesso.msg")
            );
            echo json_encode($sucess);
        }

        die();
    }
}


?>
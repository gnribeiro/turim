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
        //$output = array();
        // echo    json_encode( $output);
        echo "lol2o";
        pr($_POST);
        pr($_FILES['cvform']);

        die();
    }


    public function adesao(){
        //$output = array();
        // echo    json_encode( $output);
        echo "lol2o";
        pr($_POST);
        pr($_FILES['cvform']);

        die();
    }
}


?>
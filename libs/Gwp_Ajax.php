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

      add_action( 'wp_ajax_newsletter',        array( $this, 'newsletter' ) );
      add_action( 'wp_ajax_nopriv_newsletter', array( $this, 'newsletter' ) );
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
                $file  = $uploadfile["file"];

                $mail    = new Gwp_Mailman();
                $emailTo = "gnoribeiro@gmail.com";
                $attachments= array($file);


                $dados= array(
                    'nome'         => $_POST['nome'],
                    'email'        => $_POST['email'],
                    'phone'        => $_POST['phone'],
                    'subject'      => $_POST['subject'],
                    'localidade'   => $_POST['localidade'],
                    'age'          => $_POST['age'],
                    'obs'          => $_POST['obs']
                );

                $mail->set_attachments($attachments);
                $mail->set_subject('Mensagem do Formulario de Recrutamento');
                $mail->set_template('recrutamento.php');
                $mail->set_from("geral@turim-hotels.com");
                $mail->set_to($emailTo);
                $mail->set_vars($dados);
                $send = $mail->send();

                $message = ($send) ? Helper::message("forms/recrutamento", "sucesso.msg")
                : Helper::message("forms/recrutamento", "sucesso.error");

                $sucess = array('sucesso' =>$message);

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
            $mail    = new Gwp_Mailman();
            $emailTo = "gnoribeiro@gmail.com";
            $dados= array(
                'nome'         => $_POST['nome'],
                'email'        => $_POST['email'],
                'company'      => $_POST['company'],
                'cp7'          => $_POST['cp7'],
                'address'      => $_POST['address'],
                'localidade'   => $_POST['localidade'],
                'obs'          => $_POST['obs']
            );

            $mail->set_subject('Mensagem do Formulario de Informação');
            $mail->set_template('info.php');
            $mail->set_from("geral@turim-hotels.com");
            $mail->set_to($emailTo);
            $mail->set_vars($dados);
            $send = $mail->send();

            $message = ($send) ? Helper::message("forms/info", "sucesso.msg")
            : Helper::message("forms/info", "sucesso.error");

            $sucess = array('sucesso' =>$message);
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
            $mail    = new Gwp_Mailman();
            $emailTo = "gnoribeiro@gmail.com";
            $dados= array(
                'nome'         => $_POST['nome'],
                'email'        => $_POST['email'],
                'company'      => $_POST['company'],
                'cp7'          => $_POST['cp7'],
                'address'      => $_POST['address'],
                'localidade'   => $_POST['localidade'],
                'nif'          => $_POST['nif']
            );

            $mail->set_subject('Mensagem do Formulario de Adesão');
            $mail->set_template('adesao.php');
            $mail->set_from("geral@turim-hotels.com");
            $mail->set_to($emailTo);
            $mail->set_vars($dados);
            $send = $mail->send();

            $message = ($send) ? Helper::message("forms/adesao", "sucesso.msg")
            : Helper::message("forms/adesao", "sucesso.error");

            $sucess = array('sucesso' =>$message);
            echo json_encode($sucess) ;
        }

        die();
    }


    public function newsletter(){
        $errors  = array();
        $data    = array();
        parse_str($_POST['dados'], $data);

        $validation = Validation::factory($data );
        $validation->rule('news-email',       'not_empty');
        $validation->rule('news-email',       'Valid::email');
        $validation->check();

        $errors = $validation->errors('forms/newsletter');

        if(count($errors)){
            echo   json_encode( $errors);
        }
        else{
            $sucess = array(
                'sucesso-news' => Helper::message("forms/newsletter", "sucesso-news.msg")
            );
            echo json_encode($sucess);
        }

        die();
    }


     public function reservas(){
        $errors  = array();
        $data    = array();
        parse_str($_POST['dados'], $data);

        $validation = Validation::factory($data );
        $validation->rule('nome',         'not_empty');
        $validation->rule('phone',        'not_empty');
        $validation->rule('phone',        'numeric');
        $validation->rule('persons',      'not_empty');
        $validation->rule('persons',      'numeric');
        $validation->rule('date-reserve', 'not_empty');
        $validation->rule('time',         'not_empty');
        $validation->check();

        $errors = $validation->errors('forms/reservas');

        if(count($errors)){
            echo   json_encode( $errors);
        }
        else{
            $mail    = new Gwp_Mailman();
            $emailTo = "gnoribeiro@gmail.com";
            $dados   = array(
                'nome'         => $_POST['nome'],
                'email'        => $_POST['email'],
                'persons'      => $_POST['persons'],
                'date'         => $_POST['date-reserve'],
                'time'         => $_POST['time'],
                'restaurent'   => $_POST['restaurent'],
            );

            $mail->set_subject('Mensagem do Formulario de Adesão');
            $mail->set_template('reservas.php');
            $mail->set_from("geral@turim-hotels.com");
            $mail->set_to($emailTo);
            $mail->set_vars($dados);
            $send = $mail->send();

            $message = ($send) ? Helper::message("forms/reservas", "sucesso.msg")
            : Helper::message("forms/reservas", "sucesso.error");

            $sucess = array('sucesso' =>$message);
            $sucess = array(
                'sucesso' => Helper::message("forms/reservas", "sucesso.msg")
            );
            echo json_encode($sucess);
        }

        die();
    }
}

?>
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

      add_action( 'wp_ajax_adesao_ask',        array( $this, 'adesao_ask' ) );
      add_action( 'wp_ajax_nopriv_adesao_ask', array( $this, 'adesao_ask' ) );

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

                $mail        = new Gwp_Mailman();
                $emailTo     = get_option( 'emails_recrutamento' );
                $attachments = array($file);


                $dados= array(
                    'nome'         => $data['nome'],
                    'email'        => $data['email'],
                    'phone'        => $data['phone'],
                    'subject'      => $data['subject'],
                    'localidade'   => $data['localidade'],
                    'age'          => $data['age'],
                    'obs'          => $data['obs']
                );

                $mail->set_attachments($attachments);
                $mail->set_subject('Mensagem do Formulario de Recrutamento');
                $mail->set_template('recrutamento.php');
                $mail->set_from("turim-hotels <dirgeral@turimhoteis.com>");
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

    public function adesao_ask(){
        $errors  = array();
        $data    = array();
        parse_str($_POST['dados'], $data);

        $validation = Validation::factory($data );
        $validation->rule('nome',        'not_empty');
        $validation->rule('address',     'not_empty');
        $validation->rule('cp7',         'not_empty');
        $validation->rule('phone',       'not_empty');
        $validation->rule('phone',       'numeric');
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
            $emailTo = get_option('emails_adesao');
            $dados   = array(
                'nome'         => $data['nome'],
                'email'        => $data['email'],
                'cp7'          => $data['cp7'],
                'phone'        => $data['phone'],
                'address'      => $data['address'],
                'localidade'   => $data['localidade'],
            );

            $mail->set_subject('Mensagem do Formulario de Adesão');
            $mail->set_template('adesao_ask.php');
            $mail->set_from("turim-hotels <dirgeral@turimhoteis.com>");
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

    public function info(){
        $errors  = array();
        $data    = array();
        parse_str($_POST['dados'], $data);

        $validation = Validation::factory($data );
        $validation->rule('nome',        'not_empty');
        $validation->rule('company',     'not_empty');
        $validation->rule('email',       'not_empty');
        $validation->rule('email',       'Valid::email');
        $validation->rule('obs',         'not_empty');
        $validation->check();

        $errors = $validation->errors('forms/info');

        if(count($errors)){
            echo   json_encode( $errors);
        }
        else{
            $mail    = new Gwp_Mailman();
            $emailTo = get_option( 'emails_info' );
            $dados   = array(
                'nome'         => $data['nome'],
                'email'        => $data['email'],
                'company'      => $data['company'],
                'obs'          => $data['obs']
            );

            $mail->set_subject('Mensagem do Formulario de Informação');
            $mail->set_template('info.php');
            $mail->set_from("turim-hotels <dirgeral@turimhoteis.com>");
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
        $validation->rule('phone',       'not_empty');
        $validation->rule('phone',       'numeric');
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
            $emailTo = get_option('emails_adesao');
            $dados   = array(
                'nome'         => $data['nome'],
                'email'        => $data['email'],
                'company'      => $data['company'],
                'cp7'          => $data['cp7'],
                'phone'        => $data['phone'],
                'address'      => $data['address'],
                'localidade'   => $data['localidade'],
                'nif'          => $data['nif']
            );

            $mail->set_subject('Mensagem do Formulario de Adesão');
            $mail->set_template('adesao.php');
            $mail->set_from("turim-hotels <dirgeral@turimhoteis.com>");
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

            $message = $this->subscription_knews($data['news-email']);
            $sucess  = array('sucesso-news' => $message);

            echo json_encode($sucess);
        }

        die();
    }

    private function get_unique_id($long=8) {
        return substr(md5(uniqid()), $long * -1);
    }

    private function subscription_knews( $email_news){
        global $wpdb;


        //die(var_dump($wpdb));
        $message            = __("Esse email já existe na base dados" , 'turim');
        $email              = $email_news;
        $knewsusers_table   = $wpdb->prefix . 'knewsusers';
        $knewsuserslists_tb = $wpdb->prefix . 'knewsuserslists';
        $email_exist        = $wpdb->get_row('SELECT * FROM  '.$knewsusers_table.' WHERE email = "'.$email.'";');

        if( empty($email_exist) ){
            $args    = array(
                      'lang'    => pll_current_language(),
                      'email'   => $email,
                      'state'   => '2',
                      'ip'      => '',
                      'confkey' => $this->get_unique_id(),
                      'joined'  => date("Y-m-d H:i:s")
            );

          $results = $wpdb->insert( $knewsusers_table , $args );

          if($results){
            $user_id = ($wpdb->insert_id !=0 ) ?$wpdb->insert_id : mysql_insert_id();

            $query   = "INSERT INTO " . $knewsuserslists_tb . " (id_user, id_list) VALUES (" . $user_id . ", 1);";
            $results = $wpdb->query( $query );

            $message = __("Subscrição efetuada com sucesso."  , 'turim');
          }
          else{
            $message = __("Ocorreu um erro. tente novamente." , 'turim');

          }
        }

        return $message;
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
            $emailTo =  get_option('emails_reservar');
            $dados   = array(
                'nome'         => $data['nome'],
                'persons'      => $data['persons'],
                'date'         => $data['date-reserve'],
                'time'         => $data['time'],
                'restaurent'   => $data['restaurent'],
            );

            $mail->set_subject('Mensagem do Formulario de Reservas');

            $mail->set_from("turim-hotels <dirgeral@turimhoteis.com>");
            $mail->set_to($emailTo);
            $mail->set_vars($dados);
             $mail->set_template('reservas.php');
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
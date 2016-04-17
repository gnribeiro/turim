<?php

return array(
    'nome' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'email' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
      'Valid::email' => __('Email inválido'),
    ),

     'phone' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
      'numeric' => __('Telemóvel inválido'),
    ),

    'mensage' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'subject' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),
    'reserva' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'hotel' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'captcha' => array(
      'not_empty' =>  __('Campo de preenchimento obrigatório', 'turim'),
      'code' =>  __('Código Errado', 'turim')
    ),

    'type-company' => array(
      'not_empty'  =>  __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'sucesso' => array(
      'msg'   => __('Dados enviados com sucesso, aguarde uma resposta', 'turim'),
      'error' => __('Não possivel enviar email tente mais tarde', 'turim'),

    ),


);
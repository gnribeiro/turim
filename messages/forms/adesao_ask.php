<?php

return array(
    'nome' => array(
      'not_empty' => __('Campo de preenchimento obrigatório' , 'turim'),
    ),

    'email' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
      'Valid::email' => __('Email inválido', 'turim')
    ),

    'company' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'phone' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
      'numeric' => __('Telemóvel inválido', 'turim'),
    ),

    'address' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'nif' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
      'numeric'   => __('Nif inválido', 'turim')
    ),

    'cp7' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'localidade' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'obs' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),


    'sucesso' => array(
      'msg' => __('Dados enviados com sucesso, aguarde uma resposta', 'turim'),
      'error' => __('Não possivel enviar email tente mais tarde', 'turim')
    ),


);
<?php

return array(
    'nome' => array(
      'not_empty' => 'Campo de preenchimento obrigatório',
    ),

    'email' => array(
      'not_empty'    => 'Campo de preenchimento obrigatório',
      'Valid::email' => 'Email inválido'
    ),

     'phone' => array(
      'not_empty'    => 'Campo de preenchimento obrigatório',
      'numeric' => 'Telemóvel inválido'
    ),

    'mensage' => array(
      'not_empty'    => 'Campo de preenchimento obrigatório',
    ),

    'subject' => array(
      'not_empty' => 'Campo de preenchimento obrigatório',
    ),
    'reserva' => array(
      'not_empty' => 'Campo de preenchimento obrigatório',
    ),

    'hotel' => array(
      'not_empty' => 'Campo de preenchimento obrigatório',
    ),

    'captcha' => array(
      'not_empty' =>  'Campo de preenchimento obrigatório',
      'code' =>  'Código Errado',
    ),

    'type-company' => array(
      'not_empty'  =>  'Campo de preenchimento obrigatório',
    ),

    'sucesso' => array(
      'msg'   => 'Dados enviados com sucesso, aguarde uma resposta',
      'error' => 'Não possivel enviar email tente mais tarde',

    ),


);
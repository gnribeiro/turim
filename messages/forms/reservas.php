<?php

return array(
    'nome' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'persons' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
      'numeric'     => __('Numero inválido', 'turim'),
    ),

    'phone' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
      'numeric'     => __('Numero inválido', 'turim'),
    ),

    'date-reserve' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'time' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'sucesso' => array(
      'msg' => __('Dados enviados com sucesso, aguarde uma resposta', 'turim'),
      'error' => __('Não possivel enviar email tente mais tarde', 'turim')
    ),


);
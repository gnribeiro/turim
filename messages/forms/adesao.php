<?php

return array(
    'nome' => array(
      'not_empty' => 'Campo de preenchimento obrigatório',
    ),

    'email' => array(
      'not_empty'    => 'Campo de preenchimento obrigatório',
      'Valid::email' => 'Email inválido'
    ),

    'company' => array(
      'not_empty'    => 'Campo de preenchimento obrigatório',
    ),

    'address' => array(
      'not_empty'    => 'Campo de preenchimento obrigatório',
    ),

    'nif' => array(
      'not_empty' => 'Campo de preenchimento obrigatório',
      'numeric'   => 'Nif inválido'
    ),

    'cp7' => array(
      'not_empty'    => 'Campo de preenchimento obrigatório',
    ),

    'localidade' => array(
      'not_empty' => 'Campo de preenchimento obrigatório',
    ),

    'obs' => array(
      'not_empty' => 'Campo de preenchimento obrigatório',
    ),


    'sucesso' => array(
      'msg' => 'Dados enviados com sucesso, aguarde uma resposta',
    ),


);
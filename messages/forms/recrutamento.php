<?php

return array(
    'nome' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'email' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
      'Valid::email' => __('Email inválido', 'turim'),
    ),

     'phone' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
      'numeric' => __('Telemóvel inválido', 'turim'),
    ),

    'age' => array(
      'not_empty'    => __('Campo de preenchimento obrigatório', 'turim'),
      'numeric' => __('Idade inválida', 'turim'),
    ),

    'localidade' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),
    'obs' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),
    'subject' => array(
      'not_empty' => __('Campo de preenchimento obrigatório', 'turim'),
    ),

    'cvform' => array(
      'mimetypes' => __('Ficheiro inválido, só permitido pdf`s ou ficheiros word', 'turim'),
      'mainerror' => __('Não possivel fazer upload do ficheiro tente outra vez ou contacte-nos', 'turim'),
    ),

    'sucesso' => array(
      'msg'   => __('Dados enviados com sucesso, aguarde uma resposta', 'turim'),
      'error' => __('Não possivel enviar email tente mais tarde', 'turim')
    )
);
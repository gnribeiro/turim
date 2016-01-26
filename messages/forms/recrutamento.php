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

    'age' => array(
      'not_empty'    => 'Campo de preenchimento obrigatório',
      'numeric' => 'Idade inválida'
    ),

    'localidade' => array(
      'not_empty' => 'Campo de preenchimento obrigatório',
    ),

    'cvform' => array(
      'mimetypes' => 'Ficheiro inválido, só permitido pdf`s ou ficheiros word',
      'mainerror' => 'Não possivel fazer upload do ficheiro tente outra vez ou contacte-nos',
    ),

    'sucesso' => array(
      'msg' => 'Dados enviados com sucesso, aguarde uma resposta',
    ),


);
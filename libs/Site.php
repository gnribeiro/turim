<?php

    class Site extends Base
    {
        public function __construct()
        {
            parent::__construct();



            $this->data_header['hoteis']     = $this->hoteis_select();

        }

        public function index()
        {

            $content = $this->view->render('index');
            $this->content($content);
        }

        public function contact()
        {

            $captcha = new Gwp_Captcha();
            $captcha->create();

            $image = $_SESSION['GWP_captcha']['path'];
            $this->view->set('hoteis',   $this->data_header['hoteis'] );
            $this->view->set('banner',   $this->get_banner());
            $this->view->set('contacts', $this->list_contacts());
            $this->view->set('captcha',  $this->getDataURI($image, 'image/png'));
            $content = $this->view->render('contacts');
            $this->content($content);

            unlink($image);

        }

        public function getDataURI($image, $mime = '') {
            return 'data: '.(function_exists('mime_content_type')
                ? mime_content_type($image)
                : $mime).';base64,'.base64_encode(file_get_contents($image));
        }


        public function collum2()
        {
            $modal = array(
                'content' => '#adesao_ask',
                'form'    =>  true
            );

            $ajax  = array('action'  => 'adesao_ask');

            $this->view->set('modal',  Helper::setJson($modal));
            $this->view->set('ajax' ,  Helper::setJson($ajax));
            $this->view->set('modal',  Helper::setJson($modal));
            $this->view->set('banner', $this->get_banner());
            $content = $this->view->render('collum2');
            $this->content($content);
        }

        public function events()
        {

            $this->view->set('banner', $this->get_banner());
            $content = $this->view->render('events');
            $this->content($content);
        }

        public function page()
        {

            $form = get_field('form_sidebar');

            $this->view->set('banner', $this->get_banner());

            if($form !=='none')
                $this->view->set('form', $this->get_form());

            $view =($form !=='none') ? 'page' : 'page-noform';

            $content = $this->view->render($view);

            $this->content($content);


        }

        public function restaurants()
        {
            $tabs = array(
                __('A nossa cozinha' , "turim") => 'tabs/cozinha',
                __('O nosso Chef', "turim")     => 'tabs/chef',
                __('Ementa', "turim")           => 'tabs/ementa',
                __('Galeria' , "turim")         => 'tabs/galeria'
            );

            if((is_single("lisbon") || is_single('lisboa')))
                array_splice($tabs,1,1);

            $tabs_json  = array(
                'btns'    => '.a-tabs__link',
                'content' => '.a-tabs__content'
            );

            $modal = array(
                'content' => '#reservation',
                'form'    =>  true
            );

            $ajax  = array(
                'action' => 'reservas'
            );

            $this->view->set('ajax' ,      Helper::setJson($ajax));
            $this->view->set('modal',      Helper::setJson($modal));
            $this->view->set('tabs_json',  Helper::setJson($tabs_json));
            $this->view->set('banner',     $this->get_banner());
            $this->view->set('highlights', $this->highlights());
            $this->view->set('tabs'      , $this->get_tabs($tabs , 'imgens_galeria_tabs_rest', 'imgen_galeria_tabs_rest'));
            $content = $this->view->render('restaurants/index');
            $this->content($content);
        }

        public function hoteis()
        {
            global $post;

            $this->view->set('banner', $this->get_banner());

            $services = array(
                'accessibility_rest'   => __('Facilidades <br> para Deficientes' , 'turim'),
                'meeting_room_rest'    => __('Salas de <br> Reunião', 'turim'),
                'vip_rest'             => __('Quarto <br> Executivo', 'turim'),
                'baby_rest'            => __('Berço e Facilidades <br> para Bebés', 'turim'),
                'wireless_rest'        => __('Wireless', 'turim'),
                'snake_bar_rest'       => __('Cafetaria', 'turim'),
                'res_air_conditioned'  => __('Ar <br> Condicionado', 'turim'),
                'rest_read_room'       => __('Sala de <br> Leitura', 'turim'),
                'restpark_parking'     => __('Parque de <br> Estacionamento', 'turim'),
                'rest_multimedia_room' => __('Sala <br> Multimédia', 'turim'),
                'rest_restaurant'      => __('Restaurante', 'turim'),
                'bar_rest'             => __('Bar', 'turim'),
                'pool_rest'            => __('Piscina', 'turim'),
                'tenis_res'            => __('Campo de ténis', 'turim'),
                'golf_rest'            => __('Campo de golf', 'turim'),
                'infantil_rest'        => __('Parque infantil', 'turim')
            );

            $url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

            if (strpos($url,'-2/') !== false) {
                $tabs = array(
                    'History'           => 'tabs/history',
                    'Gallery'           => 'tabs/galeria',
                    'Events & Meetings' => 'tabs/events'
                );
            }
            else {
                $tabs = array(
                    'historia'           => 'tabs/history',
                    'galeria de Imagens' => 'tabs/galeria',
                    'reuniões & eventos' => 'tabs/events'
                );
            }

            $tabs_json  = array(
                'btns'    => '.a-tabs__link',
                'content' => '.a-tabs__content'
            );

            $this->view->set('tabs_json',  Helper::setJson($tabs_json));
            $this->view->set('highlights', $this->highlights());
            $this->view->set('services'  , $services);
            $this->view->set('tabs'      , $this->get_tabs($tabs , 'imagens_tab_galeria_hotel' , 'imagem_tab_galeria_hotel'));
            $content = $this->view->render('hoteis/index');
            $this->content($content);
        }

        public function homepage()
        {
            // if(isset($_GET['delete_cache_instagram_turim'])){
            //     delete_transient('instagram_homepage');
            // }

            if ( false === ( $instagram = get_transient( 'instagram_homepage' ) ) ) {
                    $instagram = $this->get_instagram();

                    set_transient( 'instagram_homepage', $instagram, 3 * HOUR_IN_SECONDS );
            }

            $this->view->set('instagram' , $instagram );
            $this->view->set('banner'    , $this->get_banner());
            $this->view->set('destaques' , $this->destaques_home());
            $this->view->set('intros'    , $this->get_homeintros());

            $content = $this->view->render('home/index');
            $this->content($content);
        }


        public function get_partial($partial , $data= array())
        {
            foreach ($data as $key =>  $value) {
               $this->view->set($key , $value);
            }

            return $this->view->render($partial);
        }


        protected function get_instagram(){
            $token     = get_option('instagram_token');
            $userid    = get_option('instagram_user_id');
            $count     = 4;
            $api       = "https://api.instagram.com/v1/users/%s/media/recent/?access_token=%s&count=%s";
            $url       = sprintf( $api, $userid, $token, $count);
            $instagram = array();
            $data      = $this->fetchData($url);

            if(!$data ){
                $data  = json_decode(file_get_contents($url));
            }

            $data = json_decode($data);



            if(isset($data->data) && is_array($data->data)){

                foreach ($data->data as $k => $value) {
                    $instagram[$k]['link']  = $value->link ;
                    $instagram[$k]['date']  = date("d/m/Y" , $value->created_time );
                    $instagram[$k]['image'] = $value->images->low_resolution->url ;

                }
            }

            return $instagram;
        }

        protected function fetchData($url){


            $c = curl_init();
            curl_setopt($c, CURLOPT_URL, $url);
            curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($c, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($c, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; rv:33.0) Gecko/20100101 Firefox/33.0");
            curl_setopt($c, CURLOPT_MAXREDIRS, 10);
            curl_setopt($c, CURLOPT_CONNECTTIMEOUT, 9);
            curl_setopt($c, CURLOPT_CONNECTTIMEOUT, 9);
            curl_setopt($c, CURLOPT_REFERER, $url);
            curl_setopt($c, CURLOPT_TIMEOUT, 60);
            curl_setopt($c, CURLOPT_AUTOREFERER, true);
            curl_setopt($c, CURLOPT_ENCODING, 'gzip,deflate');
            $result = curl_exec($c);
            $status = curl_getinfo($c);
            curl_close($c);


            return $result;
        }


        protected function destaques_home()
        {
            $destaques = array();
            $query     = new WP_Query( array(
                'post_type'      => 'destaques-home' ,
                'posts_per_page' => -1
            ));

            if(count($query->posts)){
                foreach ($query->posts as $key => $value) {
                 $destaques[$key] = array(
                  'title'             => $value->post_title,
                  'content'           => $value->post_content,
                  'image'             => get_field('image_destaque_home', $value->ID),
                  'title-box'         => get_field('titulo_destaque_home', $value->ID),
                  'link'              => get_field('link_destaque_home', $value->ID),
                  'title_highlight'   => get_field('title_highlight_destaque_home', $value->ID),
                  'content_highlight' => get_field('content_highlight_destaque_home', $value->ID),
                  'image_highlight'   => get_field('image_highlight_destaque_home', $value->ID),
                  'color_highlight'   => get_field('color_destaque_home', $value->ID),
                 );
                }
            }
            return $destaques;

        }
        protected function get_menu(){
            $menu = $this->view->render('shared/menu');
            return $menu;
        }

        protected function get_tabs($tabs = array() , $cf , $cf_sub){
            $content = array( );

            foreach ($tabs  as $name => $view) {
                $content[$name]['name'] = $name;
                $this->view->set('cf', $cf);
                $this->view->set('cf_sub', $cf_sub);
                $content[$name]['view'] = $this->view->render($view);
            }

            return $content;
        }


        protected function highlights(){

            if($value =get_field('image_highligter_rest')){


               $height = $value['height'];
               $style  = ($value) ? "background-image:url({$value['url']}); height:{$height}px":'';

               $this->view->set('style' , $style);
               return $this->view->render('shared/highlights');
            }

        }

        protected function get_homeintros(){
            $intros = array();

            if(get_field('home-intro')){
                foreach (get_field('home-intro') as  $values) {
                    foreach ($values as $key =>  $value) {
                        if($key === 'image' ){
                            $url    = $value['url'];
                            $height = $value['height'];
                            $style  = ($value) ? "style='background-image:url({$url}); height:{$height}px'":'';
                            $this->view->set('style' , $style);
                        }
                        elseif($key === 'link_type'){
                            $class  = (!empty($value)) ? "class='a-btn a-btn--{$value}'":'class="a-btn a-btn--transparent';
                            $this->view->set('class' , $class);
                        }
                        else{
                            if(!empty($value)) $this->view->set("intro_{$key}" , $value);
                        }
                    }
                    $intros[] = $this->view->render('home/intro');
                }
            }

            return $intros;
        }


        protected function get_weather(){
            $feed  = "http://weather.yahooapis.com/forecastrss?p=POXX0039&u=c";
            $temps = [];
            try {
                $xml_contemt   = file_get_contents($feed);

                $xml   =  new SimpleXMLElement();
                $temps = array();

                if ( $xml !== false ) {
                    $namespaces = $xml->getNamespaces(true);
                    $geo = $xml->channel->item->children($namespaces['yweather']);

                    if(is_object($geo[1])){
                        $attr = $geo[1]->attributes();

                        if(is_object($attr->low) && is_object($attr->high)){
                            $temps['low']  = (string) $attr->low;
                            $temps['high'] = (string) $attr->high;
                        }
                    }


                }

                return $temps;
            }
            catch (Exception $e) {
                return $temps;
            }
        }


        protected function get_banner()
        {
            $weather = array();

            if((is_home() || is_front_page())){
                if ( false === ( $weather = get_transient( 'weather_homepage' ) ) ) {

                    $weather = $this->get_weather();

                    set_transient( 'weather_homepage', $weather, 3 * HOUR_IN_SECONDS );
                }
            }

            $banner = get_field('banner') ;
            $video  = get_field('video_banner');

            $this->view->class  = (is_singular( "restaurantes" )) ? "a-banner--nofixed ": '';
            $this->view->video  = ($video) ? get_field('video_banner') : false;
            $this->view->style  = ($banner && !$video) ? "style='background-image:url({$banner})'":'';
            $this->view->title  = (get_field('title'))  ? get_field('title') : '';
            $this->view->resume = (get_field('resume')) ? get_field('resume') : '';
            $this->view->link   = (get_field('link_banner'))? get_field('link_banner') : false;
            $this->view->hoteis = $this->data_header['hoteis'];
            $this->view->weather= $weather;

            if($video){
                return $this->view->render('shared/banner-video');
            }
            else{
               return $this->view->render('shared/banner');
            }

        }



        protected function list_contacts()
        {
            $this->view->set("list" , $this->get_contacts() );
            return $this->view->render('shared/list_contacts');
        }



        protected function get_form()
        {
            if(!get_field('form_sidebar'))
                return '';

            $form = get_field('form_sidebar');

            if($form==='none')
                return '';

            return $this->{$form}();


        }

        protected function recrutamento()
        {
            $modal = array(
                'content' => '#recrutamento',
                'form'    =>  true
            );
            $ajax  = array(
                'action'     => 'recrutament',
                'uploadFile' => 'cvform'
            );

            $this->view->set('modal',  Helper::setJson($modal));
            $this->view->set('ajax' ,  Helper::setJson($ajax));

            $this->view->set('content' , $this->list_contacts());
            return $this->view->render('forms/recrutamento');
        }

        protected function info()
        {
            $modal = array(
                'content' => '#info',
                'form'    =>  true
            );

            $ajax  = array('action'  => 'info');

            $this->view->set('modal',  Helper::setJson($modal));
            $this->view->set('ajax' ,  Helper::setJson($ajax));
            return $this->view->render('forms/info');
        }



        protected function adesao()
        {
            $modal = array(
                'content' => '#adesao',
                'form'    =>  true
            );

            $ajax  = array('action'  => 'adesao');

            $this->view->set('modal',  Helper::setJson($modal));
            $this->view->set('ajax' ,  Helper::setJson($ajax));
            return $this->view->render('forms/adesao');
        }

        protected function get_contacts()
        {
            $query = new WP_Query( array(
                'post_type'      => 'list_contactos' ,
                'posts_per_page' => -1,
                'order'        => 'asc'
            ));

            return $query->posts;

        }

        protected function hoteis_select()
        {
            $data   = array();
            $hoteis = $this->get_hoteis();


            foreach ($hoteis as $key => $value) {
                $id =get_field('id_restaurant' , $value->ID);

                $data[$id]= $value->post_title;
            }

            return $data;
        }

        protected function get_hoteis()
        {
            $query = new WP_Query( array(
                'post_type'      => 'hoteis' ,
                'posts_per_page' => -1,
                'order'        => 'asc'
            ));

            return $query->posts;

        }


        public  function __destruct() {

        }

    }
?>

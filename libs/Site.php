<?php

    class Site extends Base
    {

        function __construct()
        {
            parent::__construct();

        }


        public function index()
        {

            $content = $this->view->render('index');
            $this->content($content);
        }


        public function contact()
        {
            $this->view->set('banner', $this->get_banner());
            $this->view->set('contacts', $this->list_contacts());
            $content = $this->view->render('contacts');
            $this->content($content);  
        }


        public function page()
        {
        
            $this->view->set('banner', $this->get_banner());

            $this->view->set('form', $this->get_form());

            $content = $this->view->render('page');
            $this->content($content);


        }


        public function homepage()
        {

            $this->view->set('banner', $this->get_banner());
            $this->view->set('intros', $this->get_homeintros());

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

        protected function get_homeintros(){
            $intros = array();

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

            return $intros;
        }

        protected function get_banner()
        {
            $banner = get_field('banner') ;
            $this->view->style  = ($banner) ? "style='background-image:url({$banner})'":'';
            $this->view->title  = (get_field('title'))  ? get_field('title') : '';
            $this->view->resume = (get_field('resume')) ? get_field('resume') : '';

            return $this->view->render('shared/banner');
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
            $this->view->set('content' , $this->list_contacts());
            return $this->view->render('forms/recrutamento');
        }

        protected function info()
        {
            return $this->view->render('forms/info');
        }
        
        protected function adesao()
        {
            return $this->view->render('forms/adesao');
        }

        protected function get_contacts()
        {
            $query = new WP_Query( array(
                'post_type'      => 'contactos' ,      
                'posts_per_page' => -1, 
                'order'        => 'asc'
            ));

            return $query->posts;

        }
    }
?>
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


        public function page()
        {


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

        protected function get_banner(){
            $banner = get_field('banner') ;
            $this->view->style  = ($banner) ? "style='background-image:url({$banner})'":'';
            $this->view->title  = (get_field('title'))  ? get_field('title') : '';
            $this->view->resume = (get_field('resume')) ? get_field('resume') : '';

            return $this->view->render('shared/banner');
        }
    }
?>
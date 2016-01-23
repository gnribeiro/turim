<?php

Class Gwp_Shortcodes {

    public static function init() {
        // Define shortcodes
        $shortcodes = array(
            'youtube' => __CLASS__ . '::youtube',
            'highlight' => __CLASS__ . '::highlight'

        );

        foreach ( $shortcodes as $shortcode => $function ) {
            add_shortcode( $shortcode , $function );
        }
    }

    public static function youtube($atts, $content=null) {
        extract(shortcode_atts( array('id' => ''), $atts));

        $view = View::factory();
        $view->set('content' , $content);
        $view->set('id' , $id);

        return $view->render('shortcodes/youtube');
    }

    public static function highlight ($atts, $content=null) {
        extract(shortcode_atts( array('title' => false), $atts));

        $view = View::factory();
        $view->set('title' , $title);
        $view->set('content' , $content);

        return $view->render('shortcodes/highlight');
    }
}

?>
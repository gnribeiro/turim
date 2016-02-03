<?php

class GWP_Nav_Menu extends Walker_Nav_Menu {


    public function start_el(&$output, $item, $depth=0, $args=array())
    {
        $class_custom = array('a-group-menu' , 'hotel-region', "a-hotel-menu");
        $classes      = empty($item->classes) ? array() : (array) $item->classes;
        $class_need   = array(
            'current-menu-item',
            'current-menu-ancestor',
            'current-menu-parent'
        );

        $class_need  = array_merge($class_custom , $class_need);
        $classes_all = array_intersect( $class_need ,$classes);

        $class_names = join( ' ', apply_filters( 'nav_menu_css_class',
            array_filter($classes_all ), $item, $args, $depth ) );

        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

        $atts           = array();
        $atts['title']  = !empty($item->attr_title ) ? $item->attr_title : '';
        $atts['target'] = !empty($item->target )     ? $item->target     : '';
        $atts['href']   = !empty($item->url ||$item->url !=='#') ? $item->url : '';


        if(!empty( $item->xfn ) && !empty($atts['href']) ){
            $atts['href']   = $atts['href'] . '#' . $item->xfn;
        }


        $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );
        $attributes = '';

        foreach ( $atts as $attr => $value ) {
            if ( ! empty( $value ) ) {
                $value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }

        $title = apply_filters( 'the_title', $item->title, $item->ID );
        $title = apply_filters( 'nav_menu_item_title', $title, $item, $args, $depth );

        $elem  = ($item->url == "#")
            ?  sprintf('<span %s>%s</span>'  , $class_names, $title)
            :  sprintf('<a %s %s>%s</a>' , $attributes , $class_names, $title);


        //if(!in_array('hotel-region',  $classes))
            $output .= sprintf('<li %s>%s' , $class_names , $elem);
    }
};
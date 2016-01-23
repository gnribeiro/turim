<?php

function custom_post_type() {

  $labels = array(
    'name'                  => _x( 'Contactos', 'Post Type General Name', 'text_domain' ),
    'singular_name'         => _x( 'Contacto', 'Post Type Singular Name', 'text_domain' ),
    'menu_name'             => __( 'Contactos', 'text_domain' ),
    'name_admin_bar'        => __( 'Contactos', 'text_domain' ),
    'archives'              => __( 'Contactos', 'text_domain' ),
    'parent_item_colon'     => __( 'Contactos Item:', 'text_domain' ),
    'all_items'             => __( 'All Contactos', 'text_domain' ),
    'add_new_item'          => __( 'Add New Contacto', 'text_domain' ),
    'add_new'               => __( 'Add Contacto', 'text_domain' ),
    'new_item'              => __( 'New Contacto', 'text_domain' ),
    'edit_item'             => __( 'Edit Contactos', 'text_domain' ),
    'update_item'           => __( 'Update Contacto', 'text_domain' ),
    'view_item'             => __( 'View Contacto', 'text_domain' ),
    'search_items'          => __( 'Search Contacto', 'text_domain' ),
    'not_found'             => __( 'Not found', 'text_domain' ),
    'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
    'featured_image'        => __( 'Featured Image', 'text_domain' ),
    'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
    'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
    'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
    'insert_into_item'      => __( 'Insert into Contacto', 'text_domain' ),
    'uploaded_to_this_item' => __( 'Uploaded to this Contacto', 'text_domain' ),
    'items_list'            => __( 'Contacto list', 'text_domain' ),
    'items_list_navigation' => __( 'Contacto list navigation', 'text_domain' ),
    'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
  );
  $args = array(
    'label'                 => __( 'Contacto', 'text_domain' ),
    'description'           => __( 'Lista de contactos de Turim', 'text_domain' ),
    'labels'                => $labels,
    'supports'              => array( 'title'),
    'taxonomies'            => array( 'category', 'post_tag' ),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 5,
    'menu_icon'             => 'dashicons-list-view',
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,
    'exclude_from_search'   => true,
    'publicly_queryable'    => true,
    'capability_type'       => 'page',
  );
  register_post_type( 'Contactos', $args );

}

function custom_post_type_hoteis() {

    $labels = array(
        'name'                  => _x( 'hoteis', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'hotel', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Hoteis', 'text_domain' ),
        'name_admin_bar'        => __( 'Hoteis', 'text_domain' ),
        'archives'              => __( 'Hotel Archives', 'text_domain' ),
        'parent_item_colon'     => __( 'Parent Hotel:', 'text_domain' ),
        'all_items'             => __( 'All Hoteis', 'text_domain' ),
        'add_new_item'          => __( 'Add New Hotel', 'text_domain' ),
        'add_new'               => __( 'Add New', 'text_domain' ),
        'new_item'              => __( 'New Hotel', 'text_domain' ),
        'edit_item'             => __( 'Edit Hotel', 'text_domain' ),
        'update_item'           => __( 'Update Hotel', 'text_domain' ),
        'view_item'             => __( 'View Hotel', 'text_domain' ),
        'search_items'          => __( 'Search Hotel', 'text_domain' ),
        'not_found'             => __( 'Not found', 'text_domain' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
        'featured_image'        => __( 'Featured Image', 'text_domain' ),
        'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
        'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
        'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
        'insert_into_item'      => __( 'Insert into Hotel', 'text_domain' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Hotel', 'text_domain' ),
        'items_list'            => __( 'Hotel list', 'text_domain' ),
        'items_list_navigation' => __( 'Hoteis list navigation', 'text_domain' ),
        'filter_items_list'     => __( 'Filter Hotel list', 'text_domain' ),
    );
    $args = array(
        'label'                 => __( 'hotel', 'text_domain' ),
        'description'           => __( 'hoteis', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes', ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 20,
        'menu_icon'             => 'dashicons-store',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    );
    register_post_type( 'hoteis', $args );
}


function custom_post_type_restaurantes() {

    $labels = array(
        'name'                  => _x( 'restaurantes', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'restaurante', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Restaurantes', 'text_domain' ),
        'name_admin_bar'        => __( 'Restaurantes', 'text_domain' ),
        'archives'              => __( 'Restaurante Archives', 'text_domain' ),
        'parent_item_colon'     => __( 'Parent Restaurante:', 'text_domain' ),
        'all_items'             => __( 'All Restaurantes', 'text_domain' ),
        'add_new_item'          => __( 'Add New Restaurante', 'text_domain' ),
        'add_new'               => __( 'Add New', 'text_domain' ),
        'new_item'              => __( 'New Restaurante', 'text_domain' ),
        'edit_item'             => __( 'Edit Restaurante', 'text_domain' ),
        'update_item'           => __( 'Update Restaurante', 'text_domain' ),
        'view_item'             => __( 'View Restaurante', 'text_domain' ),
        'search_items'          => __( 'Search Restaurante', 'text_domain' ),
        'not_found'             => __( 'Not found', 'text_domain' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
        'featured_image'        => __( 'Featured Image', 'text_domain' ),
        'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
        'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
        'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
        'insert_into_item'      => __( 'Insert into Restaurante', 'text_domain' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Restaurante', 'text_domain' ),
        'items_list'            => __( 'Restaurantes list', 'text_domain' ),
        'items_list_navigation' => __( 'Restaurante list navigation', 'text_domain' ),
        'filter_items_list'     => __( 'Filter Restaurante list', 'text_domain' ),
    );
    $args = array(
        'label'                 => __( 'restaurante', 'text_domain' ),
        'description'           => __( 'restaurantes', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes', ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 20,
        'menu_icon'             => 'dashicons-admin-multisite',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    );
    register_post_type( 'restaurantes', $args );

}

// Register Custom Post Type
function custom_post_type_destaques() {

    $labels = array(
        'name'                  => _x( 'destaques-home', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'destaque-home', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Destaques Home', 'text_domain' ),
        'name_admin_bar'        => __( 'Destaques Home', 'text_domain' ),
        'archives'              => __( 'Destaques Home Archives', 'text_domain' ),
        'parent_item_colon'     => __( 'Parent Destaques:', 'text_domain' ),
        'all_items'             => __( 'All Destaques', 'text_domain' ),
        'add_new_item'          => __( 'Add New Destaques', 'text_domain' ),
        'add_new'               => __( 'Add New Destaque', 'text_domain' ),
        'new_item'              => __( 'New Destaque', 'text_domain' ),
        'edit_item'             => __( 'Edit Destaque', 'text_domain' ),
        'update_item'           => __( 'Update Destaque', 'text_domain' ),
        'view_item'             => __( 'View Destaque', 'text_domain' ),
        'search_items'          => __( 'Search Destaque', 'text_domain' ),
        'not_found'             => __( 'Not found', 'text_domain' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
        'featured_image'        => __( 'Featured Image', 'text_domain' ),
        'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
        'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
        'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
        'insert_into_item'      => __( 'Insert into Destaque', 'text_domain' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Destaque', 'text_domain' ),
        'items_list'            => __( 'Destaque list', 'text_domain' ),
        'items_list_navigation' => __( 'Destaque list navigation', 'text_domain' ),
        'filter_items_list'     => __( 'Filter Destaque list', 'text_domain' ),
    );
    $args = array(
        'label'                 => __( 'destaque-home', 'text_domain' ),
        'description'           => __( 'destaques-home', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes', ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 10,
        'menu_icon'             => 'dashicons-star-filled',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => true,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    );
    register_post_type( 'destaques-home', $args );

}
add_action( 'init', 'custom_post_type_destaques', 0 );
add_action( 'init', 'custom_post_type_restaurantes', 0 );
add_action( 'init', 'custom_post_type_hoteis', 0 );
add_action( 'init', 'custom_post_type', 0 );
?>
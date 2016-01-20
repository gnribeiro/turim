<?php

// Register Custom Post Type
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
add_action( 'init', 'custom_post_type', 0 );
?>
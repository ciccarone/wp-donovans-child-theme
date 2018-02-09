<?php

  function don_adding_scripts() {
    wp_register_script('custom-script', get_stylesheet_directory_uri() . '/script.js', array('jquery'),'1.1', true);
    wp_enqueue_script('custom-script');
  }

  add_action( 'wp_enqueue_scripts', 'don_adding_scripts' );

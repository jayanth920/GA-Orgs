<?php
function add_scripts(){
  wp_enqueue_style("styles", get_stylesheet_uri());
  wp_enqueue_script(
    "app",
    get_template_directory_uri() . "/js/app.js",
    array("jquery")
  );
}
add_action("wp_enqueue_scripts","add_scripts");
?>

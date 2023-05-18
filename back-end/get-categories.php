<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'classes/category.php';

$category_cls = new Category();
$category_list = json_encode($category_cls->get_categories_list());

echo($category_list);

?>
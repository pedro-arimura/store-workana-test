<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'classes/category.php';

$category = new Category();
$postdata = json_decode(file_get_contents("php://input"), TRUE);

$category_name = $postdata['categoryName'];
$category_tax = $postdata['categoryTax'];

$category->insert_category($category_name, $category_tax);

http_response_code(201);
?>
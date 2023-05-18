<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'classes/product.php';

$product = new Product();
$postdata = json_decode(file_get_contents("php://input"), TRUE);

$product_name = $postdata['product_name'];
$product_category_id = $postdata['product_category_id'];
$product_price = $postdata['product_price'];

$product->insert_product($product_name, $product_category_id, $product_price);

http_response_code(201);
?>
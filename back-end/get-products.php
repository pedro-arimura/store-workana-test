<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'classes/product.php';

$prod_cls = new Product();
$prod_list = json_encode($prod_cls->get_products_list());

echo($prod_list);

?>
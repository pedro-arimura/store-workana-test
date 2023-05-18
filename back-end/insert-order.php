<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'classes/order.php';

$order = new Order();
$postdata = json_decode(file_get_contents("php://input"), TRUE);

$order_products = $postdata['order_products'];
$order_value = $postdata['order_value'];
$user_id = $postdata['user_id'];

$order->insert_order($order_products, $order_value, $user_id);

http_response_code(201);
?>
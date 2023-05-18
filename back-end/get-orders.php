<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'classes/order.php';

$order_cls = new Order();
$order_list = json_encode($order_cls->get_orders_list());

echo($order_list);

?>
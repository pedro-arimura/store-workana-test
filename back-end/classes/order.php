<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);
require 'vendor/autoload.php';
include 'connection.php';

class Order {
    public function __construct() {
        $this->connection = new Connection();
    }

    public function get_orders_list() {
        $conn = $this->connection->connect();
        $stmt = $conn->query("SELECT * FROM orders");
        $response = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $response;
    }

    public function insert_order($order_products, $order_value, $user_id) {
        $conn = $this->connection->connect();
        $sql = "INSERT INTO orders (order_id, order_products, order_value, user_id) VALUES (DEFAULT, :order_products, :order_value, :user_id)";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':order_products', $order_products);
        $stmt->bindValue(':order_value', $order_value);
        $stmt->bindValue(':user_id', $user_id);

        $stmt->execute();

        return TRUE;
    }
}

?>
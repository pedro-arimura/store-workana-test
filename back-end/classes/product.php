<?php 
require 'vendor/autoload.php';
include 'connection.php';

class Product {
    public function __construct() {
        $this->connection = new Connection();
    }

    public function get_products_list() {
        $conn = $this->connection->connect();
        $stmt = $conn->query("SELECT products.*, products_categories.category_name, products_categories.category_tax FROM products INNER JOIN products_categories ON products.product_category_id = products_categories.category_id;");
        $response = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $response;
    }

    public function insert_product($product_name, $product_category_id, $product_price) {
        $conn = $this->connection->connect();
        $sql = "INSERT INTO products (product_id, product_name, product_category_id, product_price) VALUES (DEFAULT, :product_name, :product_category_id, :product_price)";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':product_name', $product_name);
        $stmt->bindValue(':product_category_id', $product_category_id);
        $stmt->bindValue(':product_price', $product_price);
        $stmt->execute();

        return TRUE;
    }
}
?>
<?php
require 'vendor/autoload.php';
include 'connection.php';

class Category {
    public function __construct() {
        $this->connection = new Connection();
    }

    public function get_categories_list() {
        $conn = $this->connection->connect();
        $stmt = $conn->query("SELECT * FROM products_categories");
        $response = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $response;
    }

    public function insert_category($category_name, $category_tax) {
        $conn = $this->connection->connect();
        $sql = "INSERT INTO products_categories (category_id, category_name, category_tax) VALUES (DEFAULT, :category_name, :category_tax)";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':category_name', $category_name);
        $stmt->bindValue(':category_tax', $category_tax);

        $stmt->execute();

        return TRUE;
    }
}

?>
<?php
require 'vendor/autoload.php';

final class Connection
{

    public function __construct()
    {
        $this->host = 'localhost';
        $this->username = 'postgres';
        $this->password = 'Admin@123';
        $this->dbname = 'workana-challenge';
    }

    public function connect()
    {
        try {
            $pdo = new PDO("pgsql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
            return $pdo;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
}

?>
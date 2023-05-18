<?php 
declare(strict_types=1);
include 'classes/connection.php';
require 'vendor/autoload.php';
use PHPUnit\Framework\TestCase;

final class ConnectionTest extends TestCase
{
    public function testConnectionsucceed(): void
    {
        $db = new Connection();
        $pdo = $db->connect();
        $this->assertInstanceOf(PDO::class, $pdo);
    }
}

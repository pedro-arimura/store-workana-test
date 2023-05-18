<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'classes/connection.php';

$postdata = json_decode(file_get_contents("php://input"), TRUE);

$email = $postdata['email'];
$pswd = md5($postdata['password']);

$conn_obj = new Connection();
$connection = $conn_obj->connect();

$query = "SELECT id_user FROM users WHERE email_user = :email AND pswd_user = :pswd";
$stmt = $connection->prepare($query);
$stmt->bindValue(':email', $email);
$stmt->bindValue(':pswd', $pswd);

$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
$rows = count($result);

if($rows > 0) {
    echo(json_encode($result[0]));
    http_response_code(200);

    return TRUE;
} else {
    echo(json_encode(array("error" => "not found")));
    
    return FALSE;
}
?>
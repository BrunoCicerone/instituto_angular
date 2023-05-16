<?php
// Connection parameters
$host = "localhost";
$database = "instituto";
$username = "workbench";
$password = "ninguna";

try {
    $dsn = "mysql:host=$host;dbname=$database";
    $pdo = new PDO($dsn, $username, $password);
    // Additional configuration options if needed
    // $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Return the PDO object for further use
    return $pdo;
} catch (PDOException $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}

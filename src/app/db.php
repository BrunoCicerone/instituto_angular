<?php
$servername = "localhost";
$port = 3306;
$username = "root";
$password = "";
$dbname = "instituto";

// Crear la conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}
?>

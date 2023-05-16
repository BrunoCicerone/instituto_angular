<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonUsuario = json_decode(file_get_contents("php://input"));
if (!$jsonUsuario) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into usuario(nombre, apellidos, usuario, password) values (?,?,?,?)");
$resultado = $sentencia->execute([$jsonUsuario->nombre, $jsonUsuario->apellidos, $jsonUsuario->usuario, $jsonUsuario->password]);
echo json_encode([
    "resultado" => $resultado,
]);
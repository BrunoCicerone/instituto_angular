<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idusuario"])) {
    exit("No hay id de mascota para eliminar");
}
$idusuario= $_GET["idusuario"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM usuario WHERE id = ?");
$resultado = $sentencia->execute([$idusuario]);
echo json_encode($resultado);
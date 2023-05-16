<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentencia = $bd->query("select idusuario, nombre, apellidos, usuario, password from mascotas");
$mascotas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($usuario);
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idAlumno"])) {
    exit("No hay id de alumno");
}
$idMascota = $_GET["idAlumno"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select idAlumno, nombre, apellidos, direccion, usuario, password where id = ?");
$sentencia->execute([$idusuario]);
$idAlumno = $sentencia->fetchObject();
echo json_encode($iusuario);
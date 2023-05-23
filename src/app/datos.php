<?php
include 'db.php';

$sql = "SELECT usuarios.nombre AS nombre_alumno, asignaturas.nombre AS nombre_asignatura, notas.nota
        FROM notas
        INNER JOIN usuarios ON notas.id_alumno = usuarios.id
        INNER JOIN asignaturas ON notas.id_asignatura = asignaturas.id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    $response = array("asignaturas" => $data);
    echo json_encode($response);
} else {
    echo json_encode(array("message" => "No se encontraron registros."));
}

$conn->close();
?>

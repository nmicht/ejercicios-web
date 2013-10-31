<?php
//Me conecto a la base de datos
$mysql = new mysqli('localhost','root','1234','proy');

//Hago un query para obtener los alumnos
$consulta = 'SELECT * FROM alumno';
$resultado = $mysql->query($consulta);

//Proceso el resultado
while($row = $resultado->fetch_assoc())
	$alumnos[] = $row;

//Muestro el resultado
echo json_encode($alumnos);

//Cierro la conexion
$mysql->close();

?>
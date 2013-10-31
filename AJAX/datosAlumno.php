<?php
//Obtengo los datos y los limpio (o valido)
$id = $_POST['idalumno'];

//Me conecto a la base de datos
$mysql = new mysqli('localhost','root','1234','proy');

//Hago un query para obtener los alumnos
$consulta = "SELECT * FROM alumno WHERE id = $id";
$resultado = $mysql->query($consulta);

//Proceso el resultado
$row = $resultado->fetch_assoc();

//Convertimos el arreglo a JSON y lo "regresamos"
echo json_encode($row);

//Cerramos la conexión
$mysql -> close();
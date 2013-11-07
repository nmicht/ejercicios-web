<?php
	//Se recomienda que sea un inc para negar en el htaccess su acceso
	require_once('datos_conexion.inc');

	//Creando mi conexion
	$con = new mysqli($servidor,$usuario,$pass,$bd);

	if($con->connect_error){
		//echo "no me puedo conectar";
		//exit();

		//die hace la labor del echo con el exit
		die('No me pude conectar'); 
	}

	//Defino mi query
	$miquery = 'SELECT * FROM alumno';

	//Ejecuto mi query
	$resultado = $con->query($miquery);

	//Reviso el objeto mysqli_result
	var_dump($resultado);

	//Convierto el resultado en un arreglo
	//Para poder usar fetch_all se necesita mysqlnd
	//Para no usar fetch_array con la constante MYSQLI_ASSOC...
	while($fila = $resultado->fetch_assoc())
		$datos[] = $fila;

	//Muestro los datos del arreglo
	print_r($datos);

	//Cierro la conexión a la base de datos
	$con->close();

?>

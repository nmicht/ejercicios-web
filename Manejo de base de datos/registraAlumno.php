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
	
	//Se obtienen las variables de post y se limpian
	$nombre 	= $con->real_escape_string($_POST["nombre"]);
	$codigo 	= $con->real_escape_string$_POST["codigo"];
	$pass 		= $con->real_escape_string$_POST["pass"];
	$carrera 	= $con->real_escape_string$_POST["ingenierias"];
	$mail 		= $con->real_escape_string$_POST["mail"];

	//Defino mi consulta
	$miquery = "INSERT INTO alumno
				(codigo, nombre, carrera, correo)
				VALUES 
				(\"$codigo\", \"$nombre\", \"$carrera\", \"$mail\")";

	//Ejecuto mi consulta
	$resultado = $con->query($miquery);

	//Reviso si se realizó la inserción
	var_dump($resultado);

	//Obtengo el último id autoincrementable
	var_dump($con->insert_id);

	//Cierro la conexión a la base de datos
	$con->close();


?>

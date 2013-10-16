<?php

class AlumnoMdl{
	private $driver;

	function __construct(){
		$this -> driver = new mysqli('localhost','root','1234','proy');
		if($this -> driver->connect_errno)
			die("<br>Error en la conexión");
	}

	function alta($nombre, $codigo, $carrera, $correo){
		echo "<br>debug: Entro a la alta del alumno en el modelo";
		$query = 
				"INSERT INTO alumno
				(nombre, correo)
				VALUES (
					\"$nombre\",
					\"$correo\"
				)";

		$r = $this -> driver -> query($query);

		if($this -> driver -> insert_id){
			return $this -> driver -> insert_id;
		}
		elseif($r === FALSE)
			return FALSE;
	}

}
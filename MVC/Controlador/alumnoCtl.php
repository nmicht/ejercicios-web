<?php

class AlumnoCtl{
	private $modelo;

	public function ejecutar(){
		require_once("Modelo/AlumnoMdl.php");
		$this->modelo = new AlumnoMdl();
		switch ($_GET['act']){
			case "alta":
				echo "<br>debug: entro al caso alta del controlador alumno";
				if(empty($_POST)){
					echo "<br>debug: carga la vista alumno sin post";
					//Cargo la vista del formulario
					require_once("Vista/AltaAlumno.html");
				}
				else{
					//Obtener las variables para la alta
					//y limpiarlas
					$nombre = $_POST["nombre"];
					$codigo = $_POST["codigo"];
					$carrera = $_POST["ingenierias"];
					$correo = $_POST["mail"];

					$resultado = $this -> modelo -> alta($nombre, $codigo, $carrera, $correo);

					echo "<br>debug: Va a cargar la vista en base a lo devuelto por el modelo";
					if($resultado!==FALSE)
						require_once("Vista/ModificarEliminar.html");
					else
						require_once("Vista/Error.html");
				}
				break;
			default:
				require_once("Vista/404.html");
		}
	}
}
<?php

class AlumnoCtl{
	private $modelo;

	public function ejecutar(){
		require_once("Modelo/AlumnoMdl.php");
		$this->modelo = new AlumnoMdl();
		switch ($_GET['act']){
			case "alta":
				//echo "<br>debug: entro al caso alta del controlador alumno";
				if(empty($_POST)){
					//echo "<br>debug: carga la vista alumno sin post";
					//Cargo la vista del formulario
					require_once("Vista/AltaAlumno.html");
				}
				else{
					//Obtener las variables para la alta
					//y limpiarlas
					$nombre 	= $_POST["nombre"];
					$codigo 	= $_POST["codigo"];
					$carrera 	= $_POST["ingenierias"];
					$correo 	= $_POST["mail"];

					$resultado = $this -> modelo -> alta($nombre, $codigo, $carrera, $correo);

					//echo "<br>debug: Va a cargar la vista en base a lo devuelto por el modelo";
					if($resultado!==FALSE){
						//Procesar la vista

						//Obtener la vista
						$vista = file_get_contents("Vista/ModificarEliminar.html");

						//Obtengo la fila de la tabla
						$inicio_fila = strrpos($vista,'<tr>');
						$final_fila = strrpos($vista,'</tr>') + 5;

						$fila = substr($vista,$inicio_fila,$final_fila-$inicio_fila);

						//Genero las filas
						$alumnos = $this -> modelo -> lista();

						foreach ($alumnos as $row) {
							$new_fila = $fila;
							//$new_fila = str_replace('{codigo}', $row['id'], $new_fila);
							//$new_fila = str_replace('{nombre}', $row['nombre'], $new_fila);

							//Reemplazo con un diccionario
							$diccionario = array('{codigo}' => $row['id'], '{nombre}' => $row['nombre']);
							$new_fila = strtr($new_fila,$diccionario);
							$filas .= $new_fila;
						}
						
						//Reemplazo en mi vista una fila por todas las filas
						$vista = str_replace($fila, $filas, $vista);

						//Mostrar la vista
						echo $vista;
					}
					else
						require_once("Vista/Error.html");
				}
				break;
			default:
				require_once("Vista/404.html");
		}
	}
}
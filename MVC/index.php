<?php

switch($_GET["ctl"]){
	case "alumnos":
		//Incluyo el controlador
		echo "debug: Entro en caso alumnos del index";
		require_once("Controlador/alumnoCtl.php");
		$ctl = new AlumnoCtl();
		break;
	default:
}

$ctl -> ejecutar();
<?php

	//Cargar o crear una nueva sesion
	session_start();

	//Valido si ya estaba con sesion
	if( isset($_SESSION['usuario']) ){
		echo 'Ya tienes sesion <br>';
		var_dump($_SESSION);
		echo '<br><a href="logout.php">Cerrar sesion</a>';
	}
	else{
		echo 'Necesitas ingresar al sistema <br>';
		echo '<a href="login.php?u=pedro">Clic para hacer login</a>';
	}
?>
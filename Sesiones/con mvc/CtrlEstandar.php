<?php

	class CtrlEstandar{

		function isLogged(){
			if( isset($_SESSION['user']) )
				return true;
			return false;
		}

		function isAdmin(){
			if( isset($_SESSION['type']) && $_SESSION['type'] == 'administrador' )
				return true;
			return false;
		}

		function isTeacher(){
			if( isset($_SESSION['type']) && $_SESSION['type'] == 'profesor' )
				return true;
			return false;
		}

		function isStudent(){
			if( isset($_SESSION['type']) && $_SESSION['type'] == 'alumno' )
				return true;
			return false;
		}

		function logout(){
			session_unset();
			session_destroy();		
			setcookie(session_name(), '', time()-3600);
		}

		function login($id_user, $pass){
			//ir a la base buscarlo validarlo
			//if ( no lo encontro )
				//return false;

			$_SESSION['user'] = $id_user;
			$_SESSION['type'] = $type;
			$_SESSION['username'] = $nombre;

			return true;

		}
	}
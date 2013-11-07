function validarFormInicio () {
	var error = document.getElementById( 'inicio_error' );
	if( error != null ) {
		error.parentNode.removeChild( error );
	}

	var codigo = document.getElementById( 'codigo' );
	var pass = document.getElementById( 'pass' );

	var mensaje_error = "Llenar ambos campos correctamente";
	var div = document.createElement( 'div' );
	div.setAttribute( 'class', 'error' );
	div.setAttribute( 'id', 'inicio_error' );
	div.appendChild( document.createTextNode( mensaje_error ) );

	if( codigo.value == "" || pass.value == "" ) {
		codigo.parentNode.insertBefore( div, codigo );
	}

}

function validarNombre() {
	var nombre = document.getElementById( 'nombre' );
	var nombre_error = document.getElementById( 'nombre_error' );
	if( nombre_error != null )
		nombre_error.parentNode.removeChild( nombre_error );
	if( nombre.value != "" ) {
		var reg_exp = /^[a-z\s]+$/i;
		if( !reg_exp.test( nombre.value ) ) {
			var div = document.createElement( 'div' );
			div.setAttribute( 'class', 'error' );
			div.setAttribute( 'id', 'nombre_error' );
			div.appendChild( document.createTextNode( "Utiliza unicamente letras" ) );

			var padre = nombre.parentNode;
			padre.insertBefore( div, nombre.nextSibling );
		}
	}
	else {
		var div = document.createElement( 'div' );
		div.setAttribute( 'class', 'error' );
		div.setAttribute( 'id', 'nombre_error' );
		div.appendChild( document.createTextNode( "Rellena este campo" ) );

		var padre = nombre.parentNode;
		padre.insertBefore( div, nombre.nextSibling );
	}
}

function validarCodigo()  {
	var codigo = document.getElementById( 'codigo' );
	var codigo_error = document.getElementById( 'codigo_error' );
	if( codigo_error != null )
		codigo_error.parentNode.removeChild( codigo_error );
	if( codigo.value != "" ) {
		var reg_exp = /^[0-9a-z]+$/i;
		if( !reg_exp.test( codigo.value ) ) {
			var div = document.createElement( 'div' );
			div.setAttribute( 'class', 'error' );
			div.setAttribute( 'id', 'codigo_error' );
			div.appendChild( document.createTextNode( "Utiliza unicamente letras y digitos" ) );

			var padre = codigo.parentNode;
			padre.insertBefore( div, codigo.nextSibling );
		}
	}
	else {
		var div = document.createElement( 'div' );
		div.setAttribute( 'class', 'error' );
		div.setAttribute( 'id', 'codigo_error' );
		div.appendChild( document.createTextNode( "Rellena este campo" ) );

		var padre = codigo.parentNode;
		padre.insertBefore( div, codigo.nextSibling );
	}
}

function validarSelect( id_select ) {
	var select = document.getElementById( id_select );
	var select_error = document.getElementById( id_select + '_error' );
	if( select_error != null )
		select_error.parentNode.removeChild( select_error );
	if( select.selectedIndex == 0  ) {
		var div = document.createElement( 'div' );
		div.setAttribute( 'class', 'error' );
		div.setAttribute( 'id', id_select + '_error' );
		div.appendChild( document.createTextNode( 'Selecciona ' + id_select ) );

		var padre = select.parentNode;
		padre.insertBefore( div, select.nextSibling );
	}
}

function validarCorreo() {
	var mail = document.getElementById( 'mail' );
	var mail_error = document.getElementById( 'mail_error' );
	if( mail_error != null )
		mail_error.parentNode.removeChild( mail_error );
	if( mail.value != "" ) {
		var reg_exp = /^[a-z0-9][a-z0-9_\.]+@[a-z0-9_\.]+\.[a-z]+$/i;
		if( !reg_exp.test( mail.value ) ) {
			var div = document.createElement( 'div' );
			div.setAttribute( 'class', 'error' );
			div.setAttribute( 'id', 'mail_error' );
			div.appendChild( document.createTextNode( "Formato Incorrecto" ) );

			var padre = mail.parentNode;
			padre.insertBefore( div, mail.nextSibling );
		}
	}
	else {
		var div = document.createElement( 'div' );
		div.setAttribute( 'class', 'error' );
		div.setAttribute( 'id', 'mail_error' );
		div.appendChild( document.createTextNode( "Rellena este campo" ) );

		var padre = mail.parentNode;
		padre.insertBefore( div, mail.nextSibling );
	}
}

function validarPassword() {
	var pass = document.getElementById( 'pass' );
	var pass_error = document.getElementById( 'pass_error' );
	if( pass_error != null )
		pass_error.parentNode.removeChild( pass_error );
	if( pass.value == "" ) {
		var div = document.createElement( 'div' );
		div.setAttribute( 'class', 'error' );
		div.setAttribute( 'id', 'pass_error' );
		div.appendChild( document.createTextNode( "Rellena este campo" ) );

		var padre = pass.parentNode;
		padre.insertBefore( div, pass.nextSibling );		
	}	
}

function validarFormAltaAlumno() {
	validarNombre();
	validarCodigo();
	validarSelect( 'carrera' );
	validarCorreo();
	validarPassword();
}

function validarFormModifAlumno() {
	validarNombre();
	validarCodigo();
	validarSelect( 'carrera' );
	validarCorreo();
}

function validarGenerico( id_elemento ) {
	var elemento = document.getElementById( id_elemento );
	var elemento_error = document.getElementById( id_elemento + '_error' );
	if( elemento_error != null )
		elemento_error.parentNode.removeChild( elemento_error );
	if( elemento.value != "" ) {
		var reg_exp = /^[a-z0-9\s]+$/i;
		if( !reg_exp.test( elemento.value ) ) {
			var div = document.createElement( 'div' );
			div.setAttribute( 'class', 'error' );
			div.setAttribute( 'id', id_elemento + '_error' );
			div.appendChild( document.createTextNode( "Formato no valido" ) );

			var padre = elemento.parentNode;
			padre.insertBefore( div, elemento.nextSibling );
		}
	}
	else {
		var div = document.createElement( 'div' );
		div.setAttribute( 'class', 'error' );
		div.setAttribute( 'id', id_elemento + '_error' );
		div.appendChild( document.createTextNode( "Rellena este campo" ) );

		var padre = elemento.parentNode;
		padre.insertBefore( div, elemento.nextSibling );
	}
}

function validarFormRegistroCurso() {
	validarGenerico( 'nombre' );
	validarGenerico( 'seccion' );
	validarGenerico( 'academia' );
	validarSelect( 'ciclo' );

	//validacion NRC
	var nrc = document.getElementById( 'nrc' );
	var nrc_error = document.getElementById( 'nrc_error' );
	if( nrc_error != null )
		nrc_error.parentNode.removeChild( nrc_error );
	if( nrc.value != "" ) {
		var reg_exp = /^[0-9]+$/;
		if( !reg_exp.test( nrc.value ) ) {
			var div = document.createElement( 'div' );
			div.setAttribute( 'class', 'error' );
			div.setAttribute( 'id', 'nrc_error' );
			div.appendChild( document.createTextNode( "Utiliza unicamente digitos" ) );

			var padre = nrc.parentNode;
			padre.insertBefore( div, nrc.nextSibling );
		}
	}
	else {
		var div = document.createElement( 'div' );
		div.setAttribute( 'class', 'error' );
		div.setAttribute( 'id', 'nrc_error' );
		div.appendChild( document.createTextNode( "Rellena este campo" ) );

		var padre = nrc.parentNode;
		padre.insertBefore( div, nrc.nextSibling );
	}
}

function validarFormCambioPass() {
	var error = document.getElementById( 'cambio_error' );
	if( error != null ) {
		error.parentNode.removeChild( error );
	}

	var pass_actual = document.getElementById( 'pass_actual' );
	var nuevo_pass = document.getElementById( 'nuevo_pass' );
	var confirmacion = document.getElementById( 'confirmacion' );

	var div = document.createElement( 'div' );
	div.setAttribute( 'class', 'error' );
	div.setAttribute( 'id', 'cambio_error' );

	if( pass_actual.value != "" && nuevo_pass.value != "" && confirmacion.value != "" ) {
		if( nuevo_pass.value != confirmacion.value ) {
			div.appendChild( document.createTextNode( 'La nueva constraseña no coincide' ) );
			confirmacion.parentNode.insertBefore( div, confirmacion.nextSibling  );
		}
	}
	else {
		div.appendChild( document.createTextNode( 'Llenar todos los campos' ) );
		confirmacion.parentNode.insertBefore( div, confirmacion.nextSibling );
	}
}
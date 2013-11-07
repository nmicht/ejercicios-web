function validarFormRubro(){
	var form = document.getElementById( 'rubro_evaluacion' );

	var alfabeto_regexp = /^[a-z ]+$/i;
	elemento = document.getElementById( 'nombre_rubro' );
	error_vacio = document.getElementById( 'error_nombre_rubro_vacio' );
	error_regexp = document.getElementById( 'error_nombre_rubro_regexp' );


	if(  elemento.value == "" ){
		
		if( error_vacio == null){

			if( error_regexp != null )
				form.removeChild( error_regexp );

			error_vacio = document.createElement( 'div' );
			error_vacio.setAttribute( 'class', 'error' );
			error_vacio.setAttribute( 'id', 'error_nombre_rubro_vacio' );
			error_vacio.appendChild( document.createTextNode( 'Rellana este campo') );

			//insertar mensaje en el formulario
			form.insertBefore( error_vacio, elemento.nextSibling );
		}

	}
	else if( !alfabeto_regexp.test( elemento.value ) ){

		if( error_regexp == null){

			if( error_vacio != null )
				form.removeChild( error_vacio );

			error_regexp = document.createElement( 'div' );
			error_regexp.setAttribute( 'class', 'error' );
			error_regexp.setAttribute( 'id', 'error_nombre_rubro_regexp' );
			error_regexp.appendChild( document.createTextNode( 'Introducir solo caracteres alfabéticos' ) );

			//insertar mensaje en el formulario
			form.insertBefore( error_regexp, elemento.nextSibling );
		}
	}
	else{
		if( error_vacio != null)
			form.removeChild( error_vacio );

		if( error_regexp != null )
			form.removeChild( error_regexp );
	}

	var numero_regexp = /^[0-9]+$/i;
	elemento = document.getElementById( 'valor_rubro' );
	error_vacio = document.getElementById( 'error_valor_rubro_vacio' );
	error_regexp = document.getElementById( 'error_valor_rubro_regexp' );

	if(  elemento.value == "" ){
		
		if( error_vacio == null){

			if( error_regexp != null )
				form.removeChild( error_regexp );

			error_vacio = document.createElement( 'div' );
			error_vacio.setAttribute( 'class', 'error' );
			error_vacio.setAttribute( 'id', 'error_valor_rubro_vacio' );
			error_vacio.appendChild( document.createTextNode( 'Rellena este campo') );

			//insertar mensaje en el formulario
			form.insertBefore( error_vacio, elemento.nextSibling );
		}

	}
	else if( !numero_regexp.test( elemento.value ) ){

		if( error_regexp == null){

			if( error_vacio != null )
				form.removeChild( error_vacio );

			error_regexp = document.createElement( 'div' );
			error_regexp.setAttribute( 'class', 'error' );
			error_regexp.setAttribute( 'id', 'error_valor_rubro_regexp' );
			error_regexp.appendChild( document.createTextNode( 'Introducir solo números' ) );

			//insertar mensaje en el formulario
			form.insertBefore( error_regexp, elemento.nextSibling );
		}
	}
	else{
		if( error_vacio != null)
			form.removeChild( error_vacio );

		if( error_regexp != null )
			form.removeChild( error_regexp );
	}

	elemento = document.getElementById( 'columnas_rubro' );
	error_vacio = document.getElementById( 'error_columnas_rubro_vacio' );
	error_regexp = document.getElementById( 'error_columnas_rubro_regexp' );

	if( document.getElementById('tiene_hoja').checked ){
		if(  elemento.value == "" ){
		
			if( error_vacio == null){

				if( error_regexp != null )
					form.removeChild( error_regexp );

				error_vacio = document.createElement( 'div' );
				error_vacio.setAttribute( 'class', 'error' );
				error_vacio.setAttribute( 'id', 'error_columnas_rubro_vacio' );
				error_vacio.appendChild( document.createTextNode( 'Rellena este campo.') );

				//insertar mensaje en el formulario
				form.insertBefore( error_vacio, elemento.nextSibling );
			}

		}
		else if( !numero_regexp.test( elemento.value ) ){

			if( error_regexp == null){

				if( error_vacio != null )
					form.removeChild( error_vacio );

				error_regexp = document.createElement( 'div' );
				error_regexp.setAttribute( 'class', 'error' );
				error_regexp.setAttribute( 'id', 'error_columnas_rubro_regexp' );
				error_regexp.appendChild( document.createTextNode( 'Introducir solo números' ) );

				//insertar mensaje en el formulario
				form.insertBefore( error_regexp, elemento.nextSibling );
			}
		}
		else{
			if( error_vacio != null)
				form.removeChild( error_vacio );

			if( error_regexp != null )
				form.removeChild( error_regexp );
		}
	}
	
}


function estaActivado(){
	var tiene_hoja = document.getElementById( 'tiene_hoja' );

	if( !tiene_hoja.checked ){
		var form = document.getElementById( 'rubro_evaluacion' );
		var error_vacio = document.getElementById( 'error_columnas_rubro_vacio' );
		var error_regexp = document.getElementById( 'error_columnas_rubro_regexp' );

		if( error_vacio != null)
			form.removeChild( error_vacio );

		if( error_regexp != null )
			form.removeChild( error_regexp );

		document.getElementById( 'columnas_rubro' ).value = "";
		document.getElementById( 'columnas_rubro' ).disabled = true;

	}
	else{
		document.getElementById( 'columnas_rubro' ).disabled = false;

	}
}
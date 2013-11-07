function validarFormCE(){
	
	var form = document.getElementById( 'form_ciclo' );

	var elemento = document.getElementById( 'ciclo_select' );
	var error_vacio = document.getElementById( 'error_ciclo_vacio' );

	if( elemento.selectedIndex == 0 ){
		if( error_vacio == null){
			error_vacio = document.createElement( 'div' );
			error_vacio.setAttribute( 'class', 'error' );
			error_vacio.setAttribute( 'id', 'error_ciclo_vacio' );
			error_vacio.appendChild( document.createTextNode( 'Selecciona un ciclo' ) );

			form.insertBefore( error_vacio, elemento.nextSibling );
		}
	}
	else{
		if( error_vacio != null )
			form.removeChild( error_vacio );
	}

	elemento = document.getElementById( 'inicio_curso' );
	error_vacio = document.getElementById( 'error_fechai_vacia');

	if( elemento.value == "" ){
		if( error_vacio == null){
			error_vacio = document.createElement( 'div' );
			error_vacio.setAttribute( 'class', 'error' );
			error_vacio.setAttribute( 'id', 'error_fechai_vacia' );
			error_vacio.appendChild( document.createTextNode( 'Selecciona una fecha' ) );

			form.insertBefore( error_vacio, elemento.nextSibling );
		}	
	}
	else{
		if( error_vacio != null )
			form.removeChild( error_vacio );
	} 


	elemento = document.getElementById( 'fin_curso' );
	error_vacio = document.getElementById( 'error_fechaf_vacia');

	if( elemento.value == "" ){
		if( error_vacio == null){
			error_vacio = document.createElement( 'div' );
			error_vacio.setAttribute( 'class', 'error' );
			error_vacio.setAttribute( 'id', 'error_fechaf_vacia' );
			error_vacio.appendChild( document.createTextNode( 'Selecciona una fecha.' ) );

			form.insertBefore( error_vacio, elemento.nextSibling );
		}	
	}
	else{
		if( error_vacio != null )
			form.removeChild( error_vacio );
	} 

	var div_dia_inhabil = document.getElementById( 'dia_inhabil' );
	elemento = document.getElementById( 'fecha_dia_inhabil' );
	error_vacio = document.getElementById( 'error_dia_inhabil_vacio' );

	if( elemento.value == "" ){
		if( error_vacio == null){
			error_vacio = document.createElement( 'div' );
			error_vacio.setAttribute( 'class', 'error' );
			error_vacio.setAttribute( 'id', 'error_dia_inhabil_vacio' );
			error_vacio.appendChild( document.createTextNode( 'Selecciona una fecha.' ) );

			div_dia_inhabil.insertBefore( error_vacio, elemento.nextSibling );
		}	
	}
	else{
		if( error_vacio != null )
			div_dia_inhabil.removeChild( error_vacio );
	}


	var alfabeto_regexp = /^[a-z ]+$/i;
	elemento = document.getElementById( 'descripcion' );
	error_vacio = document.getElementById( 'error_descripcion_vacio' );
	error_regexp = document.getElementById( 'error_descripcion_regexp' );


	if(  elemento.value == "" ){
		
		if( error_vacio == null){

			if( error_regexp != null )
				div_dia_inhabil.removeChild( error_regexp );

			error_vacio = document.createElement( 'div' );
			error_vacio.setAttribute( 'class', 'error' );
			error_vacio.setAttribute( 'id', 'error_descripcion_vacio' );
			error_vacio.appendChild( document.createTextNode( 'Rellena este campo') );

			//insertar mensaje en el formulario
			div_dia_inhabil.insertBefore( error_vacio, elemento.nextSibling );
		}

	}
	else if( !alfabeto_regexp.test( elemento.value ) ){

		if( error_regexp == null){

			if( error_vacio != null )
				div_dia_inhabil.removeChild( error_vacio );

			error_regexp = document.createElement( 'div' );
			error_regexp.setAttribute( 'class', 'error' );
			error_regexp.setAttribute( 'id', 'error_descripcion_regexp' );
			error_regexp.appendChild( document.createTextNode( 'Introducir solo caracteres alfabéticos' ) );

			//insertar mensaje en el formulario
			div_dia_inhabil.insertBefore( error_regexp, elemento.nextSibling );
		}
	}
	else{
		if( error_vacio != null)
			div_dia_inhabil.removeChild( error_vacio );

		if( error_regexp != null )
			div_dia_inhabil.removeChild( error_regexp );
	}



}
function validaform(){
//	if ( document.cliente.username.value == 0 )
//		alert('Debes poner un usuario');
//	if ( ! /^\d{5}$/.test(document.cliente.cp.value) )
//		alert ('Tu codigo postal esta mal');

	//Obtener el formulario
	var form = document.getElementById('cliente');
	var input_cp = document.getElementById('cp');

	if ( ! /^\d{5}$/.test(input_cp.value) ){
		//alert ('Tu codigo postal esta mal');

		//Creo el nodo
		var div = document.createElement('div');
		//Creo el texto
		var texto = document.createTextNode('Te equivocaste en el CP');
		//Agrego el texto al nodo
		div.appendChild(texto);
		//Agregarle propiedades
		div.setAttribute('id','error_cp');
		//Agrego mi nodo en la página
		form.insertBefore(div,input_cp.nextSibling);
	}
	else{
		var div_error = document.getElementById('error_cp');

		if ( typeof(div_error) == 'object') 
			form.removeChild(div);		
	}

	return 0;
}

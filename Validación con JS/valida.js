function validaform(){
	var form = document.getElementById('cliente');
	
	/* Validacion el status */

	//Obtengo el input
	var status = document.getElementById('status');

	//Valido el input
	if ( status.selectedIndex == 0){
		//Creo el elemento con la clase error
		var div = document.createElement('div');
		div.setAttribute('class','error');
		div.setAttribute('id','status_error');
		
		//Creo el texto
		var msg = document.createTextNode('Debes seleccionar un status');

		//Al div le agrego el mensaje
		div.appendChild(msg);
		
		//Insertar el mensaje en el dom
		form.insertBefore(div,status.nextSibling);
	}

campo.checked

var regex = /^\d{5}$/
regex.test(campo.value)




}
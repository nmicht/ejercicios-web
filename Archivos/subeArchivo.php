<?php

//Recibo los archivos en $_FILES
echo '<pre>';
var_dump($_FILES);

//Revisando el tipo de archivo
$finfo = finfo_open(FILEINFO_MIME_TYPE);
var_dump(finfo_file($finfo, $_FILES['archivo']['tmp_name']));

//Muevo el archivo
if( move_uploaded_file($_FILES['archivo']['tmp_name'],
									'uploads/'.$_FILES['archivo']['name']) )
	echo "Se guardo el archivo";
else
	echo 'Hubo problemas al guardar el archivo';
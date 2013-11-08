<?php

$archivo = 'archivo.csv';

//Leer el archivo
$renglones = file($archivo);

//Separar por columnas usando por referencia
//el renglon para guardarlo en el mismo arreglo
foreach ($renglones as &$renglon) {
	$renglon = explode(',',$renglon);
}

echo '<pre>';
var_dump($renglones);
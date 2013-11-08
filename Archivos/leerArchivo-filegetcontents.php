<?php

$archivo = 'archivo.csv';

//Leer el archivo
$cadena = file_get_contents($archivo);

//Separar por renglones
$renglones = explode(PHP_EOL,$cadena);

//Separar por columnas usando por referencia
//el renglon para guardarlo en el mismo arreglo
foreach ($renglones as &$renglon) {
	$renglon = explode(',',$renglon);
}

echo '<pre>';
var_dump($renglones);
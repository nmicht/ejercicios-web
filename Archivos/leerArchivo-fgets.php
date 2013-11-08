<?php

$archivo = 'archivo.csv';

//Leer el archivo
$f = fopen ($archivo, "r");
while (! feof ($f)) {
    $renglon = fgets ($f);

    //Acumular los renglones en un arreglo
		$renglones[] = $renglon;
}
fclose ($f);

//Separar por columnas usando por referencia
//el renglon para guardarlo en el mismo arreglo
foreach ($renglones as &$renglon) {
	$renglon = explode(',',$renglon);
}

echo '<pre>';
var_dump($renglones);
<?php

$miarchivo = 'archivo.csv';
$cadena = file_get_contents($miarchivo);

$renglones = explode(PHP_EOL, $cadena);

foreach ($renglones as &$renglon) {
	$renglon = explode(',', $renglon);
}

echo '<pre>';
var_dump($cadena);

var_dump($renglones);

echo '</pre>';
?>
<?php

$miarchivo = 'archivo.csv';

$arreglo = file($miarchivo);

foreach ($arreglo as &$renglon) {
	$renglon = explode(',', $renglon);
}

echo '<pre>';

var_dump($arreglo);

echo '</pre>';
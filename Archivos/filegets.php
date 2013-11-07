<?php

$miarchivo = 'archivo.csv';

$manejador = fopen ($miarchivo, "r");
$ln= 0;
while (! feof ($manejador)) {
    $line = fgets ($manejador);
    ++$ln;
    $renglones[] = $line;
}
fclose ($manejador);

echo '<pre>';

var_dump($renglones);

echo '</pre>';
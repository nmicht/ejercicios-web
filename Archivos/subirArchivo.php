<?php

echo '<pre>';

var_dump($_FILES);

$name = $_FILES['archivo']['name'];

$r = move_uploaded_file($_FILES['archivo']['tmp_name'], 
												'/uploads/'.$name);

var_dump($r);

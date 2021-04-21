<?php
$_POST = json_decode( file_get_contents("php://input"), true ); //для работы с джейсоном 
echo var_dump($_POST);

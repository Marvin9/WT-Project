<?php
    require_once __DIR__ . '/../config/cors.php';
    require_once __DIR__ . '/../config/index.php';

    $API = new API;
    header('Content-Type: application/json');
    echo $API->SelectBlogs();
?>
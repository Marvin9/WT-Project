<?php
    require_once __DIR__ . '/../../config/cors.php';
    require_once __DIR__ . '/../../config/index.php';

    session_start();
    if (isset($_SESSION['trusted'])) {
        if (
            !isset($_POST['uname']) 
            || !isset($_POST['province'])
            || !isset($_POST['rank'])
            || !isset($_POST['fees'])
            || !isset($_POST['temp'])
            || !isset($_POST['url'])
        ) {
            echo json_encode([
                'Error' => true,
                'message' => 'Missing value(s)'
            ]);
            return;
        }
        $API = new API;
        $API->Insert(
            $_POST['uname'],
            $_POST['province'],
            $_POST['rank'],
            $_POST['fees'],
            $_POST['temp'],
            $_POST['url']
        );
        echo json_encode([
            'Success' => true
        ]);
    } else {
        echo json_encode([
            'Error' => true,
            'message' => 'Untrusted API call.'
        ]);
    }
?>
<?php
    require_once __DIR__ . '/../../config/cors.php';
    if (!isset($_POST['username']) || !isset($_POST['password'])) {
        echo json_encode([
            "Error" => true,
            "message" => 'Empty username or password.'
        ]);
        return;
    }
    $uname = $_POST['username'];
    $pass = $_POST['password'];

    if ($uname == 'admin' && $pass == 'admin') {
        session_start();
        $_SESSION['trusted'] = true;
        echo json_encode([
            "Success" => true
        ]);
    } else {
        echo json_encode(array(
            "Error" => true,
            "message" => 'Invalid Id/Password.'
        ));
    }
?>
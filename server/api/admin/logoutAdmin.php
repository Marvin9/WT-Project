<?php
    require_once __DIR__ . '/../../config/cors.php';
    session_start();
    if (isset($_SESSION['trusted'])) {
        session_destroy();
        echo json_encode([
            'Success' => true
        ]);
    }
?>
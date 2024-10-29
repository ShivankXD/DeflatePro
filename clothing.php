<?php
// clothing.php

// Database connection parameters
$host = 'localhost'; // Your database host
$dbname = 'clothing'; // Your database name
$username = 'root'; // Your database username
$password = ''; // Your database password

try {
    // Create a new PDO instance
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Query to fetch clothing data
    $stmt = $pdo->prepare("SELECT month, clothing_price_change FROM clothing_data");
    $stmt->execute();

    // Fetch all results
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return data as JSON
    header('Content-Type: application/json');
    echo json_encode($data);

} catch (PDOException $e) {
    // Handle connection errors
    echo "Connection failed: " . $e->getMessage();
}
?>

<?php
$servername = "localhost"; // Your server name
$username = "root"; // Your database username
$password = ""; // Your database password (default is empty for XAMPP)
$dbname = "data"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data with JOIN
$sql = "
    SELECT i.year, i.inflation_rate, i.cumulative_value, c.category_name
    FROM inflation_data i
    LEFT JOIN categories c ON i.category_id = c.category_id
";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
$conn->close();

// Return JSON response
header('Content-Type: application/json');
echo json_encode($data);
?>

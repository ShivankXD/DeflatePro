<?php
session_start();
$servername = "localhost";
$username = "your_user";  // Use your database username
$password = "your_password";  // Use your database password
$dbname = "mydatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            $_SESSION['user'] = $row['username'];
            header("Location: welcome.php");
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No user found.";
    }
} else {
    echo "Error: Invalid request.";
}

$conn->close();
?>

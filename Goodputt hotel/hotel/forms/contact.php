<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email from the POST data
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    // Validate the email address
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Append the email to a text file (replace with your desired storage method)
        $file = 'subscribers.txt';
        $current = file_get_contents($file);
        $current .= $email . "\n";
        file_put_contents($file, $current);

        // Send a success response
        echo json_encode(array("success" => true, "message" => "Subscription successful for $email"));
    } else {
        // Send a response indicating invalid email
        echo json_encode(array("success" => false, "message" => "Invalid email address"));
    }
} else {
    // Send a response indicating method not allowed
    http_response_code(405);
    echo json_encode(array("success" => false, "message" => "Method Not Allowed"));
}
?>

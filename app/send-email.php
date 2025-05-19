<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'mail.internativetech.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'contact@internativetech.com';
        $mail->Password = '@S?ItGIX?@Ri';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Recipients
        $mail->setFrom('contact@internativetech.com', 'Website Contact Form');
        $mail->addAddress('contact@internativetech.com');

        // Add this before using $_POST values
        $input = json_decode(file_get_contents("php://input"), true);

        $name = $input['name'] ?? '';
        $email = $input['email'] ?? '';
        $phone = $input['phone'] ?? '';
        $subject = $input['subject'] ?? '';
        $message = $input['message'] ?? '';

        // Content
        $mail->isHTML(false);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage:\n$message";


        $mail->send();
        echo json_encode(['status' => 'success']);

    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
    }
} else {
    http_response_code(403);
    echo json_encode(['status' => 'forbidden']);
}
?>
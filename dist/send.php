<?php
/*
 * Form mail and send it to the mailhog. ( Tried to use SMTP gmail server but has server connection error)
 * */

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ( $_SERVER[ "REQUEST_METHOD" ] == "POST" ) {
    $mail = new PHPMailer(true);
    $mail -> CharSet = 'UTF-8';
    $mail -> isHTML(true);
    $mail -> setFrom('savelyev7979@gmail.com', 'Ihor Saveliev');
    $mail -> addAddress($_POST['email']);

    $mail->isSMTP();
//    $mail -> Host = 'smtp.gmail.com';
//    $mail -> SMTPAuth = true;
//    $mail -> Username = 'savelyev7979@gmail.com';
//    $mail -> Password = 'apnz jlyk zvaj jvlb';
//    $mail -> SMTPSecure = 'tls';
//    $mail -> Port = 587;

    $mail -> Host = 'mailhog';
    $mail -> Port = 1025;


    $mail -> Subject = 'Sent from Sample Form by Ihor Saveliev';
    $mail -> Body = "Name: " . $_POST['name'] . "\n" .
        "Email: " . $_POST['email'] . "\n" .
        "Phone: " . $_POST['phone'] . "\n" .
        "Password: " . $_POST['password'] . "\n" .
        "Country: " . $_POST['country'] . "\n" .
        "Checkbox: " . $_POST['checkbox'];

    $mail -> send();

}
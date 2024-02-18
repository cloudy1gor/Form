<?php
/*
 * Form mail and send it to the mailhog. ( Tried to use SMTP gmail )
 * */

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

if ( $_SERVER[ "REQUEST_METHOD" ] == "POST" ) {
    // Send data to the user email
    $mail = new PHPMailer(true);
    $mail -> CharSet = 'UTF-8';
    $mail -> isHTML(true);
    $mail -> setLanguage('en', 'phpmailer/language/');
    $mail -> setFrom('savelyev7979@gmail.com', 'Ihor Saveliev');
    $mail -> addAddress($_POST['email']);

    $mail -> isSMTP();
    $mail -> SMTPAuth = true;
    $mail -> Host = 'smtp.gmail.com';
    $mail -> Username = 'savelyev7979@gmail.com';
    $mail -> Password = 'apnzjlykzvajjvlb';
    $mail -> SMTPSecure = 'SSl';
    $mail -> Port = 465;

    $mail -> Subject = 'Sent from Sample Form by Ihor Saveliev';
    $mail -> Body = "Name: " . $_POST['name'] . "\n" .
        "Email: " . $_POST['email'] . "\n" .
        "Phone: " . $_POST['phone'] . "\n" .
        "Password: " . $_POST['password'] . "\n" .
        "Country: " . $_POST['country'] . "\n" .
        "Checkbox: " . $_POST['checkbox'];


    // Send to the local mail server MailHog
    $hogMail = new PHPMailer(true);
    $hogMail -> CharSet = 'UTF-8';
    $hogMail -> isHTML(true);
    $hogMail -> setLanguage('en', 'phpmailer/language/');
    $hogMail -> addAddress($_POST['email']);
    $hogMail -> setFrom('savelyev7979@gmail.com', 'Ihor Saveliev');

    $hogMail -> isSMTP();

    $hogMail -> Host = 'mailhog';
    $hogMail -> Port = 1025;

    $hogMail -> Subject = 'Sent from Sample Form by Ihor Saveliev';
    $hogMail -> Body = "Name: " . $_POST['name'] . "\n" .
        "Email: " . $_POST['email'] . "\n" .
        "Phone: " . $_POST['phone'] . "\n" .
        "Password: " . $_POST['password'] . "\n" .
        "Country: " . $_POST['country'] . "\n" .
        "Checkbox: " . $_POST['checkbox'];

    $hogMail -> send();
    $mail -> send();
    $hogMail -> smtpClose();
    $mail -> smtpClose();

}
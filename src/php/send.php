<?php
if ( $_SERVER[ "REQUEST_METHOD" ] == "POST" ) {
    // Debug
    echo "<pre>";
    print_r($_POST);
    echo "<pre>";

    // Get values form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $country = $_POST['country'];
    $checkbox = $_POST['checkbox'];

    // Create the massage
    $to = $email;
    $subject = "Sent from Sample Form by Ihor Saveliev";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nPassword: $password\nCountry: $checkbox\nCheckbox";
    $headers = "From savelyev7979@gmail.com";

    // Sent to $email using mail() method.
    if ( mail( $to, $subject, $message, $headers ) ) {
        echo "Form submitted successfully, you need to check your email.";
    } else {
        echo "Failed to submit.";
    }
} else {
    echo "Error!";
}
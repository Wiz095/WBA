<?php
if (! empty($_POST["send"])) {
    $name = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    
    $toEmail ="wisman.tg@gmail.com";
    $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";
    
    if (! mail($toEmail, $subject, $message, $mailHeaders)) {
?>
    <div id="success">Your contact information is received successfully!</div>

<?php
    }
}
?>
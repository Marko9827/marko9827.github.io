<?php

$to_email = 'marko.supergun@gmail.com';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: noreply @ company . com';

// name 
/* ./?pages=email-send&company=testcompany&mobile=38143143&name=neko&email=marko.supergun@gmail.com&message=testporuka

*/
/*
$message = "Company: \n " + $_GET['company'] + "\n \n" +
    "Name: \n" + $_GET['name'] + "\n \n" +
    "Email:" + $_GET['email'] + "\n \n" +
    "Message:" + $_GET['message'];


if (!empty($_GET['email'])) {

    if (mail($to_email, $_GET['email'], "test")) {
        echo "Message successfully sent!";
    } else {
        echo "Message delivery failed...";
    }
}
*/








 
//define the receiver of the email
$to = 'marko.supergun@gmail.com';
//define the subject of the email
$subject = 'marko.supergun@gmail.com';
//define the message to be sent. 
$message = "Hello World!\n\nThis is my mail.";
//define the headers we want passed. 
$header = "From: me@localhost.com";
//send the email
$mail_sent = mail( $to, $subject, $message);
//if the message is sent successfully print "Mail sent". Otherwise print "Mail failed" 

echo $mail_sent ? "Mail sent" : "Mail failed";
 
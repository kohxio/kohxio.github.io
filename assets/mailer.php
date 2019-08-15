<?php

if($_REQUEST['send']){

    $messageus = file_get_contents("receive_email.html");
    $messageuser = file_get_contents("email.html");
    $messageus = str_replace(['{{fullname}}','{{phone}}','{{email}}','{{message}}'],[$_REQUEST['fullname'],$_REQUEST['email'],$_REQUEST['phone'],$_REQUEST['message']] , $messageus);

    $user_email = $_REQUEST['email'];//user email address
    $user_subject = "Thank You For contact us ";

    $to = "testproject@gmail.com";
    $subject     = "Contact User";
    $message = "<b>".$_REQUEST['fullname'].".</b>";
    $message .= "<b>".$_REQUEST['email']."</b>";
    $message .= "<b>".$_REQUEST['phone']."</b>";
    $message .= "<p>".$_REQUEST['message']."</p>";

    $header = "From:testproject@gmail.com \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";

    echo $retval = mail ($to,$subject,$messageus,$header);

    mail ($user_email,$user_subject,$messageuser,$header);

    if( $retval == true ) {
        return  1;
        header('Location: index.html');
        exit;
    }else {
        return   2;
        exit;
        echo "Message could not be sent...";
    }
}
?>
  
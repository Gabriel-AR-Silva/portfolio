<?php

if( $_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit'])) 
{
    $nome = filter_input(INPUT_POST,'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST,'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST,'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $description = filter_input(INPUT_POST,'description', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    $to = 'gabrielsilva.webdeveloper@gmail.com';

    $body = "Nome: $nome \n\r Email: $email \n\r Conteúdo: $description";

    $head = "From: $email\r\n" .
    "Reply-to: $to\r\n" .
    "X-Mailer: PHP/" . phpversion();

    if(mail($to, $subject, $body, $head)) {
        header("location: ./index.html");
        exit();
    } else {
        header("location: ./index.html");
        exit();
    }
}

header("location: ./index.html");
exit();

    

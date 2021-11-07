<?php

    $userNome= $_POST["userNome"];
    $userUser= $_POST["userUser"]; 
    $userEmail= $_POST["userEmail"]; 
    $userSexo= $_POST["userSexo"]; 
    $userSenha= $_POST["userSenha"]; 


    $conexao= mysqli_connect("localhost:8889", "root", "root", "bancotdep");

    mysqli_query($conexao, "INSERT INTO usuario (userNome, userUser, userEmail, userSexo, userSenha) 
                            VALUES ('$userNome', '$userUser', '$userEmail', '$userSexo', '$userSenha')");



?>
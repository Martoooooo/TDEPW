<?php

    $conexao= mysqli_connect("localhost:3306", "root", "", "bancotdep");

    mysqli_query($conexao, "INSERT INTO usuario (userNome, userUser, userEmail, userSexo, userSenha) 
                            VALUES ('José', 'zé', 'jose@outlook.com', 'm', '123456')");



?>
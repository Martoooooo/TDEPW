<?php

    $conexao= mysqli_connect("localhost:3306", "root", "", "bancotdep");

    $resultado= mysqli_query($conexao, "SELECT * FROM usuario");

    $i= 0;

    while($linha= mysqli_fetch_assoc($resultado)){

        $retorno[$i]["userNome"]= $linha["userNome"];
        $retorno[$i]["userUser"]= $linha["userUser"];
        $retorno[$i]["userEmail"]= $linha["userEmail"];
        $retorno[$i]["userSexo"]= $linha["userSexo"];
        $retorno[$i]["userSenha"]= $linha["userSenha"];
        
        $i++;

    }

?>
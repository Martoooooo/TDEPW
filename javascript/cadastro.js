$(document).ready(function(){

    fLocalEventosClick();


});

function fLocalEventosClick(){

    $("#bGravar").click(function(){
        
        var nome=document.getElementById('inputNome').value;
        var user=document.getElementById('inputUsuario').value;
        var email=document.getElementById('inputEmail').value;
        var sexo= document.getElementById('inputSexo').value;

        var senha= document.getElementById('inputSenha').value;
        var confSenha = document.getElementById('inputConfSenha').value;

        var verificacao= document.getElementById('inputConfNatan').value;
       
    
        if(nome == ''){
            document.getElementById('inputNome').style.borderColor= '#FF0000';
            $('#inputConfNatan').val('');

        }else{
            document.getElementById('inputNome').style.borderColor= '#808080';
        }
        
        if(user == ''){
            document.getElementById('inputUsuario').style.borderColor= '#FF0000';
            $('#inputConfNatan').val('');

        }else{
            document.getElementById('inputUsuario').style.borderColor= '#808080';
        }
    
        if(email == ''){
            document.getElementById('inputEmail').style.borderColor= '#FF0000';
            $('#inputConfNatan').val('');

        }else{
            document.getElementById('inputEmail').style.borderColor= '#808080';
        }

        if(sexo == ''){
            document.getElementById('inputSexo').style.borderColor= '#FF0000';
            $('#inputConfNatan').val('');

        }else{
            document.getElementById('inputSexo').style.borderColor= '#808080';
        }

        if (senha == ''){
            document.getElementById('inputSenha').style.borderColor= '#FF0000';
            $('#inputConfNatan').val('');

        }else{

            document.getElementById('inputSenha').style.borderColor= '#808080';
            $('#inputConfNatan').val('');

            if (senha != confSenha){

                
                $('#inputConfSenha').val('');
                document.getElementById('error').style.display = 'block';
    
              
            }else{
    
                if (verificacao != 'natan'){
    
                    $('#inputConfNatan').val('');
                    
                    document.getElementById('inputConfNatan').style.borderColor= '#FF0000';
                    document.getElementById('error').innerHTML = "<h6> falha na verificação </h6>";
                    document.getElementById('error').style.display= 'block';
    
                }else{
    
                    fLocalComunicaServidor("inserir");
                    document.getElementById('error').innerHTML = "<h6> cadastro realizado com sucesso, redirecionando... </h6>";
                    document.getElementById('error').style.display= 'block';
                    location.href="../index.html"
                    
                }
    
            }
    
        }
        
        return false;
    });

    $("#bListar").click(function(){
        fLocalComunicaServidor("listar");

        return false;
    });
}

function fLocalComunicaServidor(arquivo){

    var valores= $("form").serialize();

    $.ajax({
        type: "POST",
        dataType: "json",
        data: valores,
        url: "../php/" + arquivo + ".php",
        success: function(retorno){
            
        }
    })

}
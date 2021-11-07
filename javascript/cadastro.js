$(document).ready(function(){
    fLocalEventosClick();

});

function fLocalEventosClick(){

    $("#bGravar").click(function(){

        alert("gravar");
        return false;
    })
    $("#bListar").click(function(){
        
        alert("listar");
        return false;
    })
}
$(function() {
    var operação = "A";
    var indice_selecionado = -1;
    var tbUsuarios = localStorage.getItem("tbUsuarios");
    tbUsuarios = JSON.parse(tbUsuarios);
    if (tbUsuarios = null)
        tbUsuarios = [];

})

function Add() {
    var usuario = JSON.stringify({
        email: $("email").val(),
        usuario: $("name").val(),
        senha: $("password").val(),
        tipo: $("tipo").val(),
        frequencia: $("Freq").val(),
        idade: $("Id").val()
    });
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    alert("Perfil criado")
    operação = "A";
    return true;

}
$("#cadastro").on("submite", function() {
    if (operação == "A")
        return Add();
    else
        return alert("Cadastro já efetuado, faça login.");
})

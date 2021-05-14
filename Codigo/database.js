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
        email: $("#email").val(),
        usuario: $("#name").val(),
        senha: $("#password").val(),
        tipo: $("#tipo").val(),
        frequencia: $("#Freq").val(),
        idade: $("#Id").val()
    });
    tbUsuarios.push(usuario);
    localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
    alert("Registro adicionado.");
    operação = "A";
    return true;

}
$("#cadastro").on("submite", function() {
    if (operação == "A")
        return Add();
    else
        return alert("Cadastro já efetuado, faça login.");
})

function Adicionar() {
    var cliente = JSON.stringify({
        Codigo: $("#txtCodigo").val(),
        Nome: $("#txtNome").val(),
        Telefone: $("#txtTelefone").val(),
        Email: $("#txtEmail").val()
    });
    tbClientes.push(cliente);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro adicionado.");
    return true;
}
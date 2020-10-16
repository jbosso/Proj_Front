function autenticar(){
    var txtUser = document.getElementById("txtUser").value;
    var txtSenha = document.getElementById("txtSenha").value;
    console.log("Digitou = "+txtUser+" / "+txtSenha);

    var msgBody = {
        racf : txtUser,
        funcional : txtUser,
        senha : txtSenha
    }
    console.log(msgBody)

    var cabecalho = {
        method : "POST", 
        body   : JSON.stringify(msgBody),
        headers : {
            "Content-type":"application/json"
            }
        }

    fetch("http://localhost:8088/login", cabecalho)
       .then(res => trataResposta(res));
}

function alertErroF()
{
alert("Usuario Invalido");
}

function alertErroS()
{
alert("Senha Invalida");
}

function trataResposta(res){
    if (res.status == 200){
        res.json().then(objeto => logar(objeto));
    }
    else if (res.status == 401){
        document.getElementById("msgERRO").innerHTML = alertErroS();
    }
    else if (res.status == 404){
        document.getElementById("msgERRO").innerHTML = alertErroF();
    }
}

function logar(objeto){
    var objSTR = JSON.stringify(objeto);
    localStorage.setItem("ScheduleUSER",objSTR);
    window.location = "index.html";
}

function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
{
autenticar();
}
else
return true;
}
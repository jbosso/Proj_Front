function carregainfocadastro(){
    var userStr = localStorage.getItem("ScheduleUSER");
    if (!userStr){
        window.location = "login.html";
    }

    var user = JSON.parse(userStr); // só tô convertendo de STRING para OBJETO (pra facilitar)

    var imgUser  = `<img src="${user.linkFoto}" width="100%">`;

    var infoUser_Name = `<h3>${user.nome}</h3>`;
    var infoUser_email = `<h6> <strong> Email: </strong> ${user.email}</h6>`;
    var infoUser_funcional = `<h6> <strong> Funcional: </strong> ${user.funcional}</h6>`;
    var infoUser_racf = `<h6> <strong> Racf: </strong> ${user.racf}</h6>`;

    document.getElementById("fotoUser").innerHTML = imgUser;
    document.getElementById("infoUser_Name").innerHTML = infoUser_Name;
    document.getElementById("infoUser_email").innerHTML = infoUser_email;
    document.getElementById("infoUser_funcional").innerHTML = infoUser_funcional;
    document.getElementById("infoUser_racf").innerHTML = infoUser_racf;

    fetch("http://localhost:8088/agencias")
       .then(res => res.json())
       .then(lista => preencheComboBox(lista))
}

function preencheComboBox(lista){

    var txtCombo = `<select id="txtAgencia" class="form-control">`;

    for (i=0; i<lista.length; i++){
        var agencia = lista[i];
        txtCombo = txtCombo + `<option value=${agencia.id}>${agencia.numero} - ${agencia.nome}</option>`;
    }
    txtCombo = txtCombo + `</select>`;
    document.getElementById("divAgencia").innerHTML = txtCombo;
}

function cadastrarFeriado(){
    var txtAgencia = document.getElementById("txtAgencia").value;
    var txtNome    = document.getElementById("txtNome").value;
    var txtDataIni = document.getElementById("txtDataInicial").value;
    var txtDataFim = document.getElementById("txtDataFim").value;

    var msgBody = {
        nome : txtNome,
        dataInicio : txtDataIni,
        dataFim    : txtDataFim,
        agencia : {
            id : parseInt(txtAgencia)
        }
    };

    var cabecalho = {
        method : "POST",
        body   : JSON.stringify(msgBody),
        headers : {
            "content-type" : "application/json"
        }
    };

    fetch("http://localhost:8088/feriados/novo", cabecalho)
        .then(res => trataResultado(res));
}


function trataResultado(res){
    if (res.status == 201) {
        alert("Feriado Cadastrado com sucesso!");
    }
    else{
        alert("ERRO ao cadastrar Feriado!");
        document.getElementById("msgERRO").innerHTML = "Existe erros no formulario de cadastro";
    }
}

function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
{
cadastrarFeriado();
}
else
return true;
}

function logout(){
    localStorage.removeItem("ScheduleUSER");
    window.location = "login.html";
}
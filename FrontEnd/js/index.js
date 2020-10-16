function carregainfo(){
    var strUser = localStorage.getItem("ScheduleUSER");
    if (!strUser){  // se as infos do usuário não existirem no LocalStorage, sinal que não foi logado, volta pro INDEX
        window.location = "login.html";
    }

    var user = JSON.parse(strUser); // só tô convertendo de STRING para OBJETO (pra facilitar)

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
}

function logout(){
    localStorage.removeItem("ScheduleUSER");
    window.location = "login.html";
}
function abrirAba(id, botao){
    document.querySelectorAll(".aba").forEach(aba => {aba.classList.remove("ativa")});

    document.getElementById(id).classList.add("ativa")

    document.querySelectorAll(".menuBttn").forEach(menuBotao => {
        menuBotao.classList.remove("ativo");
    });

    if(botao){
        botao.classList.add("ativo");
    }
    
    document.getElementById("sidebar").classList.remove("aberta")

    window.scrollTo({top: 0})
}


function abrirSidebar(){
    document.getElementById("sidebar").classList.toggle("aberta")
}


function modoEscuro(){
    document.body.classList.toggle("dark")
}
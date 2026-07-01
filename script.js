function abrirAba(id){
    document.querySelectorAll(".aba").forEach(aba => {aba.classList.remove("ativa")});

    document.getElementById(id).classList.add("ativa")
    
    document.getElementById("sidebar").classList.remove("aberta")

    window.scrollTo({top: 0})
}


function abrirSidebar(){
    document.getElementById("sidebar").classList.toggle("aberta")
}


function modoEscuro(){
    document.body.classList.toggle("dark")
}
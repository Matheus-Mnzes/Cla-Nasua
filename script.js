var nome = prompt("Qual o seu nome? ")
document.querySelector('strong#nome').innerHTML = `Seja bem vindo ao site do Clã Nasua, ${nome}`


function abrirAba(id){
    document.querySelectorAll(".aba").forEach(aba => {aba.classList.remove("ativa")});

    document.getElementById(id).classList.add("ativa")
}


function abrirSidebar(){
    document.getElementById("sidebar").classList.toggle("aberta")
}


function modoEscuro(){
    document.body.classList.toggle("dark")
}
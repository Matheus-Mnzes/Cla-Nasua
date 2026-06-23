var nome = prompt("Qual o seu nome? ")
document.querySelector('strong#nome').innerHTML = `Seja bem vindo ao clã nasua, ${nome}`


function abrirAba(id){
    document.querySelectorAll(".aba").forEach(aba => {aba.classList.remove("ativa")});

    document.getElementById(id).classList.add("ativa")
}
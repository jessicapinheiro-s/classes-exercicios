import { CarroSedan } from "./carro.js";
import { CarroSUV } from "./carro.js";
import { Caminhao } from "./caminhao.js"

document.getElementById('inEnviar').addEventListener('click', function (event) {
    //evitar que a pagina recarregue poiso button é do tipo submit ou está dentro de um form 
    event.preventDefault()
    let inVeiculoNome = document.getElementById('inVeiculo').value.toLowerCase();
    let inVeiculoValor = document.getElementById('inVeiculoValor').value;

    if (verificarInput(inVeiculoNome, inVeiculoValor) == 'invalido') {
        abrirModal();
        console.log('Algum campo não foi preenchido');
        return;
    }

    if (checarOpcao() == 'Carro') {
        displayBoxCarro();
    }

})

//verificar se algum input está vazio
function verificarInput(Vn, Vt) {
    if (Vn == '' || Vt == '') {
        return 'invalido';
    }
}

//abrir modal
function abrirModal() {
    document.getElementById('background-modal').style.display = 'flex';
}

//deixa o texto do modal dinamico
/*function txtModal(a, b) {
    let p = document.getElementById('txtModal');
    let txt = document.createTextNode(a);

    let button = document.createElement('button');
    button.setAttribute('Id', 'fecharModal');
    let txtButton = document.createTextNode(b);

    p.appendChild(txt);
    modal.appendChild(p);
    button.appendChild(txtButton);
    modal.appendChild(button);
}*/

function checarOpcao() {
    let opOne = document.getElementById('tipo');
    let valorOpcao = opOne.options[opOne.selectedIndex].value;
    return valorOpcao;
}

function criarCheck(suv) {
    let div = document.getElementById('opcao-container');
    let txt = Document.createTextNode(suv);
}
//fehcar modal
document.getElementById('fecharModal').addEventListener('click',function () {
    document.getElementById('background-modal').style.display = 'none';
})

function instCarro(){
    let instanciaCarro = new CarroSedan(inVeiculoNome, inVeiculoTipo);
}

function displayBoxCarro(){
    document.getElementById('container-Carro').style.display= 'flex'
}
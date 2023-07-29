document.getElementById('inEnviar').addEventListener('click', function (event) {
    //evitar que a pagina recarregue poiso button é do tipo submit ou está dentro de um form 
    event.preventDefault()
    let inVeiculoNome = document.getElementById('inVeiculo').value.toLowerCase();
    let inVeiculoTipo = document.getElementById('inVeiculoTipo').value.toLowerCase();

    if (verificarInput(inVeiculoNome, inVeiculoTipo) == 'invalido') {
        abrirModal();
        txtModal('Preencha os campos corretamente', 'Fechar');
        console.log('Algum campo não foi preenchido');
    }

    if(checarOpcao() == 'Carro'){
    
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
function txtModal(a, b) {
    let p = document.getElementById('txtModal');
    let txt = document.createTextNode(a);

    let button = document.createElement('button');
    button.setAttribute('Id', 'fecharModal');
    let txtButton = document.createTextNode(b);

    //fehcar modal
    button.onclick = function (){
        document.getElementById('background-modal').style.display = 'none';
    
    }
    p.appendChild(txt);
    modal.appendChild(p);
    button.appendChild(txtButton);
    modal.appendChild(button);
}

function checarOpcao() {
    let opOne = document.getElementById('tipo');
    let valorOpcao = opOne.options[opOne.selectedIndex].value;
    return valorOpcao;
}


function criarCheck(suv){
    let div = document.getElementById('opcao-container');
    let txt = Document.createTextNode(suv);
}




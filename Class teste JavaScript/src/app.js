import { Fruta } from './fruta.js'
import { Citrica } from './citrica.js'
import { Amarga } from './amarga.js'
import { Doce } from './doce.js'

let urlApiImg = 'https://api.pexels.com/v1/';
document.getElementById('idEnviar').addEventListener('click', function () {
    let inTam = document.getElementById('inTam').value;
    let inPeso = document.getElementById('inPeso').value;
    let inCor = document.getElementById('inCor').value;
    let inGosto = document.getElementById('inGosto').value;
    let inNome = document.getElementById('inNome').value;
    
    verificarCampos(inTam, inPeso, inCor, inGosto, inNome);
    let linkApi = api(inNome);

    let newFrutaa = new Fruta(inTam, inCor, inGosto, inPeso, inNome);
    console.log(newFrutaa);

    checarOpcao();

    if (checarOpcao() == 'Citrica') {
        Citrico(inTam, inCor, inGosto, inPeso, inNome);
    } else if (checarOpcao() == 'Amarga') {
        Amargo(inTam, inCor, inGosto, inPeso, inNome);
    } else {
        DoceFuncao(inTam, inCor, inGosto, inPeso, inNome);
    }

})



function checarOpcao() {
    let opOne = document.getElementById('tipo');
    let valorOpcao = opOne.options[opOne.selectedIndex].value;
    return valorOpcao;
}
function verificarCampos(t, p, c, g, n) {
    let flag = '';
    while (flag == '') {
        if (t == '' || p == '' || c == '' || g == '' || n == '') {
            console.log('erro, algum campo esta vazio');
            return;
        } else if (t != '' && p != '' && c != '' && g != '' && n != '') {
            flag = 'preenchido';
            console.log('preenchido');
            break;
        }
    }

}

function Citrico(t, p, c, g, n) {
    let newCitrica = new Citrica(t, p, c, g, n);
    console.log(newCitrica);
    console.log(newCitrica.retornar());
    return newCitrica;
}

function Amargo(t, p, c, g, n) {
    let newAmargo = new Amarga(t, p, c, g, n);
    console.log(newAmargo);
    console.log(newAmargo.retornar());
    return newAmargo;
}
 
function DoceFuncao(t, p, c, g, n) {
    let newDoce = new Doce(t, p, c, g, n);
    console.log(newDoce);
    console.log(newDoce.retornar());
    return newDoce;
}

function textAjuste(t){
    let textoAjustado = t.toLowerCase();
    return textoAjustado;
}

function api(txt){
    let link = urlApiImg.concat(textAjuste(txt));
}


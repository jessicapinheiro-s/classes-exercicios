import { Veiculo } from "./veiculo.js";

export class Caminhao extends Veiculo{
    nome;
    tamanho;
    cor;
    
    constructor(nome,tamanho,cor){
        this.nome = nome;
        this.tamanho = tamanho;
        this.cor = cor;
    }

    retornarTamanho(){
        return 'Tamanho do veiculo' + this.tamanho;
    }
}
class CaminhaoCavalo extends Caminhao {
    nome;
    tipoCarro;
    tamanho;
    cor;
    tipo;
    
    constructor(nome,tipoCarro,tamanho,cor){
        this.nome = nome;
        this.tipoCarro = tipoCarro;
        this.tamanho = tamanho;
        this.cor = cor;
    }
}



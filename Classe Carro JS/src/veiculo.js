export class Veiculo {
    nome;
    valorCarro;
    constructor(nome, valorCarro){
        this.nome = nome;
        this.valorCarro = valorCarro;
    }

    retornarNome(){
        return 'Nome do veiculo' + this.nome;
    }

    retornarTipo(){
        return 'O valor desse caro é: '+ this.valorCarro; 
    }
}
export class Veiculo {
    nome;
    tipoCarro;
    constructor(nome, tipoCarro){
        this.nome = nome;
        this.tipoCarro = tipoCarro;
    }

    retornarNome(){
        return 'Nome do veiculo' + this.nome;
    }

    retornarTipo(){
        return 'O tipo desse caro é: '+ this.tipoCarro; 
    }
}
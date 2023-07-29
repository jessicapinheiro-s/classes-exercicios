import { Veiculo } from "./Veiculo.js";

class Carro extends Veiculo{
    nome;
    altura;
    comprimento;
    constructor(nome,altura,comprimento){
        this.nome = nome;
        this.altura = altura;
        this.comprimento = comprimento;
    }

}
class CarroSedan extends Carro{
    nome;
    altura;
    comprimento;
    tipoCarro;
    constructor(nome, tipoCarro,altura,comprimento){
        this.nome = nome;
        this.tipoCarro = tipoCarro;
        this.altura = altura;
        this.comprimento = comprimento;
    }
}
class CarroSUV extends Carro{
    nome;
    altura;
    comprimento;
    tipoCarro;
    constructor(nome, tipoCarro,altura,comprimento){
        this.nome = nome;
        this.tipoCarro = tipoCarro;
        this.altura = altura;
        this.comprimento = comprimento;
    }
    
    
}

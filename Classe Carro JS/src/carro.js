import { Veiculo } from "./veiculo.js";

export class Carro extends Veiculo{
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
    valorCarro;
    constructor(nome, valorCarro,altura,comprimento){
        this.nome = nome;
        this.valorCarro = valorCarro;
        this.altura = altura;
        this.comprimento = comprimento;
    }
}
class CarroSUV extends Carro{
    nome;
    altura;
    comprimento;
    valorCarro;
    constructor(nome, valorCarro,altura,comprimento){
        this.nome = nome;
        this.valorCarro = valorCarro;
        this.altura = altura;
        this.comprimento = comprimento;
    }
    
    
}

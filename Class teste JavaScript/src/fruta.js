export class Fruta {
    constructor(tamanho, cor, gosto, peso, nome){
        this.tamanho = tamanho
        this.cor = cor
        this.gosto = gosto
        this.peso = peso
        this.nome = nome
    }

    calcularPeso(){
        const total = this.peso * this.tamanho;
        return total;
    }
    retornar(){
        return this.calcularPeso()
    }

}
import { Fruta } from "./fruta.js";

export class Doce extends Fruta  {
    retornar(){
        console.log(this.nome + 'doce');
    }
}
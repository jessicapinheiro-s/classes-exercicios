import { Fruta } from "./fruta.js";

export class Citrica extends Fruta  {
    retornar(){
        console.log(this.nome + 'citrica')
    }
}
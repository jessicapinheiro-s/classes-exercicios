import { Fruta } from "./fruta.js";

export class Amarga extends Fruta  {
    retornar(){
        console.log(this.nome + 'amarga')
    }
}
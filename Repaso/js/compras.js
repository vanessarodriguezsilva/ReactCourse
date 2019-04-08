import { Work } from "./tareas.js";
// Extension de classes
export default class ComprasPendientes extends Work{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar(){
        return super.mostrar().concat(` y la cantidad de ${this.cantidad}`);
    }
    nuevoMetodo(){
        return `Nuevo metodo`;
    }
}
//Compras
export var compra1 = new ComprasPendientes('Maquillaje', 'Baja', 2);
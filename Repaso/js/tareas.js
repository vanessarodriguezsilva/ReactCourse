//Escribir Classes (is like a house map, you can build many houses with this map)
    export default class Work{
        constructor(nombre, prioridad){
            this.nombre = nombre;
            this.prioridad = prioridad;
        }
        mostrar(){
            return `${this.nombre} tiene una prioridad ${this.prioridad}`;
        }
    }
// crear los objetos
    let work1 = new Work('Aprender Javascript', 'Alta');

//Exportar variables
    export {work1, Work};

//Exportar funciones
    export const tareaCompletada = () => {
        console.log('La tarea ha sido completada');
    }
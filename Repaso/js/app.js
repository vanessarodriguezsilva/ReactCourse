/**
 * Funcion para correr uso de elementos del html
 */

    this.onload = function(){
        concatenar_multiples_lineas();
        arreglos();
    }

/**
 * Variables
 * 
 * 1. tipos que existen: var, const, let
 * Var -> variable global que se puede modificar.
 * Const -> variable constante que unicamente se inicializa.
 * Let -> funciona como var pero por bloques.
 * 
 */

    var var_ = 5;
    let let_ = 4;
    const const_ = 3;

    console.log('inicial',var_);
    console.log('inicial',const_);
    console.log('inicial',let_);

    if(var_ == 5){
        let let_ = 6;
        var var_ = 7;
        console.log('en bloque',var_);
        console.log('en bloque',const_);
        console.log('en bloque',let_);  
    }

    console.log('final',var_);
    console.log('final',const_);
    console.log('final',let_);

/**
 * Scope
 * 
 * Es determinar si ina variable esta disponible o no  (let, cosnt, var)
 */

    let musica = 'Rock';
    if(musica){
        let musica = 'Regge';
        console.log(musica);
    }
    console.log(musica);

/**
 * Template Strings
 */

    const nombre = 'vanessa';
    const trabajo = 'Desarrolladora web';
  
// concatenar 
  console.log('Nombre: '+nombre+', Trabajo: '+trabajo);
  console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//concatenar con múltiples lineas
    function concatenar_multiples_lineas(){
        const contenedorApp = document.querySelector('#app');
        let html = '<ul>'+
                        '<li> Nombre: '+nombre+'</li>'+
                        '<li> Trabajo: '+trabajo+'</li>'+
                    '</ul>';
        contenedorApp.innerHTML = html;
        console.log(contenedorApp);
    }

/**
 * Funciones
 * Function declaretion
 */
    saludar('Vanessa');
    function saludar(nombre = 'persona'){
        console.log(`Bienvenido ${nombre}`);
    }

/**
 * Funcion expression
 */

    const cliente = function(nombreCliente){
        console.log(`Mostrando datos del ciente: ${nombreCliente}`);
    }
    cliente(`Juan`);

/**
 * Parametros por default en las funciones
 */

    function actividad(nombre = 'Walter White',actividad = 'Enseñar Quimica'){
        console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
    }

    const actividades = function (nombre = 'Walter White',actividad = 'Enseñar Quimica'){
        console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
    }

    actividad();
    actividades( undefined ,'Pintar');

/**
 * Arrow functions
 */

    let viajando = (destino = 'Barcelona', duracion) => {
        return `Viajando a la ciudad de: ${destino} por ${duracion}`;
    }

    let viajandoa = (destino = 'Barcelona', duracion) => `Viajando a la ciudad de: ${destino} por ${duracion}`;


 let viaje = viajandoa(undefined, '15 dias');
 console.log(viaje);
 console.log(viajando('Paris','3 dias'));

/**
 * Objetos
 * Object Literal
 */

 let persona = 'Juan';
 let profesion = 'Desarrollador web';

 console.log(persona);
 console.log(profesion);

 const persona1 = {
     nombre:'Juan',
     profesion: 'Desarrollador web'
 }

 const persona2 = {
    nombre:'Juan',
    profesion: 'Diseñador web'
}

 console.log(persona1.nombre, persona2.profesion, persona);

// Object Constructor

    function Tarea(tarea, prioridad){
        this.tarea = tarea;
        this.prioridad = prioridad;
    }
    //Crear una nueva tarea
    const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
    const tarea2 = new Tarea('Preparar cafe', 'Media');
    const tarea3 = new Tarea('Pasear al perro', 'Urgente');
    const tarea4 = new Tarea('Cocinar la cena', 'Baja');

    console.log(tarea1, tarea2, tarea3, tarea4);

/**
 * Prototypes
 */

    function mostrasrInformacionTarea(tarea, prioridad){
        return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
    }
    const mostrarInfo = mostrasrInformacionTarea('Aprender JavaScript y React', 'Urgente');
    console.log(mostrarInfo);

    //Agregar un prototype a tarea: Esto permite atar las funciones a objetos especificos. 
    Tarea.prototype.mostrasrInformacionTarea = function(){
        return `La tarea ${this.tarea} tiene una urgencia de ${this.prioridad}`;
    } 
    console.log(tarea4.mostrasrInformacionTarea());

/**
 * Objects Destructuring 
 * Es extraer valores de un objeto
 */

    const aprendiendoJS = {
        version: {
            nueva: 'ES6',
            anterior: 'ES5'
        },
        frameworks: ['React', 'VueJS', 'AngularJS']
    };

    console.log(aprendiendoJS);

    //forma antigua
    let version = aprendiendoJS.version.nueva;
    let framework = aprendiendoJS.frameworks[1];
    console.log(version, framework);

    //forma nueva
    let {anterior} = aprendiendoJS.version;
    console.log(anterior);

/**
 * Object literal enhancement
 * Se encarga de unir todas las variables en una (declaracion de un objeto de forma mas sencilla)
 */
    const banda = 'Metallica';
    const genero = 'Heavy Metal';
    const canciones = ['Master of puppets', 'Seek & destroy', 'Enter Sandman'];
    const grupoMusical = {banda, genero, canciones};
    console.log(grupoMusical);

/**
 * Métodos o funciones en un objeto
 */
    const humano = {
        nombre: 'Juan',
        trabajo: 'Desarrollador web',
        edad: 45,
        empleado: true,
        mostrarInformacion: function() {
            if(this.empleado){
                console.log(`${this.nombre} es ${this.trabajo}, tiene ${this.edad} años y actualmente se encuentra empleado`);
            }else{
                console.log(`${this.nombre} es ${this.trabajo}, tiene ${this.edad} años y actualmente se encuentra desempleado`);
            }
        }
    }
    humano.mostrarInformacion();
    
/**
 * Arreglos y .map
 */
    const carrito = ['P1', 'P2', 'P3'];
    console.log(carrito);

    let html = '';
    
    carrito.forEach(producto =>{
        html += `<li>${producto}</li>`;
    });
    
    function arreglos(){
        const contenedorApp = document.querySelector('#app1');
        contenedorApp.innerHTML = html;
    }

    //map
    var map = carrito.map(producto=>{
        return `El producto es ${producto}`;
    });
    console.info(map);

    //Object keys
    console.log(Object.keys(humano));

/**
 * Spread Operator
 * unir y crear arreglos
 */

    let leguajes = ['Javascript', 'PHP', 'Phyton'];
    let framework_ = ['React', 'Laravel', 'Django'];
    
    //forma antigua    
    var combinacion = leguajes.concat(framework_);
    console.log(combinacion);

    //forma nueva
    combinacion = [...leguajes,...carrito];
    let [ultimo] = [...combinacion].reverse();
    console.log(ultimo,combinacion);

    function suma(a,b,c){
        console.log(a+b+c);
    }
    const numeros = [1,2,3];
    suma(...numeros);

/**
 * Métodos para arreglos
 */

    const seresHumanos =[ 
        {nombre:'Juan', edad:15, aprendiendo:'JavaScript'},
        {nombre:'Pedro', edad:25, aprendiendo:'PHP'},
        {nombre:'Paco', edad:13, aprendiendo:'Ingles'},
        {nombre:'Luis', edad:18, aprendiendo:'Cocina'},
        {nombre:'Ana', edad:20, aprendiendo:'C++'},
    ]

    //quienes son mayores de 28 años
    var mayores = seresHumanos.filter(persona => {
        return persona.edad > 15;
    });
    console.info(mayores);

    //que aprende Luis y su edad
    mayores = seresHumanos.find(persona =>{
        return persona.nombre == 'Luis';
    });
    console.log(`Luis esta aprendiendo: ${mayores.aprendiendo}`);

    //cual es el promedio de edades de seresHumanos
    mayores = seresHumanos.reduce((edadTotal, personas)=>{
        return edadTotal + personas.edad;
    }, 0);
    console.log(mayores/seresHumanos.length);

/**
 * Promises (estudiar mas a profundidad)
 */
    const aplicarDescuento = new Promise((resolve, reject)=>{
        setTimeout( () => {
            let descuento = true;
            if(descuento){
                resolve('Descuento aplicado!');
            }else{
                reject('No se pudo aplicar el descuento');
            }
        }, 3000);
    }).then(resultado =>{
        console.log(resultado);
    }).catch(error => {
        console.log(error);
    });
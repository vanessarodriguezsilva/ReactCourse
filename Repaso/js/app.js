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
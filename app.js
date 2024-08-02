/*let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);
*/


function holaMundo() {

    console.log ('hola mundo')
    
}

holaMundo();

function mostrarNombre(nombre) {
    console.log(`¡Hola,  ${nombre}!`);
    
}

mostrarNombre('wilmer');

function devolverDoble(numero) {
    return numero * 2;
    
}

let resultadoDoble = devolverDoble(6);
console.log(resultadoDoble);

function devolverPromedio(numero1, nuemro2, numero3) {
    return (numero1+nuemro2+numero3)/3;
}

let resultadoPromedio = devolverPromedio(15,25,35);
console.log(resultadoPromedio);

function devolverMayor(numero1, nuemro2) {
    
    if(numero1>nuemro2)
        return numero1;
    else 
    return nuemro2;
    
    
}

let resultadoNumeroMayor= devolverMayor(5,2);
console.log(resultadoNumeroMayor);

function devolverNumeroMultiplicado(nuemero) {

    return nuemero * nuemero;
}

let resultadoNumeroMultiplicado =devolverNumeroMultiplicado (6)
console.log(resultadoNumeroMultiplicado);
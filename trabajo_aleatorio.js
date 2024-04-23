const leer = require("prompt-sync")();
let num=0
let intentos

console.log("Cuantos intentos quisiera tener");
intentos = leer();
while (intentos < 3) {
    console.log("La cantidad minima de intentos que se puede elegir es 3");
    console.log("Cuantos intentos quisiera tener?");
    intentos = leer();
}
let rangoMaximo = intentos
let rangoMinimo = 0
let numeroSecreto = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;


for (let i = 0; i < intentos; i++){
    console.log("Adivine el numero secreto");
    num=leer();
    if (numeroSecreto==num) {
        console.log("GANASTE");
        i=intentos
    }
    else{
        console.log("Le erraste intente devuelta");
    
}}
    



if (intentos==0) {
    console.log("Perdiste!");
    console.log("El numero secreto era",numeroSecreto);
}

// Déclaration de fonction
function doSomething()
{
    console.log('I do something');
}

console.log('JS vis sa vie');

// Appel de la fonction
// doSomething();

// ------------------------------------------------------

function doAnotherThing(arg_A, arg_B)
{
    console.log(`Argument A = ${arg_A}, Argument B = ${arg_B}`);
}

// doAnotherThing("truc","machin");


function doAnotherThingAgain(arg_A, arg_C, arg_B="Rien du tout")
{
    console.log(`Argument A = ${arg_A}, Argument B = ${arg_B}, Argument C = ${arg_C}`);
}
// doAnotherThingAgain("Quelque chose", "Autre chose");

// ------------------------------------------------------

function addition(a, b)
{
    const result = a + (b * b -a) / 2;
    return result;
}

const c = addition(5, 3);
const d = addition(50, 13);
const e = c + d;

console.log(` C = ${c}`);
console.log(` D = ${d}`);
console.log(` E = ${e}`);




// function doublePasGauche()
// {
//     pas gauche * 2
// }
// function doublePasDroite()
// {
//     pas droite * 2
// }
// function sauter()
// {
//     sauter
// }
// function tourner(drirection)
// {
//     tourner direction
// }

// function mouvement(direction)
// {
//     doublePasGauche()
//     doublePasDroite()
//     sauter()
//     tourner(direction)
// }

// mouvement(90° gauche)
// mouvement(90° droite)
// mouvement(90° gauche)
// mouvement(180 droite)
// sauter()sauter()sauter()
// mouvement(90° gauche)
// mouvement(90° droite)
// mouvement(90° gauche)
// mouvement(180 droite)


// pas gauche 
// pas gauche
// pas droite 
// pas droite 
// sauter 
// trouner 90 gauche
// pas gauche 
// pas gauche
// pas droite 
// pas droite 
// sauter 
// trouner 90 droite
// pas gauche 
// pas gauche
// pas droite 
// pas droite 
// sauter 
// trouner 90 gauche
// pas gauche 
// pas gauche
// pas droite 
// pas droite 
// sauter 
// trouner 180 droite
// const response = prompt(`Dites "OUI"`);
// console.log( response );

// var reponse;
// while (reponse !== "oui") 
// {
//     reponse = prompt("Voulez-vous continuer ? (oui/non)");
// }

const fruits = [
    'Pommes',   //0
    'Poires',   // 1
    'Fraises',  // 2
    'Kiwi',     // 3
];

while (fruits.length)
{
    console.log(`Longueur:${fruits.length}`);
    console.log(`J'aime les :${fruits[0]}`);
    console.log(fruits);
    console.log(`-----`);
    fruits.shift();
}

console.log("Suite du programme");
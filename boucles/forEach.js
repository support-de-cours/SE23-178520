// const couleurs = ["Rouge", "Vert", "Bleu"];

// // couleurs.forEach(function(couleur, index) {

// //   couleur = couleur.toUpperCase();
// //   // console.log(index, couleur);

// //   couleurs[index] = couleur;
// //   // return couleur;

// // });

// // const colors = couleurs.map(function(couleur){ return couleur.toUpperCase();});
// const colors = couleurs.map(couleur => couleur.toUpperCase());

// console.log( couleurs );
// console.log( colors );


const nombres = [1, 2, 3, 4, 5];
const nombresPairs = [];


nombres.forEach(
  function(nombre) {
    if (nombre % 2 === 0) {
      nombresPairs.push(nombre);
    }
  }
);

console.log(nombresPairs);
var value;
do {
  value = prompt("Veuillez saisir un nombre entier :");
  console.log(value, typeof value);

  value = parseInt(value);
  console.log(value, typeof value);

} while (isNaN(value));

console.log("Vous avez saisi un nombre entier valide : " + value);
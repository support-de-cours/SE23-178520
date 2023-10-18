const utilisateur = {
    nom: "John",
};
  
// console.log( utilisateur );
// console.log( utilisateur.adresse );
console.log( utilisateur?.adresse?.pays );


if (utilisateur !== undefined)
{
    if (utilisateur.adresse !== undefined)
    {
        if (utilisateur.adresse.pays !== undefined) {
            var pays = utilisateur.adresse.pays;
        }
        else {
            console.log('pays non defini');
        }
    }
    else {
        console.log('adresse non definie');
    }
}
else {
    console.log('utilisateur non defini');
}

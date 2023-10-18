function Personne(nom, age) 
{
    this.nom = nom;
    this.age = age;

    this.birthday = function()
    {
        this.age++;
    }
}
  
Personne.prototype.parler = function() {
    console.log("Je m'appelle " + this.nom + " et j'ai " + this.age + " ans.");
}

var alice = new Personne("Alice", 30);
alice.parler(); // Affiche "Je m'appelle Alice et j'ai 30 ans."

var bob = new Personne("Bobby", 42);
bob.parler();

// alice.age++;
// alice.age++;

// alice.nom = "Francis";
alice.birthday();
alice.parler();
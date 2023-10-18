function doSomething()
{
    console.log(arguments);
}

// doSomething('lorem', 'ipsum', 42);


function hello(name) 
{
    this.name = name;
  
    // Fonction classique, Affiche : Bonjour, undefined
    // 'this' fait référence à l'objet global (Window)
    setTimeout(
        function() {
            // this.name = "Bobby";
            console.log('Bonjour, ' + this.nam); 
        }
    , 1000);
  
    // Fonction fléchée, Affiche : Hello, John
    // 'this' fait référence context "new Person('John');"
    setTimeout(
        () => {
            console.log('Hello, ' + this.name); 
        }
    , 2000);
}

hello('John')


const fruits = ["Pomme","Poire","Kiwi",];
const fruits_2 = fruits.map(function(fruit) {
    return fruit.toUpperCase();
})
const fruits_3 = fruits.map(fruit => fruit.toUpperCase());
// const fruits_3 = fruits.map((fruit) => {fruit.toUpperCase();});

console.log(fruits);
console.log(fruits_2);
console.log(fruits_3);
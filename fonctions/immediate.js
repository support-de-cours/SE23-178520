const a = "AA";

{
    console.log("Hello BB");
}

(function(numb){

    const a = "AB";
    console.log('Hello', a, numb);

})(42);

console.log('Hello', a);

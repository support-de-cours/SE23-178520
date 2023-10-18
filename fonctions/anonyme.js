setTimeout(function() {
    console.log("Ceci est une fonction anonyme exécutée après un délai.");
}, 10000);

setInterval(function() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    console.log(`${h}:${m}:${s}`);
}, 1000);


// function instantClock() {
//     const date = new Date();
//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();

//     h = h < 10 ? `0${h}` : h;
//     m = m < 10 ? `0${m}` : m;
//     s = s < 10 ? `0${s}` : s;

//     console.log(`${h}:${m}:${s}`);
// }

// instantClock();
// setInterval( instantClock , 1000);


let doSomethig = function() {
    console.log('je suis une fonction anonyme');
}

// doSomethig();

// doSomethig = 42;
// console.log( doSomethig );


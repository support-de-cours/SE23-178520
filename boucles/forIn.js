// const fruits = [
//     'Pommes',   //0
//     'Poires',   // 1
//     'Fraises',  // 2
//     'Kiwi',     // 3
// ];

// for (const index in fruits)
// {
//     console.log(`J'aime les ${fruits[index]}`);
// }

const user = {
    firstname: "Bruce",
    lastname: "Wayne",
    nickname: "Batman",
    password: "CatW0man",
}

for (const property in user)
{
    console.log(`${property} : ${user[property]}`);
}
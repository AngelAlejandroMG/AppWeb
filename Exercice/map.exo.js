//Exo 1
const num = [1, 2, 3, 4, 5];

let aLaDeux = num.map(x => x ** 2)

console.log(aLaDeux)


//Exo 2
const names = ["alice", "bob", "charlie", "danielle"]

let majuscule = names.map(x => x[0].toUpperCase() + x.slice(1) )

console.log(majuscule)


//Exo 3
const pokemon = ["Bublbasaur" , "Charmander", "Squirtle"]

let pokeP = pokemon.map(x => `<p>${x}</p>` )

console.log(pokeP)
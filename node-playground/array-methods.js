const pokemon = [
    {name: 'Blastoise', type: 'Water'},
    {name: 'Charmander', type: 'Fire'},
    {name: 'Charizard', type: 'Fire'},
    {name: 'Pikachu', type: 'Electric'},
    {name: 'Snorlax', type: 'Sleeper'},
];

function createPokemonTypeFilter(type) {
    return function(pokemon) {
        return pokemon.type === type;
    };
}

const fireFilter = createPokemonTypeFilter('Fire');
const onlyFirePokemon = pokemon.filter(fireFilter);

const waterFilter = createPokemonTypeFilter('Water');
const onlyWaterPokemon = pokemon.filter(waterFilter);

console.log("Fire:", onlyFirePokemon);
console.log("Water:",onlyWaterPokemon);


 


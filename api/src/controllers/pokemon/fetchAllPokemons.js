const axios = require('axios');
const { URL_POKEMONS, URL_TYPES } = require('../../helpers/url');
const { Pokemon, Type } = require('../../db');

const fetchPokemon = require('./fetchPokemon');

const limit = 20;

const fetchAllPokemons = async () => {
  const { results } = (await axios.get(`${URL_POKEMONS}?limit=${limit}`)).data;
  // console.log(results);
  // return results;
  const pokemonsFromApi = await Promise.all(results.map((poke) => fetchPokemon(poke.name)));


  const pokemonsFromDb = await Pokemon.findAll({
    include: [{ model: Type }],
  });

  const allPokemons = [...pokemonsFromDb, ...pokemonsFromApi];

  return allPokemons;
};

module.exports = fetchAllPokemons;

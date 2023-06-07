const { Router } = require('express');

const getPokemons = require('../handlers/pokemon/getPokemons')
const postPokemon = require('../handlers/pokemon/postPokemon');
const getPokemonById = require('../handlers/pokemon/getPokemonById')

const pokemonRouter = Router();

// GET /pokemons
pokemonRouter.get('/', getPokemons); 
// pokemonRouter.get('/:id', getPokemonById); 

// POST
pokemonRouter.post('/', postPokemon); 

// PUT
// DELETE



module.exports = pokemonRouter;

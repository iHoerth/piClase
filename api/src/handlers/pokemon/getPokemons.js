// van a necesitar controllers

const fetchPokemon = require('../../controllers/pokemon/fetchPokemon');
const fetchAllPokemons = require('../../controllers/pokemon/fetchAllPokemons');

const getPokemons = async (req, res) => {
  const { name } = req.query;
  try {
    // si hay name, entonces tenemos que pegarle al endpoint de name, y sino todos
    console.log(name);
    const result = name ? await fetchPokemon(name) : await fetchAllPokemons();
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = getPokemons;

// van a necesitar controllers
const axios = require('axios');
const createPokemon = require('../../controllers/pokemon/createPokemon')

const postPokemon = async (req, res) => {
  // axios.get('url').then((res) => ).catch((error) => {})
  const pokemon = req.body;
  try {
    const result = await createPokemon(pokemon);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = postPokemon;

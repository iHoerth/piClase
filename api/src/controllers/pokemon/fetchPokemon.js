const axios = require('axios');
const { URL_POKEMONS, URL_TYPES } = require('../../helpers/url')


const fetchPokemon = async (name) => {
    const result = (await axios.get(`${URL_POKEMONS}/${name.toLowerCase()}`)).data; 
    
    return result;
};  






module.exports = fetchPokemon;

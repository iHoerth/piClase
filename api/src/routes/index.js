const { Router } = require('express');
const pokemonRoute = require('./pokemon');
// const typeRoute = require('./type');

const router = Router();

router.use('/pokemons', pokemonRoute);
// router.use('/types', typeRoute);


module.exports = router;

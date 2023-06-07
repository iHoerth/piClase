const { Pokemon, Type } = require('../../db');

const createPokemon = async (pokemon) => {
  const { name, img, hp, atk, def, spatk, spdef, speed, height, weight } = pokemon;

  const values = Object.values(pokemon);

  for (const value of values) {
    if (!value) throw new Error(`El campo ${value} no puede estar vacio`);
  }

  const [newPokemon, created] = await Pokemon.findOrCreate({
    where: { name: name },
    defaults: {
      img,
      hp,
      atk,
      def,
      spatk,
      spdef,
      speed,
      weight,
      height,
    },
  });

  if (!created) throw new Error(`El pokemon con el nombre ${name} ya existe en la BDD.`);
  //
  // agregar el type

  return newPokemon;
};

module.exports = createPokemon;
// if(!name) {throw new Error(`No has ingresado un nombre.`)}
// if(!name) {throw new Error(`No has ingresado un nombre.`)}

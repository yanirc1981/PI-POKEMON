const axios = require("axios");
const { Pokemon, Type } = require("../db");

//  DATOS DE LA API
const getApiInfo = async () => {
  const resp = await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then((data) => {
      return data.data.results;
    })
    .then((data) => {
      return Promise.all(data.map((res) => axios.get(res.url))); // ENTRA A CADA ELEMENTO Y HACE UN GET A SU URL
    })
    .then((data) => {
      return data.map((res) => res.data); // SE GUARDAN EN RESP.
    });
  let arrayPoke = resp.map((result) => {
    //TRAIGO TODAS LAS PROPIEDADES  DE CADA POKEMON.
    return {
      id: result.id,
      name: result.name.toLowerCase(),
      life: result.stats[0].base_stat,
      attack: result.stats[1].base_stat,
      defense: result.stats[2].base_stat,
      speed: result.stats[3].base_stat,
      height: result.height,
      weight: result.weight,
      types: result.types.map((t) => t.type.name),
      image: result.sprites.other.dream_world.front_default,
    };
  });

  console.log(arrayPoke);
  return arrayPoke;
};

// DB
const getDbInfo = async () => {
  try {
    let results = await Pokemon.findAll({ include: [Type] });

    results = results.map((pokemon) => {
      let typess = pokemon.Types.map((p) => p.name);
      return {
        id: pokemon.id,
        name: pokemon.name,
        life: pokemon.life,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        image: pokemon.image,
        createdInBd: true,
        types: typess,
      };
    });

    return results;
  } catch (err) {
    console.log(err);
  }
};

//UNIMOS TODO
const getAllPokemons = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = { getAllPokemons, getApiInfo, getDbInfo };


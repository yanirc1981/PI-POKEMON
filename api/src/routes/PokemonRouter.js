require("dotenv").config();
const axios = require("axios");
const { Router } = require("express");
const { getAllPokemons } = require("../Controllers/pokemonController");
const router = Router();
const { Pokemon, Type } = require("../db");

router.get("/", async (req, res) => {
  let { name } = req.query;
  const myPokes = await getAllPokemons();
  try {
    if (name) {
      const pokeName = myPokes.filter(
        (p) => p.name.toLowerCase() === name.toLowerCase()
      );
      if (pokeName.length) {
        return res.status(200).json(pokeName);
      }
      return res.status(404).send(`"${name}" no encontrado`);
    }
    res.status(200).send(myPokes);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/pokemons/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const allPokes = await getAllPokemons();
    if (id) {
      const filteredPoke = allPokes.find((p) => p.id == id);
      // console.log(filteredPoke)
      if (filteredPoke) {
        return res.json(filteredPoke);
      }
      return res.status(404).send('"id" no encontrado');
    }
  } catch (error) {
    // console.log(error)
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, image, life, type, attack, defense, speed, height, wheight } =
      req.body;
    let newPokemon = await Pokemon.create({
      name,
      image,
      life,
      type,
      attack,
      defense,
      speed,
      height,
      wheight,
    });

    let typeDb = await Type.findAll({ where: { name: type } });
    newPokemon.addType(typeDb);
    res.status(200).send("Pokemon creado con exito");
  } catch (error) {
    res.status(400).send("El nombre ya existe");
  }
});

//PUT
//DELETE

module.exports = router;

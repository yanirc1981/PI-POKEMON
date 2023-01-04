import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./estil/pokemonCreate.css";
import { Link } from "react-router-dom";

import { getType, postPokemon } from "../redux/actions/actions";

const Form = () => {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.types);
  console.log(types);

  function validate(pokemon) {
    let errors = {};
    if (!pokemon.name) {
      errors.name = "Se requiere un nombre";
    }
    if (!/^[A-Za-z]+$/i.test(pokemon.name)) {
      errors.name = "Solo acepta letras ";
    }
    if (!pokemon.life) {
      errors.life = "Colocar Life";
    }
    if (!/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(pokemon.life)) {
      errors.life = "Life debe tener un valor entre 1 y 200";
    }
    if (!pokemon.attack) {
      errors.attack = "Attack es un parámetro requerido";
    }
    if (!/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(pokemon.attack)) {
      errors.attack = "Attack debe tener un valor entre 1 y 200";
    }
    if (!pokemon.defense) {
      errors.defense = "Defense es un parámetro requerido";
    }
    if (!/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(pokemon.defense)) {
      errors.defense = "Defense debe tener un valor entre 1 y 200.";
    }
    if (!pokemon.speed) {
      errors.speed = "Speed es un parámetro requerido";
    }
    if (!/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(pokemon.speed)) {
      errors.speed = "Speed debe tener un valor entre 1 y 200";
    }
    if (!pokemon.height) {
      errors.height = "Height es un parámetro requerido";
    }
    if (!/^([1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(pokemon.height)) {
      errors.height = "Height debe tener un valor entre 1 y 200";
    }
    if (!pokemon.wheight) {
      errors.wheight = "Weight es un parámetro requerido";
    }
    if (
      !/^([1-9]|[1-9][0-9]|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9]|10000)$/.test(
        pokemon.wheight
      )
    ) {
      errors.wheight = "Weight debe tener un valor entre 1 y 10000";
    }
    if (!pokemon.image) {
      errors.image = "Image es un parámetro requerido";
    }
    if (
      !/https?:\/\/[^.]*?(\.[^.]+?)*\/.*?\.(jpg|jpeg|gif|png|svg)/g.test(
        pokemon.image
      )
    ) {
      errors.image = "La URL de image debe tener un formato válido";
    }
    if (pokemon.type.length <= 1 || pokemon.type.length >= 2) {
      errors.type = "Debe elegir al menos un type";
    }
    return errors;
  }
  const [errors, setErrors] = useState({});
  const [pokemon, setPokemon] = useState({
    name: "",
    type: [],
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    wheight: "",
  });
  console.log(pokemon);
  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  useEffect(() => {
    setErrors(validate(pokemon));
  }, [pokemon]);

  const handleSubmit = (e) => {
    console.log("pokemon", pokemon);
    e.preventDefault();

    dispatch(postPokemon(pokemon));
  };
  const handleChange = (e) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  };
  function handleSelect(e) {
    setPokemon({
      ...pokemon,
      type: [...pokemon.type, e.target.value],
    });
  }
  function deleteHandler(event) {
    setPokemon({
      ...pokemon,
      type: pokemon.type.filter((type) => type !== event),
    });
  }
  return (
    <div className="caja">
      <h3>Crear Pókemon</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={pokemon.name.toLowerCase()}
            onChange={handleChange}
          ></input>
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Vida:</label>
          <input
            type="number"
            name="life"
            value={pokemon.life}
            onChange={handleChange}
          ></input>
          {errors.name && <span>{errors.life}</span>}
        </div>
        <div>
          <label>Fuerza:</label>
          <input
            type="number"
            name="attack"
            value={pokemon.attack}
            onChange={handleChange}
          ></input>
          {errors.name && <span>{errors.attack}</span>}
        </div>
        <div>
          <label>Defensa:</label>
          <input
            type="number"
            name="defense"
            value={pokemon.defense}
            onChange={handleChange}
          ></input>
          {errors.name && <span>{errors.defense}</span>}
        </div>
        <div>
          <label>Velocidad:</label>
          <input
            type="number"
            name="speed"
            value={pokemon.speed}
            onChange={handleChange}
          ></input>
          {errors.name && <span>{errors.speed}</span>}
        </div>
        <div>
          <label>Altura:</label>
          <input
            type="number"
            name="height"
            value={pokemon.height}
            onChange={handleChange}
          ></input>
          {errors.name && <span>{errors.height}</span>}
        </div>
        <div>
          <label>Peso:</label>
          <input
            type="number"
            name="wheight"
            value={pokemon.wheight}
            onChange={handleChange}
          ></input>
          {errors.name && <span>{errors.wheight}</span>}
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            name="image"
            value={pokemon.image}
            onChange={handleChange}
          ></input>
          {errors.name && <span>{errors.image}</span>}
        </div>
        <div className="types-s">
          <select onChange={handleSelect}>
            {types.map((e) => (
              <option value={e.name} key={e.id}>
                {e.name}
              </option>
            ))}
          </select>

          <p>Types:</p>
          <div>
            {pokemon.type.map((e) => (
              <div>
                <span>{e}</span>
                <button
                  type="button"
                  onClick={() => deleteHandler(e)}
                  value={e}
                  key={e}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link to="/home">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
export default Form;

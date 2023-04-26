import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filterPokemonsByType,
  filterCreated,
  Sort,
  filterByAttack,
} from "../redux/actions/actions";

import Card from "./Card";
import Paginado from "./Paginado";
import NavBar from "./NavBar";

import "./estil/home.css";

function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons); //muestra el estado actual
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  function handleFilterType(e) {
    dispatch(filterPokemonsByType(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1)
  }

  function handleFilterAttack(e) {
    dispatch(filterByAttack(e.target.value));
  }

  function onSelectsChange(e) {
    dispatch(Sort(e.target.value));
  }

  return (
    <>
   
      
      <div>
     
        <div className="filtros">
        <NavBar />
          <div>
            <h4>A-Z</h4>
          <select className="select" name="select" onChange={onSelectsChange} >
            <option  value="Filtro"> A-Z:</option>
            <option value="ASCENDENTE">Ascendente</option>
            <option value="DESCENDENTE">Descendente</option>
          </select>
          </div>
          <div>
            <h4>FUERZA</h4>
          <select className="select"
            name="selects"
            onChange={handleFilterAttack}
           
          >
            <option value="Fuerza"> Fuerza </option>
            <option value="Mayor fuerza">Mayor fuerza</option>
            <option value="Menor fuerza">Menor fuerza</option>
          </select>
          </div>
          <div>
            <h4>TIPO</h4>
          <select className="select" onChange={handleFilterType}>
            <option value="type"> Tipo </option>
            <option value="normal"> Normal </option>
            <option value="flying"> Flying </option>
            <option value="poison"> Poison </option>
            <option value="ground"> Ground </option>
            <option value="bug"> Bug </option>
            <option value="fire"> Fire </option>
            <option value="water"> Water </option>
            <option value="grass"> Grass </option>
            <option value="electric"> Electric </option>
            <option value="fairy"> Fairy </option>
          </select>
          </div>
          <div>
            <h4>CREADOS-API</h4>
          <select className="select" onChange={handleFilterCreated}>
            <option value="Todos"> Todos </option>
            <option value="Creados"> Creados </option>
            <option value="Existentes"> Existentes </option>
          </select>
          </div>
          </div>
          <Paginado
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
          />
          {currentPokemons?.map((e) => {
            return (
              <Card
                name={e.name}
                image={e.image}
                types={e.types}
                id={e.id}
                key={e.id}
              />
            );
          })}
        </div>
    
    </>
  );
}

export default Home;
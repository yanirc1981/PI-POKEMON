import axios from "axios";


export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const dataPokes = await axios.get("/pokemon");
      const pokemons = dataPokes.data;
      dispatch({
        type: "GET_POKEMONS",
        payload: pokemons,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
};

export function postPokemon(payload) {
  return async function () {
    try {
      const response = await axios.post(
        "/pokemon/",
        payload
      );
      return response;
    } catch (error) {
      console.log("errorpokemon",error);
      return alert(error.response.data);
    }
  
  };
}

export function searchPoke(name) {
  return async function (dispatch) {
    try {
      const dataPokes = await axios.get(
        `/pokemon?name=${name}`
      );
      return dispatch({
        type: "SEARCH_NAME",
        payload: dataPokes.data,
      });
    } catch (error) {
      return alert("No se encontró el pokemon");
    }
  };
}

export function filterPokemonsByType(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function Sort(order) {
  return {
    type: "SORT",
    payload: order,
  };
}
export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function filterByAttack(payload) {
  return {
    type: "FILTER_BY_ATTACK",
    payload,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const dataPokes = await axios.get(
        `/pokemon/pokemons/${id}`
      );
      return dispatch({
        type: "GET_DETAILS",
        payload: dataPokes.data,
      });
    } catch (error) {
      console.log( error);
    }
  };
}
export function cleanDetail(){
  return async (dispatch)=>{
    return dispatch({
      type: "CLEAN_DETAILS",
      payload:{},
    })
 
}
}

export function getType() {
  return async function (dispatch) {
    var dataPokes = await axios.get("/type");
    return dispatch({
      type: "GET_TYPE",
      payload: dataPokes.data,
    });
  };
}

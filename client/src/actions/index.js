import axios from 'axios';



export function getAllPokemons(){
    return async function (dispatch){
        let json = await axios.get('/pokemon');
        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data,
        });
    };
}
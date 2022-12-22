


const initialState ={
    Pokemons: [],
}

function rootReducer(state = initialState,action){
    switch(action.type){
        case 'GET_POKEMONS':
            return{
                ...state,
                Pokemons: action.payload
            }
            default:
                return state;
    }
}





export default rootReducer;
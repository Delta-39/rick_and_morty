import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from '../redux/actions'

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            let copy1 = state.allCharacters;
            copy1.push(payload)
            return { 
                ...state,
                myFavorites: copy1,
                allCharacters: copy1
            }
        case FILTER:
            let copy2 = state.allCharacters;
            let filtrado = copy2.filter((character)=> character.gender === payload)
            return{
                ...state, 
                myFavorites: filtrado }
        case ORDER:
            let copy3 = state.allCharacters.sort((a,b)=>{
                return payload === 'A' ? a.id - b.id : b.id - a.id
            });
            return {
                ...state,
                myFavorites: copy3}
        case REMOVE_FAV:
            let eliminarFav = state.myFavorites.filter((char) => {
                return char.id !== Number(payload)
            })
            return { 
                ...state, 
                myFavorites: eliminarFav 
            }
        default:
            return state;
    }
}

export default rootReducer;
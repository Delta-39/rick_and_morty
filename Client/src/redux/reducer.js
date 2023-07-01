import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from '../redux/actions'

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        case FILTER:
            let copy2 = state.allCharacters;
            let filtrado = copy2.filter((character)=> character.gender === payload)
            return payload === 'all' ?{...state,myFavorites: state.allCharacters} :{...state,myFavorites: filtrado }
        case ORDER:
            let copy3 = state.allCharacters.sort((a,b)=>{
                return payload === 'A' ? a.id - b.id : b.id - a.id
            });
            return {
                ...state,
                myFavorites: copy3}
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };
        default:
            return state;
    }
}

export default rootReducer;
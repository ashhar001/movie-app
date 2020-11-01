// make reducer funtion as pure function
//reducer has to return something
//return always returns new state
import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions';
import { combineReducers } from 'redux';
 
const initalMoviesState = {
    list: [],
    favourites:[],
    showFavourites: false
};
export function movies (state = initalMoviesState, action){

    console.log('Movies Reducer');

    switch(action.type){

        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            };
        case ADD_FAVOURITE:
             return{
                ...state,
               favourites: [action.movie, ...state.favourites]
            };
        
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );

            return{
                ...state,
                favourites: filteredArray
            };

        case SET_SHOW_FAVOURITES:
            
            return{
                ...state,
                showFavourites: action.val
            };

        default:
            return state;
    }
}


const initialSearchState = {
    result: {}
};

export function search (state = initalMoviesState, action) {
    console.log('Search Reducer');
    return state;
}

const initalRootState = {
    movies: initalMoviesState,
    search: initialSearchState
};


// export default function rootReducer (state = initalRootState, action){

//     return{
//         movies: movies(state.movies,action),
//         search: search(state.search, action)
//     }
// }


export default combineReducers({

    movies,
    search
})
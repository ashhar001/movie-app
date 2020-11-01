// make reducer funtion as pure function
//reducer has to return something
//return always returns new state
import {ADD_MOVIES, ADD_FAVOURITE} from '../actions';

 
const initalMoviesState = {
    list: [],
    favourites:[]
}
export default function movies (state = initalMoviesState, action){

    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     };
    // }
    // return state;

    switch(action.type){

        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
             return{
                ...state,
               favourites: [action.movie, ...state.favourites]
            }
        default:
            return state;
    }
}


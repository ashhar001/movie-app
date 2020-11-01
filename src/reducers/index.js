// make reducer funtion as pure function
//reducer has to return something
//return always returns new state

export default function movies (state =[], action){

    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}
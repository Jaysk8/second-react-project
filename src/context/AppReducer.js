export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_FAVORITES":
            // return the existing state
            return {
                ...state,
                // the movie data
                favorites: [action.payload, ...state.favorites]
            }
        default: 
        return state;
    }
}
import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
    // if we have a local storage item, return the local storage as its initial state of the store
    // if there isnt anything, an empty array is returned
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
}

// create context
export const GlobalContext = createContext(initialState);

// provider components 
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        // convertes the favorites array into a string and then stores it in the local storage
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }, [state])

    // actions
    const addMovieToFavorites = movie => {
        dispatch({ type: "ADD_MOVIE_TO_FAVORITES", payload: movie})
    }

    return (
        <GlobalContext.Provider 
        value={{ 
            favorites: state.favorites, 
            addMovieToFavorites
            }}
            >

            {props.children}
        </GlobalContext.Provider>
    )
}
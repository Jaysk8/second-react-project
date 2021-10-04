import {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Movies = ({movies}) => {
    const { addMovieToFavorites } = useContext(GlobalContext)

    // if a movie is in the favorites array

    return (
        <div className="movies">
            {movies.map(movie => (
                <div className="movie-poster" key={movie.imdbID}>
                    <img src={movie.Poster} alt="movie-poster" className="poster" />
                    <span>
                        <input type="button" 
                        value="Add" 
                        onClick={() => addMovieToFavorites(movie)}
                        />
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Movies

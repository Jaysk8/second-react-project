import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

const Favorites = () => {
    const {favorites} = useContext(GlobalContext)

    return (
        <div className="favorite-container">
            
            {favorites.map(movie => (
                <div className="favorite-posters">
                    <img src={movie.Poster} alt="movie-poster" className="favorite-poster"/>
                    <p>{movie.Title}</p>
                </div>
            ))}
        </div>
    )
}

export default Favorites

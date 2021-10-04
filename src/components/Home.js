import {useState, useEffect} from 'react'
import Movies from './Movies'
import Search from './Search'

const Home = () => {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const fetchMovies = (searchValue) => {
        fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=67172fa7`)
        .then(res => res.json())
        .then(data => {
            if(data.Search){
                setMovies(data.Search)
            }
        })
    }

    useEffect(() => {
        fetchMovies(searchValue)
    },[searchValue])

    return (
        <div>
            < Search searchValue={searchValue} setSearchValue={setSearchValue}/>
            < Movies movies={movies}/>
        </div>
    )
}

export default Home

import './App.css';
import searchMovie from "./api";
import { useEffect, useState } from "react";
import SearchIcon from './search.svg'
import MovieList from "./MovieList";


function App() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const getFilm = async (title) => {
        const response = await searchMovie(title);
        const data = await response.data.results;
        return data;
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const info = await getFilm(search);
        setMovies(info);
    }

    useEffect(() => {
        getFilm('Flash');
    },[])


    const renderMovie = (
        movies !== undefined ? (
            movies.map((movie, index) => {
                return <MovieList movie={movie} key={index} id={index+1} />
            })
        ) : (
            <h1>404</h1>
        )
    );

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <form onSubmit={handleSubmit} className='search'>
                <input 
                placeholder="Search for movies"
                value={search}
                onChange={handleChange}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    />
            </form>
            <div className="container">
                {renderMovie}
            </div>
        </div>
    );
}

export default App;
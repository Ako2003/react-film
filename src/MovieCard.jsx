import { Link } from "react-router-dom";

function MovieCard({ movie, id }) {
    console.log(movie);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie">
            <Link to={`/movie/${movie.id}`} movie={movie}>
                <div>
                    <p className="date">{movie.release_date}</p>
                    <p className="id">{id}</p>
                </div>
                <div>
                    <img 
                        src = {movie.poster_path !== null ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : 'https://via.placeholder.com/400'}
                        alt={movie.original_title}
                    />
                </div>
                <div>
                    <span>
                    {movie.vote_average.toFixed(1)}
                    </span>
                    <h3>{movie.original_title}</h3> 
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;
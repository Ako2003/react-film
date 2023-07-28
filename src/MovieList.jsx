import { useState } from "react";
import MoviePage from "./MoviePage";

function MovieCard({ movie, id }) {

    const [page, setPage] = useState(false);
    console.log(movie);

    const handleClick = () => {
        setPage(true);
    }

    const handleBack = () => {
        setPage(false);
    }

    const content = <MoviePage onBack={handleBack} movie={movie} /> ;

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
          {page ? (
            <div>{content}</div>
          ) : (
            <div onClick={handleClick} className="movie">
              <div>
                <p className="date">{movie.release_date}</p>
                <p className="id">{id}</p>
              </div>
              <div>
                <img
                  src={
                    movie.poster_path !== null
                      ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                      : 'https://via.placeholder.com/400'
                  }
                  alt={movie.original_title}
                />
              </div>
              <div>
                <span>{movie.vote_average.toFixed(1)}⭐</span>
                <h3>{movie.original_title}</h3>
              </div>
            </div>
          )}
        </>
      );
      
}

export default MovieCard;
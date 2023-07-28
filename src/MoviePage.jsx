import back from './public/arrow.png'

function MoviePage( { movie, onBack } ) {
    console.log(back);
    const handleClick = () => {
        onBack();
    }
    return (
        <div className="movie-card">
            <button onClick={handleClick} className='arrow'>
                <img src={back} alt='back'/>
            </button>
            <div className="movie-card-image">

                <h2>{movie.original_title}</h2>
                <p>{movie.overview}</p>
                <p className='additional_movie_data'><strong>Original language:</strong> {movie.original_language}</p>
                <p className='additional_movie_data'><strong>Popularity:</strong> {movie.popularity}</p>
                <p className='additional_movie_data'><strong>Release date:</strong> {movie.release_date}</p>
                <div>
                    <p className='additional_movie_data'><strong>Rate:</strong>{movie.vote_average}⭐</p>
                </div>
                <p className='additional_movie_data'><strong>Vote Amount: </strong>{movie.vote_count}</p>
                <img
                    src={movie.poster_path !== null
                      ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                      : 'https://via.placeholder.com/400'
                  }
                  alt={movie.original_title}
                />
            </div>
            <div>
            </div>
        </div>
    );
}

export default MoviePage;
import { useMovieContext } from '../contexts/MovieContext';
import '../styles/MovieCard.css'

function MovieCard({movie}) {
    const { isFavorite, addFavorites, removeFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);
    function onFavoriteClick(e) {
        e.preventDefault();
        if(favorite) {
            removeFavorites(movie.id)
        } else {
            addFavorites(movie)
        }

    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                <div className="movie-overlay">
                    <button onClick={onFavoriteClick} className={`favorite-btn ${favorite ? "active" : ""}`}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.date?.split('-')[0]}</p>
            </div>
        </div>
    )
}
export default MovieCard;

function MovieCard({movie}) {
    function onFavoriteClick() {

    }
    return(
        <div className="movie-card">
            <div className="movie-thumbnail">
                <img src={movie.url} alt={movie.title}></img>
                <div className="movie-overlay">
                    <button onClick={onFavoriteClick} className="favorite-btn">
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.date}</p>
            </div>
        </div>
    )
}
export default MovieCard;

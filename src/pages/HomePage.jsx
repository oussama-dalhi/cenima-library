import { useState } from 'react';
import MovieCard from '../components/MovieCard'
function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "John Wick", date: "2020"},
        {id: 2, title: "Batman", date: "2015"},
        {id: 3, title: "Joker", date: "2018"}
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className='form-input'>
                <input type='text'
                 placeholder='Search for movies...'
                  className='search-input'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}>
                </input>
                <button type='submit' className='submit-button'></button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}
export default HomePage;
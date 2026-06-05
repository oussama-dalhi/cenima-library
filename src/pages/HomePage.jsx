import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/api';
import MovieCard from '../components/MovieCard'
import '../styles/HomePage.css'
function HomePage() {
    // handles input field state
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch(error) {
                console.log(error);
                setError('Failed to load movies...')
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])
    const handleSearch = (e) => {
        e.preventDefault();
    }
    if (loading) {
    return <h2>Loading...</h2>;
    }

    if (error) {
    return <h2>{error}</h2>;
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text'
                 placeholder='Search for movies...'
                  className='search-input'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}>
                </input>
                <button type='submit' className='search-button'>Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    (<MovieCard movie={movie} key={movie.id} />)
                ))}
            </div>
        </div>
    )
}
export default HomePage;
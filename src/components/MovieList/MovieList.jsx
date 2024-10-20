import { useState, useEffect } from "react";
import "./MovieList.css";
import MovieItem from "../MovieItem/MovieItem";

export default function MovieList() {
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);

    const handleMenuClick = (index) => {
        if (activeMenuIndex === index) {
            setActiveMenuIndex(null); // Close menu if it's already open
        } else {
            setActiveMenuIndex(index); // Open the clicked menu
        }
    };

    useEffect(() => { 
        const handleClickAnywhere = () => {
            if (activeMenuIndex !== null) {
                setActiveMenuIndex(null);
            }
            
        };

        document.addEventListener("click", handleClickAnywhere);

        return () => {
            document.removeEventListener("click", handleClickAnywhere);
        };
    }, [activeMenuIndex]);

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = "1e92eb8fa82cf5696a39821a8c849300";

    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results);
            console.log(data.results);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
            setLoading(false);
        })
    }

    useEffect(() => {
        getMovies()
    }, []);

    if (loading) {
        return <p>Loading.... </p>
    }

    if (error) {
        return <p>Error Loading Movies.</p>
    }

    return (
        <div id="movie-list">
            {movies.map((movie, index)=> (
                <MovieItem 
                key={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                posterPath={movie.poster_path}
                voteAverage={movie.vote_average}
                isMenuOpen={activeMenuIndex === index}
                handleMenuClick={() => handleMenuClick(index)}
            />
            ))}
        </div>
    )
}
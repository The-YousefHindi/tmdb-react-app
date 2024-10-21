import { useState, useEffect } from "react";
import "./MovieList.css";
import MovieItem from "../MovieItem/MovieItem";

export default function MovieList({ buttonClicked }) {
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const apiKey = "1e92eb8fa82cf5696a39821a8c849300";
    const [isFetching, setIsFetching] = useState(false);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1); // Increment the page
    };

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

    useEffect(() => {
        const fetchMovies = () => {
            setIsFetching(true);
            setLoading(true);
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${page}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.results) {
                        if (page > 1) {
                            setMovies((prevMovies) => [...prevMovies, ...data.results]); // Append movies
                        } else {
                            setMovies(data.results); // Replace movies
                        }
                    }
                    setLoading(false);
                    setIsFetching(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                    setIsFetching(false);
                });
        };

        fetchMovies();
    }, [page]); // page and buttonClicked will trigger re-fetch

    useEffect(() => {
        if (buttonClicked && page === 1) {
            handleLoadMore();
        }
    }, [page, buttonClicked]); // Only run this effect when buttonClicked changes

    useEffect(() => {
        if (buttonClicked) {
            const handleScroll = () => {
                if (
                    window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
                    !loading && !isFetching
                ) {
                    setPage((prevPage) => prevPage + 1);  // Load next page
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [buttonClicked, loading, isFetching]);

    if (loading && movies.length === 0) {
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
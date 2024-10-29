import { useState, useEffect } from "react";
import MovieItem from "../MovieItem/MovieItem";
import MovieListWrapper from "./MovieListWrapper.styles";

export default function MovieList({ buttonClicked, setButtonClicked,
     sortingChoice, searchButtonClicked, setSearchButtonClicked, filterChoices
 }) {
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const apiKey = "1e92eb8fa82cf5696a39821a8c849300";
    const [isFetching, setIsFetching] = useState(false);

    /**
     * Fetches the movies from API
     * 
     * Updates the fetching and loading states, and fetches the data from the API using the url based on the selected page
     * There's a conditional statement that ensures there's no appended repetitive data in the JSON file
     * it also catches errors in case of occurance
     * 
     * @param {string} url - The url used to fetch the movies data from the API
     * @returns {void}
     * @function fetchMovies
     */
    const fetchMovies = () => {
        setIsFetching(true);
        setLoading(true);
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${page}&sort_by=${sortingChoice[1]}&with_genres=${filterChoices.join(",")}`;

        
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

    /**
     * Handles loading more movies
     * 
     * Loads more movies by updating the page state and triggering a refetch for the movies data that fetches new movies and appends it to the previous movies data
     * 
     * @returns {void}
     * @function handleLoadMore
     */
    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1); // Increment the page
    };

    /**
     * Handles menu clicks
     * 
     * Toggles the active state of a menu item based on its index
     * If the clicked menu is open it toggles it off otherwise toggles it on
     * 
     * @param {number} index - The index of the clicked menu
     * @function handleMenuClick
     */
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
        fetchMovies();
    }, [page, searchButtonClicked]); 

    

    useEffect( () => {
        if (searchButtonClicked) {
        setMovies([]);
        setPage(1);
        setButtonClicked(false);
        setSearchButtonClicked(false);
    }
    }, [searchButtonClicked])

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
        <MovieListWrapper>
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
        </MovieListWrapper>
    )
}
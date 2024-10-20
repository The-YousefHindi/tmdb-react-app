import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import MovieList from "../MovieList/MovieList";
import { useState } from "react";
import "./MoviesSection.css";

export default function MoviesSection() {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleLoadMoreButtonClick = () => {
        setButtonClicked(true);
    }

    return (
        <div id="movie-section">
            <MovieList buttonClicked={buttonClicked}/>
            {!buttonClicked && <LoadMoreButton onClick={handleLoadMoreButtonClick}/>}
        </div>
    )
}
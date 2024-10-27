import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import MovieList from "../MovieList/MovieList";
import { useState } from "react";
import MoviesSectionWrapper from "./MoviesSectionWrapper.styles";

export default function MoviesSection({ sortingChoice, searchButtonClicked,
     setSearchButtonClicked, filterChoices }) {
    const [buttonClicked, setButtonClicked] = useState(false);

    /**
     * Handles the load more button click event
     * 
     * Toggles the load more button visibility on/off by inverting the current state boolean value and updating it
     * 
     * @returns {void}
     * @function handleLoadMoreButtonClick
     */
    const handleLoadMoreButtonClick = () => {
        setButtonClicked(!buttonClicked);
    }

    return (
        <MoviesSectionWrapper>
            <MovieList buttonClicked={buttonClicked} sortingChoice={sortingChoice}
            searchButtonClicked={searchButtonClicked}
            setSearchButtonClicked={setSearchButtonClicked}
            setButtonClicked={setButtonClicked}
            filterChoices={filterChoices}
            />
            {!buttonClicked && <LoadMoreButton onClick={handleLoadMoreButtonClick}/>}
        </MoviesSectionWrapper>
    )
}
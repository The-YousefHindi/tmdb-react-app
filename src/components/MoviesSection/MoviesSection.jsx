import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import MovieList from "../MovieList/MovieList";
import { useState } from "react";
import MoviesSectionWrapper from "./MoviesSectionWrapper.styles";

export default function MoviesSection({ sortingChoice, searchButtonClicked,
     setSearchButtonClicked }) {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleLoadMoreButtonClick = () => {
        setButtonClicked(!buttonClicked);
    }

    return (
        <MoviesSectionWrapper>
            <MovieList buttonClicked={buttonClicked} sortingChoice={sortingChoice}
            searchButtonClicked={searchButtonClicked}
            setSearchButtonClicked={setSearchButtonClicked}
            setButtonClicked={setButtonClicked}
            />
            {!buttonClicked && <LoadMoreButton onClick={handleLoadMoreButtonClick}/>}
        </MoviesSectionWrapper>
    )
}
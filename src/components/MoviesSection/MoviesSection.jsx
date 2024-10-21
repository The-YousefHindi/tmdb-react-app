import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import MovieList from "../MovieList/MovieList";
import { useState } from "react";
import MoviesSectionWrapper from "./MoviesSectionWrapper.styles";

export default function MoviesSection() {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleLoadMoreButtonClick = () => {
        setButtonClicked(true);
    }

    return (
        <MoviesSectionWrapper>
            <MovieList buttonClicked={buttonClicked}/>
            {!buttonClicked && <LoadMoreButton onClick={handleLoadMoreButtonClick}/>}
        </MoviesSectionWrapper>
    )
}
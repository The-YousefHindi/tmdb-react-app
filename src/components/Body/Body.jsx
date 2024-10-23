import MoviesSection from "../MoviesSection/MoviesSection";
import SideBar from "../SideBar/SideBar";
import BodyWrapper from "./BodyWrapper.styles";
import { useState } from "react";

export default function Body() {
    const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
    const [sortingChoice, setSortingChoice] = 
    useState(['Popularity Descending', 'popularity.desc']);

    const handleSortingChoice = (choice) => {
        setSortingChoice(choice);
    }

    const handleSearchButtonClick = () => {
        setIsSearchButtonClicked(true);
    }

    return (
        <BodyWrapper>
            <SideBar sortingChoiceHandler={handleSortingChoice}
             sortingChoice={sortingChoice}
             searchButtonClickHandler={handleSearchButtonClick}
             />
            <MoviesSection sortingChoice={sortingChoice}
             searchButtonClicked={isSearchButtonClicked}
             setSearchButtonClicked={setIsSearchButtonClicked}
             />
        </BodyWrapper>
    )
}
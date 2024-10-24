import MoviesSection from "../MoviesSection/MoviesSection";
import SideBar from "../SideBar/SideBar";
import BodyWrapper from "./BodyWrapper.styles";
import { useState, useEffect } from "react";

export default function Body() {
    const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(true);
    const [sortingChoice, setSortingChoice] = 
    useState(['Popularity Descending', 'popularity.desc']);
    const [filterChoices, setFilterChoices] = useState([]);
    const [isSearchButtonActive, setIsSearchButtonActive] = useState(false);

    useEffect(() => {
        console.log("Search button clicked state updated:", isSearchButtonClicked);
    }, [isSearchButtonClicked]);

    const handleSearchButton = () => {
        if (isSearchButtonActive) {
            handleSearchButtonClick();
            setIsSearchButtonActive(!isSearchButtonActive);
        }
    }

    const handleFiltering = (id) => {
        setFilterChoices((prevSelected) => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter((optionId) => optionId !== id);
            } else {
                return [...prevSelected, id];
            }
        })
        setIsSearchButtonActive(true);
    }


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
             searchButtonClickHandler={handleSearchButton}
             filteringHandler={handleFiltering}
             filterChoices={filterChoices}
             isSearchButtonActive={isSearchButtonActive}
             setIsSearchButtonActive={setIsSearchButtonActive}
             />
            <MoviesSection sortingChoice={sortingChoice}
             searchButtonClicked={isSearchButtonClicked}
             setSearchButtonClicked={setIsSearchButtonClicked}
             filterChoices={filterChoices}
             />
        </BodyWrapper>
    )
}
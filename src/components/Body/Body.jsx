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

    /**
     * Handles the click event of the search button
     * 
     * This function toggles the active state of the search button and triggers the 'handleSearchButtonClick' function if the button is currently active
     * 
     * @function handleSearchButton
     * @returns {void}
     */
    const handleSearchButton = () => {
        if (isSearchButtonActive) {
            handleSearchButtonClick();
            setIsSearchButtonActive(!isSearchButtonActive);
        }
    }

    /**
     * Handles filtering based on the provided id
     * 
     * Updates the selected filter choices by adding or removing a certain ID from the current selection
     * It also activates the search button
     * 
     * @param {string} id - the ID of the filter option to remove/add
     * @returns {void}
     * @function handleFiltering
     */
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


    /**
     * Updates sorting choice
     * 
     * It updates the sorting choice of the user by updating the sorting choice state
     * 
     * @param {Array} choice - the array that has the title and url fragment of selected sorting choice
     * @returns {void}
     * @function handleSortingChoice
     */
    const handleSortingChoice = (choice) => {
        setSortingChoice(choice);
    }

    /**
     * Handles the search button click event
     * 
     * It sets the search button click state to true
     * 
     * @returns {void}
     * @function handleSearchButtonClick
     */
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
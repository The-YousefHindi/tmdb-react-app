import SideBarWrapper from "./SideBarWrapper.styles";
import SearchButtonWrapper from "./styled components/SearchButtonWrapper.styles";
import DropDownComponentWrapper from "./styled components/DropDownComponentWrapper.styles";
import SortDropDownComponent from "../SortDropDownComponent/SortDropDownComponent";
import FilterDropDownComponent from "../Body/FilterDropDownComponent/FilterDropDownComponent";
import { useState } from "react";

export default function SideBar({ sortingChoiceHandler, sortingChoice,
     searchButtonClickHandler }) {

    const [isSearchButtonActive, setIsSearchButtonActive] = useState(false);

    const handleSearchButton = () => {
        if (isSearchButtonActive) {
            searchButtonClickHandler(true);
            setIsSearchButtonActive(!isSearchButtonActive);
        }
    }

    return (
        <SideBarWrapper>
            <DropDownComponentWrapper>
                <SortDropDownComponent 
                sortingChoiceHandler={sortingChoiceHandler}
                sortingChoice={sortingChoice}
                searchButtonActivation={setIsSearchButtonActive}
                />
            </DropDownComponentWrapper>
            
            {/* <p>Where To Watch</p> */}

            <DropDownComponentWrapper>
                <FilterDropDownComponent />
            </DropDownComponentWrapper>

            <SearchButtonWrapper>
                <p 
                id={`${isSearchButtonActive && 'active'}`}
                onClick={handleSearchButton}
                >
                Search
                </p>
             </SearchButtonWrapper>
        </SideBarWrapper>
    )
}
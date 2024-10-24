import SideBarWrapper from "./SideBarWrapper.styles";
import SearchButtonWrapper from "./styled components/SearchButtonWrapper.styles";
import DropDownComponentWrapper from "./styled components/DropDownComponentWrapper.styles";
import SortDropDownComponent from "../SortDropDownComponent/SortDropDownComponent";
import FilterDropDownComponent from "../Body/FilterDropDownComponent/FilterDropDownComponent";

export default function SideBar({ sortingChoiceHandler, sortingChoice,
     searchButtonClickHandler, filteringHandler, filterChoices, isSearchButtonActive,
      setIsSearchButtonActive }) {

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
                <FilterDropDownComponent filteringHandler={filteringHandler}
                filterChoices={filterChoices}
                />
            </DropDownComponentWrapper>

            <SearchButtonWrapper>
                <p 
                id={`${isSearchButtonActive && 'active'}`}
                onClick={searchButtonClickHandler}
                >
                Search
                </p>
             </SearchButtonWrapper>
        </SideBarWrapper>
    )
}
import NavBar from "../NavBar/NavBar";
import TitleWrapper from "../Title/TitleWrapper.styles";
import HeaderWrapper from "./HeaderWrapper.styles";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect, useRef } from "react";
import MobileSideList from "../MobileSideList/MobileSideList";


export default function Header({ Title }) {
    const [searchBarIsVisible, setSearchBarIsVisible] = useState(false);
    const [isMobileSideListOpen, setIsMobileSideListOpen] = useState(false);

    /**
     * Handles the mobile sidebar
     * 
     * It toggles the mobile sidebar state on/off by inverting the state and updating it
     * 
     * @returns {void}
     * @function handleMobileSideList
     */
    const handleMobileSideList = () => {
        setIsMobileSideListOpen(!isMobileSideListOpen);
    }
    
    const headerRef = useRef(null);
    
    /**
     * Handles the search bar visibility
     * 
     * It toggles the search bar visibility on/off by inverting the state and updating it
     * 
     * @returns {void}
     * @function handleSearchBarVisibility
     */
    const handleSearchBarVisibility = () => {
        setSearchBarIsVisible(!searchBarIsVisible);
    }
    
    /**
     * Handles the click event outside the Header component
     * 
     * It toggles off the search bar visibility when the click event happens outside the Header component by setting the search bar visibility state false
     * 
     * @param {Event} event - The click event object
     * @function handleClickOutside
     */
    const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            setSearchBarIsVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    return (
        <HeaderWrapper ref={headerRef}>
            
            {isMobileSideListOpen && <MobileSideList />}
            <NavBar onSearchIconClick={handleSearchBarVisibility}
             searchIconClick={searchBarIsVisible}
             isMobileSideListOpen={isMobileSideListOpen}
             handleMobileSideList={handleMobileSideList}
             />
            {searchBarIsVisible && <SearchBar />}
            <TitleWrapper>{Title}</TitleWrapper>
        </HeaderWrapper>
    )
}
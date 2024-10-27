import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";
import HeaderWrapper from "./HeaderWrapper.styles";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect, useRef } from "react";
import MobileSideList from "../MobileSideList/MobileSideList";


export default function Header() {
    const [searchBarIsVisible, setSearchBarIsVisible] = useState(false);
    const [isMobileSideListOpen, setIsMobileSideListOpen] = useState(false);

    const handleMobileSideList = () => {
        setIsMobileSideListOpen(!isMobileSideListOpen);
    }
    
    const headerRef = useRef(null);
    
    const handleSearchBarVisibility = () => {
        setSearchBarIsVisible(!searchBarIsVisible);
    }

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
            <Title />
        </HeaderWrapper>
    )
}
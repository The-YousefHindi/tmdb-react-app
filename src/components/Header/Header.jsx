import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";
import HeaderWrapper from "./HeaderWrapper.styles";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect, useRef } from "react";


export default function Header() {
    const [searchBarIsVisible, setSearchBarIsVisible] = useState(false);
    
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
            <NavBar onSearchIconClick={handleSearchBarVisibility}
             searchIconClick={searchBarIsVisible}/>
            {searchBarIsVisible && <SearchBar />}
            <Title />
        </HeaderWrapper>
    )
}
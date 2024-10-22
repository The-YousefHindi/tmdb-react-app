import { useState, useRef, useEffect } from "react";
import SearchBarWrapper from "./SearchBarWrapper.styles"
import { FaSearch } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";


export default function SearchBar() {
    const [isInputFocused, setIsInputFocused] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [isHover, setIsHover] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleInputFocus = () => {
        setIsInputFocused(true);
        inputRef.current.focus();
    }

    const handleBlur = () => {
            setIsInputFocused(false);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const clearInput = () => {
        setInputValue('');
        handleInputFocus();
    }

    const handleHoverEnter = () => {
        setIsHover(true);
    }

    const handleHoverLeave = () => {
        setIsHover(false);
    }

    return (
        <SearchBarWrapper>
            <div id="search-bar-content">
                <FaSearch id="search-icon"/>
                <input type="text" placeholder="Search for a movie, tv show, person..."
                value={inputValue}
                ref={inputRef}
                onFocus={handleInputFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                />
                {((isInputFocused) || (inputValue && isHover)) && 
                (<MdOutlineClear id="clear-icon" onClick={clearInput}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                />     
                )}
            </div>
        </SearchBarWrapper>
    )
}
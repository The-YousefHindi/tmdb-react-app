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

    /**
     * Handles the input field focus
     * Sets the input field focus state to true and enables focus on the input field
     * 
     * @returns {void}
     * @function handleInputFocus
     */
    const handleInputFocus = () => {
        setIsInputFocused(true);
        inputRef.current.focus();
    }

    /**
     * Handle blurring the iuput field by updating its focus state to false
     * 
     * @returns {void}
     * @function handleBlur
     */
    const handleBlur = () => {
            setIsInputFocused(false);
    }

    /**
     * Handles the change in the input field
     * Updates the input value state with the value entered in the target input field
     * 
     * @param {Event} e - The change event object triggered by the input field
     * @returns {void}
     * @function handleInputChange
     */
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    /**
     * Clears the input field by setting the input value to an empty string
     * Also calls the handleInputFocus which enables focus on the input field
     * 
     * @returns {void}
     * @function clearInput
     */
    const clearInput = () => {
        setInputValue('');
        handleInputFocus();
    }

    /**
     * Handles entering hover mode
     * Sets the hover state to true when the user starts hovering over the target element
     * 
     * @returns {void}
     * @function handleHoverEnter
     */
    const handleHoverEnter = () => {
        setIsHover(true);
    }

    /**
     * Handles leaving hover mode
     * Sets the hover state to false when the user stops hovering over the target element
     * 
     * @returns {void}
     * @function handleHoverLeave
     */
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
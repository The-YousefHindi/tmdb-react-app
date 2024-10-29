import { RiArrowDropDownLine } from "react-icons/ri";
/* import { IoMdArrowDropdown } from "react-icons/io"; */
import { useState, useEffect } from "react";

export default function FilterDropDownComponent({ filteringHandler, filterChoices }) {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    /* const [isInnerDropDownOpen, setIsInnerDropDownOpen] = useState(false); */
    const [genres, setGenres] = useState([]);
    const apiKey = "1e92eb8fa82cf5696a39821a8c849300";

    /**
     * Handles the click event on the dropdown component
     * 
     * Toggles the drop down open/closed by inverting the current state value and updating it
     * 
     * @returns {void}
     * @function handleDropDown
     */
    const handleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
        /* setIsInnerDropDownOpen(false); */
    }

    /* const handleInnerDropDown = () => {
        setIsInnerDropDownOpen(!isInnerDropDownOpen);
    } */

    /**
     * Fetches movie genres from API
     * 
     * Uses try and catch to try fetching the movie genres data, store it in a JSON file, and update the Genres state
     * Also catches error and reports it to console in case it occured
     * 
     * @returns {void}
     * @function fetchGenres 
     */
    const fetchGenres = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en`
            );
            const data = await response.json();
            setGenres(data.genres);
        } catch (error) {
            console.error("Error fetching genres: ", error);
        }
    }

    useEffect(() => {
        fetchGenres();
    }, [])

    return (
        <>
        <section className="label-section" onClick={handleDropDown} data-testid="filter-dropdown-toggle">
            <p className="label">Filter</p>
            <RiArrowDropDownLine 
            className={`drop-down-icon ${isDropDownOpen ? 'rotate' : ''}`}/>
        </section>

        {isDropDownOpen &&
        <div>
            {/* <section className="release-date-section">
                <p className="heading">Release Dates</p>
            </section> */}
    
            <section className="genres-section">
                <p className="heading">Genres</p>
                <div className="category-buttons-container">
                    <ul className="category-buttons">
                        {genres.map((genre) => (
                            <li key={genre.id} 
                            className={`category-button ${filterChoices.includes(genre.id) ?
                                 'active-category-button' : ''}`}
                                onClick={() => filteringHandler(genre.id)}
                            >
                                {genre.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div> 
        
        }
        </>
    )
        
        
}
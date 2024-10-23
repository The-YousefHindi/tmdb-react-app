import { RiArrowDropDownLine } from "react-icons/ri";
/* import { IoMdArrowDropdown } from "react-icons/io"; */
import { useState, useEffect } from "react";

export default function FilterDropDownComponent() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    /* const [isInnerDropDownOpen, setIsInnerDropDownOpen] = useState(false); */
    const [genres, setGenres] = useState([]);
    const apiKey = "1e92eb8fa82cf5696a39821a8c849300";

    const handleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
        /* setIsInnerDropDownOpen(false); */
    }

    /* const handleInnerDropDown = () => {
        setIsInnerDropDownOpen(!isInnerDropDownOpen);
    } */

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
        <section className="label-section" onClick={handleDropDown}>
            <p className="label">Filter</p>
            <RiArrowDropDownLine 
            className={`drop-down-icon ${isDropDownOpen ? 'rotate' : ''}`}/>
        </section>

        {isDropDownOpen &&
        <div>
            <section className="release-date-section">
                <p className="heading">Release Dates</p>
            </section>
    
            <section className="genres-section">
                <p className="heading">Genres</p>
                <div className="category-buttons-container">
                    <ul className="category-buttons">
                        {genres.map((genre) => (
                            <li key={genre.id} className="category-button">
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
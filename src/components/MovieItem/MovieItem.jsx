/* import { useState, useEffect } from "react"; */
import ThreeDotsMenu from "../ThreeDotsMenu/ThreeDotsMenu";
import "./MovieItem.css";
import RatingCircle from "../RatingCircle/RatingCircle";

export default function MovieItem({ title, releaseDate, posterPath, voteAverage,
     isMenuOpen, handleMenuClick }) {

    /* const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => { 
        const handleClickAnywhere = () => {
            if (isOpen) {
                setIsOpen(false);
            }
            
        };

        document.addEventListener("click", handleClickAnywhere);

        return () => {
            document.removeEventListener("click", handleClickAnywhere);
        };
    }, [isOpen]); */

    const votePercentage = +(voteAverage * 10);

    return (
        <div id="movie-section" className="movie-item-container">
            <div className={`movie-item ${isMenuOpen && "movie-item-blur"}`}>
                <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
                alt={title}
                title={title}
                />
                <RatingCircle percentage={votePercentage}/>
                <h3>{title}</h3>
                <p>{releaseDate}</p>
            </div>
            <ThreeDotsMenu isOpen={isMenuOpen} onClick={handleMenuClick}/>
        </div>
    )
}
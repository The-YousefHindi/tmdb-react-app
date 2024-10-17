import { useState } from "react";
import ThreeDotsMenu from "../../../../ThreeDotsMenu/ThreeDotsMenu";
import "./MovieItem.css";
import RatingCircle from "./RatingCircle/RatingCircle";

export default function MovieItem({ title, releaseDate, posterPath, voteAverage }) {
    const [isBlurred, setIsBlurred] = useState(false);

    const toggleBlur = () => {
        setIsBlurred(!isBlurred);
    }

    const votePercentage = +(voteAverage * 10);

    return (
        <div id="movie-section" className="movie-item-container">
            <div className={`movie-item${isBlurred ? "-blur" : ""}`}>
                <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
                alt={title}
                title={title}
                />
                <RatingCircle percentage={votePercentage}/>
                <h3>{title}</h3>
                <p>{releaseDate}</p>
            </div>
            <ThreeDotsMenu onBlur={toggleBlur}/>
        </div>
    )
}
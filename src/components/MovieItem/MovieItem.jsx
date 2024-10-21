import ThreeDotsMenu from "../ThreeDotsMenu/ThreeDotsMenu";
import RatingCircle from "../RatingCircle/RatingCircle";
import MovieItemContainer from "./MovieItemContainer.styles";

export default function MovieItem({ title, releaseDate, posterPath, voteAverage,
     isMenuOpen, handleMenuClick }) {

    const votePercentage = +(voteAverage * 10);

    return (
        <MovieItemContainer>
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
        </MovieItemContainer>
    )
}
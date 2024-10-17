import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./RatingCircle.css";

export default function RatingCircle({ percentage }) {

    const roundedPercentage = Math.round(percentage);

    const getPathColor = (value) => {
        if (value > 70) return "var(--primary-rating-color)";
        if (value > 50) return "var(--secondary-rating-color)"; 
        return "var(--tertiary-rating-color)"; 
    };

    return (
        <div className="rating-circle">
            <CircularProgressbar
                value={roundedPercentage}
                text={`${roundedPercentage}%`}
                styles={buildStyles({
                    textColor: "white",
                    pathColor: getPathColor(roundedPercentage),
                    trailColor: "lightgray",
                    textSize: "2rem",
                })}
        />
        </div>
        
    )
}
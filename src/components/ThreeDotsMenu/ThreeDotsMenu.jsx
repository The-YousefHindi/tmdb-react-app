import { useState } from "react";
import "./ThreeDotsMenu.css";

export default function ThreeDotsMenu({ onBlur }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onBlur();
    };

    return (
        <div className="three-dots-menu">
            <div className="dots" onClick={handleClick}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            {isOpen && (
                <div className="options-menu">
                    <ul>
                        <li>Add to list</li>
                        <li>Favorite</li>
                        <li>Watchlist</li>
                        <li>Your Rating</li>
                    </ul>
                </div>
            )}
        </div>
    )
}
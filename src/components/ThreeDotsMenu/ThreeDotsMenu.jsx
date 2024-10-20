import { useState, useEffect } from "react";
import "./ThreeDotsMenu.css";
import { SlOptions } from "react-icons/sl";

export default function ThreeDotsMenu({ onBlur }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onBlur();
    };


    useEffect(() => { 
        const handleClickAnywhere = () => {
            if (isOpen) {
                setIsOpen(false);
                onBlur();
            }
            
        };

        document.addEventListener("click", handleClickAnywhere);

        return () => {
            document.removeEventListener("click", handleClickAnywhere);
        };
    }, [isOpen, onBlur]);

    return (
        <div className="three-dots-menu" onClick={(e) => e.stopPropagation()}>
            
            {!isOpen && (<div className="dots" onClick={handleClick}>
                <span className="options-icon"><SlOptions /></span>
            </div>)}

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
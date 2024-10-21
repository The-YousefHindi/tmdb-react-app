/* import "./ThreeDotsMenu.css"; */
import { SlOptions  } from "react-icons/sl";
import { FaStar, FaList } from "react-icons/fa";
import { MdFavorite, MdWatchLater } from "react-icons/md";
import ThreeDotsMenuWrapper from "./ThreeDotsMenuWrapper.styles";

export default function ThreeDotsMenu({ isOpen, onClick }) {

    return (
        <ThreeDotsMenuWrapper onClick={(e) => e.stopPropagation()}>
            
            {!isOpen && (<div className="dots" onClick={onClick}>
                <span className="options-icon"><SlOptions /></span>
            </div>)}

            {isOpen && (
                <div className="options-menu">
                    <ul>
                        <li><FaList /> Add to list</li>
                        <li><MdFavorite /> Favorite</li>
                        <li><MdWatchLater /> Watchlist</li>
                        <li><FaStar /> Your Rating</li>
                    </ul>
                </div>
            )}
        </ThreeDotsMenuWrapper>
    )
}
import { SlOptions  } from "react-icons/sl";
import { FaStar, FaList } from "react-icons/fa";
import { MdFavorite, MdWatchLater } from "react-icons/md";
import ThreeDotsMenuWrapper from "./ThreeDotsMenuWrapper.styles";

export default function ThreeDotsMenu({ isOpen, onClick }) {

    return (
        <ThreeDotsMenuWrapper onClick={(e) => e.stopPropagation()}>
            
            {!isOpen && (<div className="dots" onClick={onClick}>
                <SlOptions className="options-icon" />
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
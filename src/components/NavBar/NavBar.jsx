import navBarLogo from "../../tmdb-header-logo.svg";
import { FaSearch } from "react-icons/fa";
import NavBarWrapper from "./NavBarWrapper.styles";


export default function NavBar({ onHover }) {
    return (
        <NavBarWrapper>
            <div id="navbar-content">
                <div id="header-left">
                    <img id="header-logo" src={navBarLogo} alt="TMDB LOGO" />
                    <ul id="header-left-list">
                        <li
                        onMouseEnter={() => onHover(1)}
                        onMouseLeave={() => onHover(0)}
                        >Movies</li>
                        <li
                        onMouseEnter={() => onHover(2)}
                        onMouseLeave={() => onHover(0)}
                        >TV Shows</li>
                        <li
                        onMouseEnter={() => onHover(3)}
                        onMouseLeave={() => onHover(0)}
                        >People</li>
                        <li
                        onMouseEnter={() => onHover(4)}
                        onMouseLeave={() => onHover(0)}
                        >More</li>
                    </ul>
                </div>
                
                <div id="header-lists">
                    <ul id="header-right">
                        <li id="add-icon">+</li>
                        <li id="language-icon">EN</li>
                        <li>Log In</li>
                        <li>Join TMDB</li>
                        <li> <span id="search-icon"><FaSearch /></span> </li>
                    </ul>
                </div>
                
            
            </div>
        </NavBarWrapper>
    )
}
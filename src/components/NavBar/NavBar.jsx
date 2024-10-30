import navBarLogo from "../../tmdb-header-logo.svg";
import { FaSearch } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import NavBarWrapper from "./NavBarWrapper.styles";
import NavBarHoverList from "../NavBarHoverList/NavBarHoverList";
import { useState } from "react";
import PhonyWrapper from "./PhonyWrapper.styles";
import { FaList } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";



export default function NavBar({ searchIconClick,onSearchIconClick, isMobileSideListOpen, handleMobileSideList }) {

    const [hoverListIndex, setHoverListIndex] = useState(0);
    const navigate = useNavigate();

    const handleNavigateToPopular = () => {
        navigate("/PopularMovies");
        handleHoverLeave();
    }

    const handleNavigateToHome = () => {
        navigate("/");
    }

    /**
     * Handles hovering over the NavBar list
     * 
     * Updates the hover list index responsible for showing a certain hover list when hovering over the NavBar items
     * 
     * @param {number} index 
     * @returns {void}
     * @function handleNavBarListHover
     */
    const handleNavBarListHover = (index) => {
        setHoverListIndex(index);
    }

    /**
     * Handles leaving hover 
     * 
     * Sets the hover list index state to 0 when the user stops hovering over a certain NavBar list which toggles the hover list visibility off
     * 
     * @returns {void}
     * @function handleHoverLeave
     */
    const handleHoverLeave = () => {
            setHoverListIndex(0);
    }

    return (
        <NavBarWrapper>
            <div id="navbar-content">
                <div id="header-left">
                    <FaList onClick={handleMobileSideList} className={`mobile-side-list ${isMobileSideListOpen && 'open'}`}/>
                    <img id="header-logo" src={navBarLogo} alt="TMDB LOGO" onClick={handleNavigateToHome}/>
                    <ul id="header-left-list" >
                        <PhonyWrapper 
                        onMouseEnter={() => handleNavBarListHover(1)}
                        onMouseLeave={() => handleHoverLeave()}
                        >
                            <li data-testid="movies-navbar-hover" >Movies</li>
                            <div className="phony">
                                {(hoverListIndex === 1) &&
                                <NavBarHoverList>
                                    <li onClick={handleNavigateToPopular} data-testid="click-popular-movies" >Popular</li>
                                    <li>Now Playing</li>
                                    <li>Upcoming</li>
                                    <li>Top Rated</li>
                                </NavBarHoverList>}
                            </div>
                            
                        </PhonyWrapper>
                        
                        <PhonyWrapper
                        onMouseEnter={() => handleNavBarListHover(2)}
                        onMouseLeave={() => handleHoverLeave()}
                        >
                            <li>TV Shows</li>
                            <div className="phony">
                                {(hoverListIndex === 2) &&
                                <NavBarHoverList>
                                    <li>Popular</li>
                                    <li>Airing Today</li>
                                    <li>On TV</li>
                                    <li>Top Rated</li>
                                </NavBarHoverList>}
                            </div>
                        </PhonyWrapper>
                        
                        <PhonyWrapper
                        onMouseEnter={() => handleNavBarListHover(3)}
                        onMouseLeave={() => handleHoverLeave()}
                        >
                            <li>People</li>
                            <div className="phony">
                                {(hoverListIndex === 3) &&
                                <NavBarHoverList>
                                    <li>Popular People</li>
                                </NavBarHoverList>}
                            </div>
                        </PhonyWrapper>
                        <PhonyWrapper
                        onMouseEnter={() => handleNavBarListHover(4)}
                        onMouseLeave={() => handleHoverLeave()}
                        >
                        <li>More</li>
                        <div className="phony">
                            {(hoverListIndex === 4) &&
                            <NavBarHoverList>
                                <li>Discussions</li>
                                <li>Leaderboard</li>
                                <li>Support</li>
                                <li>API</li>
                            </NavBarHoverList>}
                        </div>
                        </PhonyWrapper>
                        
                    </ul>
                </div>
                
                <div id="header-lists">
                    <ul id="header-right">
                        <li id="add-icon">+</li>
                        <li id="language-icon">EN</li>
                        <li>Log In</li>
                        <li>Join TMDB</li>
                        {searchIconClick ?
                         <li ><MdOutlineClear id="clear-icon" onClick={onSearchIconClick} data-testid="click-clear-icon" /></li> :
                            <li ><FaSearch id="search-icon" onClick={onSearchIconClick} data-testid="click-search-icon" /></li>
                        }
                    </ul>
                </div>
                
            
            </div>
        </NavBarWrapper>
    )
}
import "./NavBar.css";
import navBarLogo from "../../../tmdb-header-logo.svg";

export default function NavBar() {
    return (
        <section className="navbar">
            <div id="navbar-content">
                <div id="header-left">
                    <img id="header-logo" src={navBarLogo} alt="TMDB LOGO" />
                    <ul id="header-left-list">
                        <li>Movies</li>
                        <li>TV Shows</li>
                        <li>People</li>
                        <li>More</li>
                    </ul>
                </div>
                
                <div id="header-lists">
                
                    <ul id="header-right">
                        <li id="add-icon">+</li>
                        <li id="language-icon">EN</li>
                        <li>Log In</li>
                        <li>Join TMDB</li>
                        <li> <span id="search-icon">&#x1F50D;</span> </li>
                    </ul>
                </div>
                
            
            </div>
        </section>
    )
}
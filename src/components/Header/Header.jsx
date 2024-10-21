import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";
import HeaderWrapper from "./HeaderWrapper.styles";
import NavBarHoverList from "../NavBarHoverList/NavBarHoverList";
import { useState } from "react";

export default function Header() {
    const [hoverListIndex, setHoverListIndex] = useState(0);

    const handleNavBarListHover = (index) => {
        setHoverListIndex(index);
    }

    const handleHoverLeave = () => {
        setHoverListIndex(0);
    }

    return (
        <HeaderWrapper>
            <NavBar onHover={handleNavBarListHover}/>
            {(hoverListIndex === 1) &&
             <NavBarHoverList leftMargin='30.5rem'
                onMouseEnter={() => setHoverListIndex(1)}
                onMouseLeave={handleHoverLeave}
             >
                <li>Popular</li>
                <li>Now Playing</li>
                <li>Upcoming</li>
                <li>Top Rated</li>
            </NavBarHoverList>}
            {(hoverListIndex === 2) &&
             <NavBarHoverList leftMargin='35.2rem'
                onMouseEnter={() => setHoverListIndex(2)}
                onMouseLeave={handleHoverLeave}
             >
                <li>Popular</li>
                <li>Airing Today</li>
                <li>On TV</li>
                <li>Top Rated</li>
            </NavBarHoverList>}
            {(hoverListIndex === 3) &&
             <NavBarHoverList leftMargin='41rem'
                onMouseEnter={() => setHoverListIndex(3)}
                onMouseLeave={handleHoverLeave}
             >
                <li>Popular People</li>
            </NavBarHoverList>}
            {(hoverListIndex === 4) &&
             <NavBarHoverList leftMargin='45.2rem'
                onMouseEnter={() => setHoverListIndex(4)}
                onMouseLeave={handleHoverLeave}
             >
                <li>Discussions</li>
                <li>Leaderboard</li>
                <li>Support</li>
                <li>API</li>
            </NavBarHoverList>}
            <Title />
        </HeaderWrapper>
    )
}
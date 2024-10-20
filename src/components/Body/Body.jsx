import "./Body.css";
import MoviesSection from "../MoviesSection/MoviesSection";
import SideBar from "../SideBar/SideBar";

export default function Body() {
    return (
        <div className="body">
            <SideBar />
            <MoviesSection />
        </div>
    )
}
import MoviesSection from "../MoviesSection/MoviesSection";
import SideBar from "../SideBar/SideBar";
import BodyWrapper from "./BodyWrapper.styles";

export default function Body() {
    return (
        <BodyWrapper>
            <SideBar />
            <MoviesSection />
        </BodyWrapper>
    )
}
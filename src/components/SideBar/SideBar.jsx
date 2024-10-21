import SideBarWrapper from "./SideBarWrapper.styles";

export default function SideBar() {
    return (
        <SideBarWrapper>
            <p>Sort</p>
            {/* <p>Where To Watch</p> */}
            <p>Filters</p>
            <input id="search-input-field" type="text" />
        </SideBarWrapper>
    )
}
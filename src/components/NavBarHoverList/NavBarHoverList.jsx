import NavBarHoverListWrapper from "./NavBarHoverListWrapper.styles";

export default function NavBarHoverList({ children, leftMargin }) {
    return (
        <NavBarHoverListWrapper leftMargin={leftMargin}>
            {children}
        </NavBarHoverListWrapper>
    )
}
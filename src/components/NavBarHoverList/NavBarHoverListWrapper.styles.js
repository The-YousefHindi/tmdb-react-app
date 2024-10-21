import styled from "@emotion/styled";

const NavBarHoverListWrapper = styled.ul`
position: absolute;
text-align: left;
background-color: var(--primary-text-color);
color: var(--secondary-background-color);
list-style: none;
border: 1px solid var(--primary-shadow-color);
border-radius: 0.3rem;
width: 10rem;
margin: -1rem 0 0 ${(props) => props.leftMargin || '30.5rem'};
z-index: 11;


li {
padding: 1rem 1rem 0 1rem;
}

li:last-child {
padding-bottom: 1rem;
}

li:hover {
background-color: var(--primary-shadow-color);
cursor: pointer;
}

}
`;

export default NavBarHoverListWrapper;
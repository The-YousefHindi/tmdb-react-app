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
margin: 0;
padding: 1rem 0;
z-index: 11;
font-size: small;
font-weight: 500;


li {
padding: 0.3rem 1rem;
}

li:hover {
background-color: var(--primary-shadow-color);
cursor: pointer;
}

}
`;

export default NavBarHoverListWrapper;
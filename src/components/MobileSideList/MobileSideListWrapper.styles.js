import styled from "@emotion/styled";

const MobileSideListWrapper = styled.div`
z-index: 20;
position: fixed;
background-color: var(--primary-color);
width: 18rem;
top: 0;
left: 0;
height: 100vh;

ul {
list-style: none;
padding: 1rem;
}

li {
color: white;
text-align: left;
margin: 1rem 0;
}

ul li:hover {
cursor: pointer;
}

`;

export default MobileSideListWrapper;
import styled from "@emotion/styled";

const SearchButtonWrapper = styled.div`

p {
background-color: var(--primary-shadow-color);
text-align: center;
width: 15rem;
color: var(--secondary-text-color);
border: 0;
margin: 1rem 0;
padding: 0.5rem;
font-weight: bold;
}


#active {
color: var(--primary-text-color);
background-color: var(--secondary-color);
}

#active:hover {
background-color: var(--primary-color);
cursor: pointer;
}

`;

export default SearchButtonWrapper;
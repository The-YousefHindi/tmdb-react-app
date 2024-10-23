import styled from "@emotion/styled";

const SearchBarWrapper = styled.div`
display: felx;
margin: 1rem 0;
padding: 0;
position: absolute;
border-bottom: 0.1rem solid var(--primary-shadow-color);
width: 100%;
background-color: var(--primary-text-color);
justify-content: center;

#search-bar-content {
display: flex;
position: relative;
margin: 0 19rem 1rem 20rem;
align-items: center;
}

#search-icon {
color: var(--secondary-background-color);
font-size: medium;
}

input {
width: 80rem;
margin: 0 0 0 1rem;
border: 0;
font-size: medium;
font-style: italic;
opacity: 0.35;
}

input::placeholder {
    opacity: 1;
    font-size: medium;
    font-style: italic;
    transition: opacity 0.3s ease;
}

input:focus {
outline: none;
}


#clear-icon {
color: var(--tertiary-background-color);
font-size: medium;
margin: 0 0 0 -0.3rem;
padding: 0;
}

#clear-icon:hover {
color: var(--secondary-background-color);
cursor: pointer;
}


`;

export default SearchBarWrapper;
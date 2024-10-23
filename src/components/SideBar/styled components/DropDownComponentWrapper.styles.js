import styled from "@emotion/styled";

const DropDownComponentWrapper = styled.div`

background-color: var(--primary-text-color);
border: 0.1rem solid var(--primary-shadow-color);
box-shadow: 0.2rem 0.2rem 1rem var(--primary-shadow-color);
margin: 0 0 1rem 0;
display: block;

.label {
padding: 1rem;
font-weight: bold;
}

section {
border-top: 0.1rem solid var(--primary-shadow-color);
display: block;
}

.heading {
font-weight: 100;
font-size: 0.95rem;
padding: 1rem;
}

.inner-drop-down {
padding: 0 1rem 1rem 1rem;
justify-content: center;
}

.inner-drop-down-list {
display: flex;
background-color: var(--primary-shadow-color);
justify-content: space-between;
text-align: left;
align-items: center;
font-size: small;
padding: 0.5rem;
color: var(--secondary-background-color);
}

.inner-drop-down-list:hover {
cursor: pointer;
background-color: var(--tertiary-background-color);
}

.inner-drop-down-icon {
font-size: large;
}

.label-section {
display: flex;
justify-content: space-between;
align-items: center;
}

.label-section:hover {
cursor: pointer;
}

.drop-down-icon {
font-size: xx-large;
transform: rotate(-90deg);
}

.rotate {
transform: rotate(0);
}

.drop-down-ul-container {
width: 12.9rem;
font-size: small;
background-color: var(--primary-text-color);
border: 0.1rem solid var(--primary-shadow-color); 
position: absolute;
}

.drop-down-ul {
list-style: none;
padding: 0.5rem 0;
}

.drop-down-li {
padding: 0.2rem 1rem;
}

.drop-down-li:hover {
background-color: var(--primary-hover-color);
cursor: pointer;
}

.active-li {
font-weight: bold;
background-color: var(--primary-shadow-color);
}

.active-li:hover {
cursor: pointer;
background-color: var(--secondary-color);
transition: all 0.2s;
color: var(--primary-text-color);
}

.category-buttons-container {
padding: 0 1rem 1rem 1rem;
}

.category-buttons {
list-style: none;
display: flex;
flex-wrap: wrap;
font-size: small;
}

.category-button {
background-color: var(--primary-text-color);
border: 0.1rem solid var(--primary-shadow-color); 
text-align: center;
margin: 0.2rem;
padding: 0.2rem; 
}

.category-button:hover {
background-color: var(--secondary-color);
color: var(--primary-text-color);
cursor: pointer;
}

`;

export default DropDownComponentWrapper;
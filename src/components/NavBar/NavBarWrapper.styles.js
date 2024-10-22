import styled from "@emotion/styled";

const NavBarWrapper = styled.section`
background-color: var(--primary-color);
font-weight: bold;

#header-logo {
    width: 10rem;
    height: 2rem;
    padding-bottom: 0.5rem;
}

#header-logo:hover {
    cursor: pointer;
}

#navbar-content {
    margin: 0 17rem 0 20rem;
    display: flex;
    gap: 2rem;
    padding: 1rem 0;
    align-items: center;
    justify-content: space-between;
}

#header-lists {
    display: flex;
    align-items: center;
}

#header-left {
    color: var(--primary-text-color);
    display: flex;
    gap: 1rem;
    align-items: center;
}

#header-left-list {
    list-style-type: none;
    display: flex;
    gap: 1rem;
    margin: 0;
}

#header-left li:hover {
    cursor: pointer;
}

#header-right {
    display: flex;
    color: var(--primary-text-color);
    list-style-type: none;
    gap: 2rem;
    margin: 0;
    font-size: 0.9rem;
    align-items: center;
    padding-bottom: 0.5rem;
}

#header-right li:hover {
    cursor: pointer;
}

#add-icon {
    font-size: 1.5rem;
}

#language-icon {
    outline: 0.1rem solid var(--primary-text-color);
    padding: 0.2rem;
}

#language-icon:hover {
    background-color: var(--primary-text-color);
    color: var(--primary-color);
    transition: all 0.3s;
}

#search-icon {
    color: var(--secondary-color);
   object-fit: contain;
   display: block;
   margin: 0;
   margin-bottom: -0.2rem;
   font-size: 1.2rem;
}

.phony {
padding-top: 0.5rem;
position: relative;
}

`;

export default NavBarWrapper;
import styled from "@emotion/styled";

const ThreeDotsMenuWrappper = styled.div`
position: absolute;
top: 0.5rem;
right: 0.5rem;
z-index: 10;

.dots {
    font-size: 1.2rem;
    color: var(--primary-text-color);
    border-radius: 50%;
    background-color: var(--primary-color);
    opacity: 75%;
    padding: 0.1rem;
    display: flex;
  }

  .options-icon {
    padding: 0.15rem;
    text-align: center;
  }

  .dots:hover {
    cursor: pointer;
    background-color: var(--secondary-color);
    opacity: 100%;
  }
  
  .options-menu {
    font-size: small;
    font-weight: bold;
    position: absolute;
    top: 2rem;
    right: 0;
    background-color: var(--primary-text-color);
    color: var(--secondary-text-color);
    border-radius: 0.5rem;
    z-index: 15;
    width: 10rem;
    align-items: ce;
    margin-right: -4rem;
  }
  
  .options-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: left;
  }
  
  .options-menu ul li {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-bottom: 0.1rem solid var(--secondary-text-color);
  }
  
  .options-menu ul li:last-child {
    border-bottom: none;
  }
  
  .options-menu ul li:hover {
    background-color: var(--primary-color);
    color: var(--primary-text-color);
  }
  
  .movie-item.blur {
    filter: blur(0.5rem);
  }

@media (max-width: 320px) {
display: none;
}

`;

export default ThreeDotsMenuWrappper;
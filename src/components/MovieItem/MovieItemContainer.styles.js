import styled from "@emotion/styled";

const MovieItemContainer = styled.div`
position: relative;

.movie-item {
    position: relative;
    text-align: left;
    background-color: var(--primary-text-color);
    border: solid 0.1rem var(--primary-shadow-color);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0.2rem 0.2rem 1rem var(--primary-shadow-color);
    transition: filter 0.3s ease-in-out;
    
}

.movie-item img {
    width: 100%;
    height: 18rem;
    overflow: hidden;
    border-radius: 0.5rem 0.5rem 0 0;
}

.movie-item img:hover {
    cursor: pointer;
}

.movie-item h3 {
    font-size: 0.9rem;
    margin: 0.5rem 0 0 0.5rem;
}

.movie-item h3:hover {
    cursor: pointer;
    color: var(--secondary-color);
}

.movie-item p {
    font-size: 0.9rem;
    color: gray;
    margin-left: 0.5rem;
}

.movie-item-blur {
    filter: blur(0.5rem);
  }

`;

export default MovieItemContainer;
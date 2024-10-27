import styled from "@emotion/styled";

const MovieListWrapper = styled.div`
display: grid;
    grid-template-columns: repeat(5, minmax(12rem, 1fr));
    gap: 1rem;

@media (max-width: 320px) {
display: block;
}
`;

export default MovieListWrapper;
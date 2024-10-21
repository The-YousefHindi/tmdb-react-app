import styled from "@emotion/styled";

const MovieListWrapper = styled.div`
display: grid;
    grid-template-columns: repeat(5, minmax(12rem, 1fr));
    gap: 1rem;
`;

export default MovieListWrapper;
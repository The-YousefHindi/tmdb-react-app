import styled from "@emotion/styled";

const RatingCircleWrapper = styled.div`
width: 2.5rem;
    height: 2.5rem;
    margin: -1.3rem 0 0 0.5rem;
    background-color: var(--secondary-background-color);
    border: solid 0.15rem var(--secondary-background-color);
    border-radius: 50%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

@media (max-width: 320px) {
display: none;
}
`;

export default RatingCircleWrapper;
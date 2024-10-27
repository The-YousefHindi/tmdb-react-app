import styled from "@emotion/styled";

const BodyWrapper = styled.div`
margin: 0 15rem 0.2rem 15rem;
display: flex;
gap: 2rem;
justify-content: space-between;

@media (max-width: 320px) {

margin: 1rem;
display: block;
gap: 1rem;

}
`;

export default BodyWrapper;
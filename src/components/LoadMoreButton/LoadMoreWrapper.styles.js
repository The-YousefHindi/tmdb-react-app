import styled from "@emotion/styled";

const LoadMoreWrapper = styled.div`
margin: 1rem 0;
width: 100%;
background-color: var(--secondary-color);

#load-more-button {
padding: 0.75rem;
  margin: 0 30rem;
  font-size: x-large;
  font-weight: bold;
  color: var(--primary-text-color);
  text-align: center;
  width: 10rem;
  background: none;
  border: none;

  &:hover {
    color: var(--primary-color);
    cursor: pointer;
}
`;

export default LoadMoreWrapper;
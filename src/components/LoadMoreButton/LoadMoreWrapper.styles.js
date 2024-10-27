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
  width: 11rem;
  background: none;
  border: none;

  &:hover {
    color: var(--primary-color);
    cursor: pointer;
  }

}

@media (max-width: 320px) {
#load-more-button {
  margin: 0 3.5rem;
  font-size: large;
}
}

`;

export default LoadMoreWrapper;
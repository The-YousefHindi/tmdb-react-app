import styled from "@emotion/styled";

const FooterWrapper = styled.section`
margin: 0;
margin-top: 1rem;
background-color: var(--primary-color);
height: 100%;

#footer-content {
    margin: 0rem 30rem;
    padding: 2rem 0;
    display: flex;
    gap: 2rem;
}

#left-side {
    display: block;
}

#user-greeting {
    color: var(--secondary-color);
    background-color: var(--primary-text-color);
    border-radius: 0.5rem;
    text-align: center;
    font-weight: bolder;
    font-size: larger;
    margin-top: 2rem;
    margin-left: 0;
    height: 3rem;
    align-content: center;
    
}

#right-side {
    color: var(--primary-text-color);
    padding: 3rem 0;

    table {
      text-align: left;

      th, td {
        white-space: nowrap;
        padding: 0.05rem 1rem;
      }

      td:hover {
        cursor: pointer;
      }
    }
  }

#footer-logo {
    width: 10rem;
    margin-left: 2rem;
}

`;

export default FooterWrapper;
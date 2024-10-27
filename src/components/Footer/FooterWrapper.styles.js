import styled from "@emotion/styled";

const FooterWrapper = styled.section`
margin: 0;
margin-top: 1rem;
background-color: var(--primary-color);
height: 100%;

#footer-content {
    margin: 0rem 35rem;
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

@media (max-width: 320px) {

#footer-content {
    margin: 0rem 1rem;
    padding: 2rem 0;
    display: block;
    gap: 2rem;
}

#user-greeting {
    color: var(--secondary-color);
    background-color: var(--primary-text-color);
    border-radius: 0.5rem;
    text-align: center;
    font-weight: bolder;
    font-size: large;
    margin-top: 1rem;
    margin-left: 0;
    height: 2.5rem;
    align-content: center;
    
}

#footer-logo {
    width: 7.5rem;
    margin-left: 5rem;
}

#right-side {
  color: var(--primary-text-color);
  padding: 1rem 0;

  table {
    text-align: left;

    tr {
    display: block;
    }

    td, th {
    display: flex;
    }

    td:hover {
      cursor: pointer;
    }
  }
}

}

`;

export default FooterWrapper;
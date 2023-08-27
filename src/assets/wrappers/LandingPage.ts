import { styled } from 'styled-components';

const Wrapper = styled.div`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 1.5rem;
    span {
      color: var(--primary-color);
    }
  }

  p {
    line-height: 2;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    max-width: 60%;
  }

  .register-link {
    margin-right: 1rem;
  }

  .main-img {
    display: none;
  }

  // global classes hold their styles but they can be extended in styled components
  .btn {
    padding: 0.75rem 1rem;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;

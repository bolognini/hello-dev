import styled from "styled-components"

export const Content = styled.div`
  color: var(--color-1);
  width: 100%;
  font-family: 'Source Sans Pro', sans-serif;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
  margin: 50px 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-row-gap: 0;
  }

  .social-icons__link {
      text-align: center;
    }

  .social-icons__icon {
    font-size: 78px;
    color: var(--color-1);
    transition: color 0.2s linear;

    &::before {
      color: var(--color-1);
    }

    &:hover {
      color: var(--color-3);
      transition: color 0.2s linear;
    }
  }
`
import styled, { keyframes } from "styled-components"

const h0i = keyframes`
  0%, 32%, 64%, 100% { color: var(--color-2); }
  16%, 48%, 80% { color: var(--color-3); }
`

export const Content = styled.div`
  color: var(--color-1);
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;
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

    &:hover {
      animation: ${h0i} 2s linear infinite;
      transition: color 0.2s ease-in-out;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
        color: var(--color-2);
        transition: color 0.1s ease-in-out;
      }
    }
  }
`

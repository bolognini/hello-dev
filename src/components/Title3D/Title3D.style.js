import styled from "styled-components"

export const Title = styled.h1`
  color: var(--color-1);
  text-shadow: 2px 2px 0 var(--color-3), -2px -2px 0 var(--color-2);
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  font-size: 90px;
  text-align: center;
  cursor: default;

  span {
    transition: all 0.2s ease-in-out;
    display: inline-block;

    &:hover {
      text-shadow: 4px 4px 0 var(--color-3), -4px -4px 0 var(--color-2);
      transform: rotate(20deg);
      transition: all 0.2s ease-in-out;
    }
  }
`

import styled from "styled-components"

export const Title = styled.h2`
  color: var(--color-1);
  flex: ${props => props.noFlex ? 'none' : 5};
  font-family: 'Barlow Condensed';
  font-weight: bold;
  font-size: 96px;
  line-height: 81px;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin: 0;

  span {
    display: block;
    font-weight: 300;
    font-size: 48px;
    line-height: 50px;
  }
`
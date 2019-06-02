import styled from "styled-components"

export const MenuWrapper = styled.ul`
  position: absolute;
  top: 40px;
  right: 80px;
  display: inline-block;
  margin: 0;
`

export const MenuItem = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style-type: none;

  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    text-transform: lowercase;

    &.active, &:active {
      color: var(--color-3);
    }

    &:visited:not(.active) {
      color: var(--color-1);
    }
  }
`

export const MenuSeparator = styled.span`
  display: inline-block;
  padding: 0 10px;
`
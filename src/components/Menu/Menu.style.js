import styled from "styled-components"

export const MenuWrapper = styled.ul`
  position: absolute;
  top: 20px;
  display: inline-block;
  margin: 0;
  z-index: 1;
  right: 0;
  padding: 0;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 600px) {
    top: 40px;
    right: 80px;
    width: auto;
  }
`

export const MenuItem = styled.li`
  display: inline-block;
  margin: 5px 0;
  padding: 0;
  list-style-type: none;

  a {
    display: block;
    padding: 5px 10px;
    position: relative;
    text-decoration: none;
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    text-transform: lowercase;
    color: var(--color-1);
    z-index: 0;

    &:before {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      left: 5px;
      bottom: 5px;
      width: calc(100% - 10px);
      height: 0;
      background: var(--color-3);
      transition: height 0.2s ease-in-out;
    }

    &.active,
    &:active {
      color: var(--color-3);
    }

    &:visited:not(.active) {
      color: var(--color-1);
    }

    &:hover:not(.active) {
      &:before {
        height: 7px;
        transition: height 0.2s ease-in-out;
      }
    }
  }
`

export const MenuSeparator = styled.span`
  display: inline-block;
  padding: 0 10px;
`

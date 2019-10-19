import styled from "styled-components"

export const LogoWrapper = styled.ul`
  position: absolute;
  top: 40px;
  left: 40px;
  display: inline-block;
  margin: 0;
  z-index: 1;
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
  }
`

export const LogoItem = styled.li`
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
      height: 7px;
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

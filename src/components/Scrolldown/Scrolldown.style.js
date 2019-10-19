import styled from "styled-components"

export const ScrolldownWrapper = styled.div`
  position: absolute;
  right: 40px;
  bottom: 55px;
  transform: rotate(90deg);
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
  text-transform: lowercase;

  color: var(--color-1);

  &::after {
    display: block;
    content: "";
    width: 60px;
    height: 1px;
    background: var(--color-1);
    position: absolute;
    top: 15px;
    right: -65px;
  }
`

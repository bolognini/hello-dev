import styled from "styled-components"

export const ScrolldownWrapper = styled.div`
  position: absolute;
  right: 40%;
  bottom: 15px;
  /* transform: rotate(90deg); */
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  text-transform: lowercase;
  color: var(--color-1);

  @media screen and (min-width: 600px) {
    right: 40px;
    bottom: 40px;
    font-size: 16px;
    transform: rotate(90deg);
  }

  &::after {
    display: block;
    content: "";
    width: 60px;
    height: 1px;
    background: var(--color-1);
    position: absolute;
    bottom: -35px;
    right: 0;
    transform: rotate(90deg);

    @media screen and (min-width: 600px) {
      display: block;
      content: "";
      width: 60px;
      height: 1px;
      background: var(--color-1);
      position: absolute;
      top: 10px;
      bottom: 0;
      right: -65px;
      transform: none;
    }
  }
`

import styled from "styled-components"

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.tall ? "calc(100vh - 40px)" : "500px")};
  position: relative;
`

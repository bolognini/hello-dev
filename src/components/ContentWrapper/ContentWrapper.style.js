import styled from "styled-components"

export const ContentSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: ${props => props.vertical ? "column" : "row"};
  justify-content: ${props => props.vertical ? "flex-start" : "initial"};
  width: ${props => props.vertical ? "100%" : "auto"};
  align-items: flex-start;
  height: 50vh;
  min-height: 500px;
  max-width: 952px;
  padding: 100px 0;
  margin: 0 auto;
`
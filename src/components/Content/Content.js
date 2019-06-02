import React from 'react'
import { ContentWrapper } from './Content.style'


const Content = props => (
  <ContentWrapper>
    {props.children}
  </ContentWrapper>
)

export default Content

import React from 'react'
import { ContentSection } from './ContentWrapper.style'


const ContentWrapper = props => (
  <ContentSection vertical={props.vertical}>
    {props.children}
  </ContentSection>
)

export default ContentWrapper

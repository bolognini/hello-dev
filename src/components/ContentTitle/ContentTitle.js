import React from 'react'
import { Title } from './ContentTitle.style'


const ContentTitle = props => (
  <Title noFlex={props.noFlex}>{props.children}</Title>
)

export default ContentTitle

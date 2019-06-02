import React from 'react'
import { Section } from './SectionWrapper.style'


const SectionWrapper = (props) => (
  <Section tall={props.tall}>
    {props.children}
  </Section>
)

export default SectionWrapper

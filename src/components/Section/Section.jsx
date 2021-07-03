import React from 'react'
import { Title, Wrapper } from './Section.styles'

function Section({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}

export default Section

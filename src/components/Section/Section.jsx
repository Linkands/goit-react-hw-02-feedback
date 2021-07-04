import React from 'react'
import { Title, Wrapper } from './Section.styles'
import PropTypes from 'prop-types'

function Section({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section

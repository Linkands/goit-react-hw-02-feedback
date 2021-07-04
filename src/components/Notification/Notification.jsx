import React from 'react'
import { Text } from './Notification.styles'
import PropTypes from 'prop-types'

function Notification({ message }) {
  return <Text>{message}</Text>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
export default Notification

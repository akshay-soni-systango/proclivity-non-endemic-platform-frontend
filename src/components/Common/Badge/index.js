import React from 'react'
import {Badge as BootstrapBadge} from 'react-bootstrap';

import './style.scss'

const Badge = ({children, bg}) => {
  return (
    <BootstrapBadge pill bg={bg}>{children}</BootstrapBadge>
  )
}

Badge.defaultProps = {
  bg: 'success',
}

export default Badge
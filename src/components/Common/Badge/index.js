import React from 'react'

import './style.scss'

const Badge = ({children}) => {
  return (
    <span class="badge rounded-pill bg-success">{children}</span>
  )
}

export default Badge
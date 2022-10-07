import React from 'react';
import './style.scss';

const Label = ({value, Icon, showStar, ...props }) => {
  return (
    <label {...props}>{value} {showStar && <span className='required'>*</span>}
    {Icon && <Icon />}
    </label>
  )
}

export default Label
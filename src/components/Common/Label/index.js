import React from 'react';
import './style.scss';

const Label = ({value, Icon, showStar, children, ...props }) => {
  return (
    <label {...props}>{value}{children} {showStar && <span className='required'>*</span>}
    {Icon && <Icon />}
    </label>
  )
}

export default Label
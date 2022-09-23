import React from 'react';
import './style.scss';

const Label = ({value, Icon, ...props }) => {
  return (
    <label {...props}>{value}
    {Icon && <Icon />}
    </label>
  )
}

export default Label
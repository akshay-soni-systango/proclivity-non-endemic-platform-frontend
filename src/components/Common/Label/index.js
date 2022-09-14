import React from 'react';
import './style.scss';

const Label = ({value, icon, ...props }) => {
  return (
    <label {...props}>{value}{icon}</label>
  )
}

export default Label
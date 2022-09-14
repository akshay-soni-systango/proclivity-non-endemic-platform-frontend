import React from 'react';
import './style.scss'

const Heading = ({level, children, ...props}) => {
    const CustomTag = `h${level}`;
  return (
    <CustomTag {...props} >{children}</CustomTag>
  )
}
Heading.defaultProps = {
    level : 3
}
export default Heading

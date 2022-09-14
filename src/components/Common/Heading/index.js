import React from 'react'

const Heading = ({level, ...props}) => {
    const CustomTag = `h${level}`;
  return (
    <CustomTag {...props} >Hello</CustomTag>
  )
}
Heading.defaultProps = {
    level : 3
}
export default Heading
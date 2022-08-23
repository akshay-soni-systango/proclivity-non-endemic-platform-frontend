import React from "react";

import { Button as BootstrapButton } from 'react-bootstrap';
import './style.scss'

const Button = ({ src, text, variant }) => {
  return (
    <BootstrapButton variant={variant}>
      <img src={src} alt="" className="btn-icon" />
        {text}
    </BootstrapButton>
  );
};

Button.defaultProps = {
    variant: 'primary',
  }
export default Button;

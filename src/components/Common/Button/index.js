import React from "react";

import { Button as BootstrapButton } from "react-bootstrap";
import "./style.scss";

const Button = ({ src, text, icon, ...props }) => {
  return (
    <BootstrapButton {...props}
    type='button'
    >
      
      {src && (
        <img
          src={src}
          alt={text}
          className={`${!Boolean(text) && "m-0"} btn-icon`}
        />
      )}
      {text}
      {icon && (
        <img
          src={icon}
          alt={text}
          className={`${!Boolean(text) && "m-0"} btn-icon-right`}
        />
      )}
    </BootstrapButton>
  );
};

Button.defaultProps = {
  variant: "primary",
};
export default Button;

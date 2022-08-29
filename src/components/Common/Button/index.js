import React from "react";

import { Button as BootstrapButton } from "react-bootstrap";
import "./style.scss";

const Button = ({ src, text, ...props }) => {
  return (
    <BootstrapButton {...props}>
      {src && <img src={src} alt={text} className={`${!Boolean(text) && 'm-0'} btn-icon`} />}
      {text}
    </BootstrapButton>
  );
};

Button.defaultProps = {
  variant: "primary",
};
export default Button;

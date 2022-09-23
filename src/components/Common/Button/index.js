import React from "react";

import { Button as BootstrapButton } from "react-bootstrap";
import "./style.scss";

const Button = ({ text, Icon, iconClassName, iconProps, iconPosition, ...props }) => {
  return (
    <BootstrapButton {...props}
    type='button'
    >
      
      {iconPosition === 'left' && Icon && (
        <Icon
          alt={text}
          className={`${!Boolean(text) && "m-0"} btn-icon`}
        />
      )}
      {text}
      {iconPosition === 'right' && Icon && (
        <Icon
          alt={text}
          className={`${!Boolean(text) && "m-0"} btn-icon-right ${iconClassName}`}
          {...iconProps}
        />
      )}
    </BootstrapButton>
  );
};

Button.defaultProps = {
  variant: "primary",
  iconPosition: 'left', // 'right'
};
export default Button;

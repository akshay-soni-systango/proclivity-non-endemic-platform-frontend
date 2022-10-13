import React from "react";

import { Button as BootstrapButton } from "react-bootstrap";
import "./style.scss";
import PropTypes from 'prop-types'
import classNames from "classnames";

const Button = ({ text, Icon, iconClassName, iconProps, iconPosition, children, onClick, ...props }) => {
  return (
    <BootstrapButton
    type='button' {...props}
    onClick={onClick}
    >
      
      {iconPosition === 'left' && Icon && (
        <Icon
          alt={text}
          className={classNames("btn-icon",{
            "m-0" : !Boolean(text)
          })}
        />
      )}
      {text}{children}
      {iconPosition === 'right' && Icon && (
        <Icon
          alt={text}
          className={classNames("btn-icon-right",iconClassName, {
            "m-0" : !Boolean(text)
          })}
          {...iconProps}
        />
      )}
    </BootstrapButton>
  );
};
Button.propTypes = {
onClick: PropTypes.func,
}

Button.defaultProps = {
  variant: "primary",
  iconPosition: 'left', // 'right'
};
export default Button;

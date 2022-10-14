import React from "react";
import classNames from 'classnames';
import "./style.scss";

const Input = ({ Icon, error, className, placeholder, ...props }) => {
  return (
    <div className={classNames("input-container", className, {
      'has-error': error,
    })}>
      <input className={classNames("form-control",{
        "has-img" : Boolean(Icon),
        "no-img" : !Boolean(Icon)
      })}  {...props} placeholder={placeholder} />      
      {Icon && <Icon className="input-img"/>}
      <div className="error-msg">{error}</div>
    </div>
  );
};
Input.defaultProps = {
  type: "text",
  placeholder: "Search",
};
export default Input;

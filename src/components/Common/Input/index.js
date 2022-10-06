import React from "react";
import classNames from 'classnames';
import "./style.scss";

const Input = ({ Icon, error, className, ...props }) => {
  return (
    <div className={classNames("input-container", className, {
      'has-error': error,
    })}>
      <input className={!Boolean(Icon) ? "no-img" : "has-img"}  {...props} required />      
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

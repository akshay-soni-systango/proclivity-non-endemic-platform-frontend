import React from "react";

import "./style.scss";

const Input = ({ Icon, ...props }) => {
  // console.log(...props);
  return (
    <div className="input-container mb-2">
      <input className={!Boolean(Icon) ? "no-img" : "has-img"}  {...props} />
      {Icon && <Icon className="input-img"/>}
    </div>
  );
};
Input.defaultProps = {
  type: "text",
  placeholder: "Search",
};
export default Input;

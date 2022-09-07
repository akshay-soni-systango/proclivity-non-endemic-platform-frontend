import React from "react";

import "./style.scss";

const Input = ({ icon, ...props }) => {
  return (
    <div className="input-container">
      <input className={icon === 0 ? "no-img" : "has-img"}  {...props} />
      {icon && <img className="input-img" src={icon} alt="Loading..."/>}
    </div>
  );
};
Input.defaultProps = {
  type: "text",
};
export default Input;

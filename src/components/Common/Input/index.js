import React from "react";

import "./style.scss";

const Input = ({ icon, ...props }) => {
  return (
    <div className="input-container">
      <input {...props} className={icon === 0 ? "" : "has-img"} />
      {icon && <img src={icon} className="input-img" />}
    </div>
  );
};
Input.defaultProps = {
  type: "text",
};
export default Input;

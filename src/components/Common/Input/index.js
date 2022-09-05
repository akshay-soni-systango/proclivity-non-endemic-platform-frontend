import React from "react";

import "./style.scss";

const Input = ({ icon, ...props }) => {
  return (
    <div className="input-container">
      <input {...props} className={icon === 0 ? "no-img" : "has-img"} />
      {icon && <img src={icon} className="input-img" alt="Loading..."/>}
    </div>
  );
};
Input.defaultProps = {
  type: "text",
};
export default Input;

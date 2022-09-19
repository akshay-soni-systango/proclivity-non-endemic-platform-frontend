import React from "react";

import "./style.scss";

const Input = ({ icon, ...props }) => {
  console.log(icon);
  return (
    <div className="input-container mb-2">
      <input className={!Boolean(icon) ? "no-img" : "has-img"}  {...props} />
      {icon && <img className="input-img" src={icon} alt="Loading..."/>}
    </div>
  );
};
Input.defaultProps = {
  type: "text",
};
export default Input;

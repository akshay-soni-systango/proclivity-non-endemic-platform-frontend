import React from "react";
import './style.scss';

const Checkbox = ({text, id, ...props}) => {
    console.log(props);
  return (
    <div class="checkbox-wrapper">
      <div class="form-group">
        <input type="checkbox" id={id} {...props}/>
        <label for={id}>{text}</label>
      </div>
    </div>
  );
};

export default Checkbox;

import React from "react";
import Checkbox from "../components/Common/Checkbox";

export default {
  title: "Component/Checkbox",
  component: Checkbox,
};

export const CheckboxElement = ({children, ...props}) => (<>
  <Checkbox  
    {...props} 
    id="html"
  />
  <Checkbox  
    {...props} 
    id="css"
  />
</>
);
CheckboxElement.args = {
    text: 'Programmatic Team 1',
};
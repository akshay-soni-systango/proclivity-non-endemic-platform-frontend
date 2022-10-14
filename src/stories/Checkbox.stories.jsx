import React from "react";
import Checkbox from "../components/Common/Checkbox";

export default {
  title: "Component/Elements/Checkbox",
  component: Checkbox,
};

export const CheckboxElement = ({children,id, ...props}) => (<>
  <Checkbox  
    {...props} 
    id={id}
  />
</>
);
CheckboxElement.args = {
    text: 'Programmatic Team 1',
    id: '1',
};
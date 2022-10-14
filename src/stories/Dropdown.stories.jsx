import React from "react";
import Dropdown from "../components/Common/Dropdown";

export default {
  title: "Component/Elements/Dropdown",
  component: Dropdown,
  argTypes: { 
    hasPreValue: { 
      control: 'boolean',
    } ,
    preValue: {
      control: {
        type: 'text',
      },
      if: {
        arg: 'hasPreValue'
      }
    },
    
  },
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const PrimaryDropdown = ({...props}) => (
  <Dropdown  
    {...props}     
  />
);
PrimaryDropdown.args = {
  hasPreValue: false,
  preValue: 'Static:',
  placeholderName: "Select",
  options,
  variant: 'primary'
};
import React from "react";
import Dropdown from "../components/Common/Dropdown";


export default {
  title: "Component/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
    preValue: {
      
    }
  },
};

export const PrimaryDropdown = () => (
    <Dropdown preValue="Static:" placeholderName="Select" options={[{value: 'chocolate', label: 'Chocolate'}]}/>
);
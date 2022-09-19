import React from "react";
import Dropdown from "../components/Common/Dropdown";


export default {
  title: "Example/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const PrimaryDropdown = () => (
    <Dropdown preValue="Static:" placeholderName="Select" />
);
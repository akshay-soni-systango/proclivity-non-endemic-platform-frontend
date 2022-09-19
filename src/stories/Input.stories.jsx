import React from "react";
import Input from "../components/Common/Input";
import searchIcon from "../assets/Icons/search.svg";


export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const InputField = () => (
    <>
        <Input placeholder="Select" />
        <Input placeholder="Search" icon={searchIcon} />
    </>
);
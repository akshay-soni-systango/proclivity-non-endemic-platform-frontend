import React from "react";
import Label from "../components/Common/Label";


export default {
  title: "Example/Label",
  component: Label,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const LabelText = () => (
    <Label htmlFor="groupName" value="Name" />
);
import React from "react";
import { iconListObj } from "../components/Common/Icons";
import Label from "../components/Common/Label";


export default {
  title: "Component/Elements/Label",
  component: Label,
  argTypes: {
    Icon: {
      table: {
        type: {
          summary: 'Select Icon for label field.',
        },
      },
      control: {
        type: "select",
        options: {
          "no icon": null,
          ...iconListObj,
        },
      },
    },
  },
};

export const LabelText = ({children, ...props}) => (
    <Label  {...props} >{children}</Label>
);
LabelText.args = {
  value: "LabelName",
  htmlFor: "groupName",
  showStar: true
};

export const SubLabel = ({children, ...props}) => (
  <Label htmlFor="groupName" className="sub-label" {...props}></Label>
);
SubLabel.args = {
  value: "LabelName",
};
SubLabel.parameters = {
  docs: {
    description: {
      story: 'Small **label** heading',
    },
  },
};

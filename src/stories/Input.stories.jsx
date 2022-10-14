import React from "react";
import { iconListObj } from "../components/Common/Icons";
import Input from "../components/Common/Input";

export default {
  title: "Component/Elements/Input",
  component: Input,
  argTypes: {
    Icon: {
      table: {
        type: {
          summary: "If need icon in input select icon",
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
    type: {
      control: "select",
      options: ["text", "number", "email", "password"],
      table: {
        type: {
          summary: 'text type "text","number","email", "password"',
        },
      },
    },
  },
};

export const InputField = ({ ...props }) => 
<>
<Input {...props} /><Input {...props} />
</>
;
InputField.args = {
  placeholder: "Search",
  error: ''
};

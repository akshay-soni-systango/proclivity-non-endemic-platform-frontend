import React from "react";
import { Badge } from "react-bootstrap";
// import { Add, AddFile } from "../assets/Icons";
import { iconListObj } from "../components/Common/Icons";

export default {
  title: "Component/Badge",
  component: Badge,
  subtitle: "Set the most appropriate variant of the component for your use.",
  parameters: {
    docs: {
      description: {
        component: "Display contextual data such as statuses or tags.",
      },
    },
  },
  argTypes: {
    Icon: {
      table: {
        type: {
          summary: '"React.ReactNode" it should pass in the children',
        },
      },
      control: {
        type: "select",
        options: {
          'no icon': null,
          ...iconListObj,
        },
      },
    },
    children: {
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    bg: {
      control: "select",
      options: ["primary", "secondary", "danger"],
      description:
        "appearance is used to change the background to show the condition",
      table: {
        type: {
          summary: "secondary, danger, success",
        },
      },
    },
  },
};

export const BadgeElement = ({ children, Icon, ...props }) => (
  <Badge className="me-2" {...props}>
    {Icon && <Icon />}
    {children}
  </Badge>
);
BadgeElement.args = {
  children: "active",
  bg: "secondary",
};

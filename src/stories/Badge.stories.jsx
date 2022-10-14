import React from "react";
import { Badge } from "react-bootstrap";
import { AddFile } from "../assets/Icons";
// import { Add, AddFile } from "../assets/Icons";
import { iconListObj } from "../components/Common/Icons";

export default {
  title: "Component/Elements/Badge",
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
          "no icon": null,
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
      options: ["primary", "secondary", "danger", "light"],
      description:
        "appearance is used to change the background to show the condition",
      table: {
        type: {
          summary: "secondary, danger, success, light",
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

export const AllBadge = () => (
  <>    
    <Badge bg="danger" className="me-2">
      active
    </Badge>
    <Badge bg="light" className="me-2">
      active
    </Badge>
    <Badge bg="primary" className="me-2">
      active
    </Badge>
    <Badge bg="secondary" className="me-2">
      <AddFile />
      active
    </Badge>
  </>
)
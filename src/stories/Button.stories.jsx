import React from "react";
import Button from "../components/Common/Button";
import { Add } from "../assets/Icons";
import { iconListObj } from "../components/Common/Icons";

export default {
  title: "Component/Button",
  subtitle: "Component/Button",
  subTitle: "Component/Button",
  component: Button,
  argTypes: {
    iconPosition: { 
      control: "select", options: ["left", "right"],
      table: {
        type: {
          summary: 'iconPosition is used to change the position of icon by default "left" or "right"',
        },
      },
    },
    variant: { 
      control: "select", options: ["primary", "secondary"],
      table: {
        type: {
          summary: 'There are a few variants in order to cover a variety of Button. "primary","secondary"',
        },
      },
     },
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
  },
  parameters: {
    docs: {
      description: {
        component: "Some component _markdown_",
      },
    },
  },
};

export const Default = ({ children, ...props }) => (
  <Button {...props}>
    {children}
  </Button>
);
Default.args = {
  text: "Button",
  variant: "primary",
  iconPosition: "left",
};

export const Primary = () => (
  <>
    <Button variant="primary" className="me-2" Icon={Add} />
    <Button variant="primary" className="me-2" text="Primary" />
    <Button
      variant="primary"
      className="me-2"
      text="src with Button"
      Icon={Add}
    />
    <Button
      variant="primary"
      iconPosition="right"
      text="Button with Icon"
      Icon={Add}
    />
  </>
);
Primary.parameters = {
  docs: {
    description: {
      story: 'All type of **Primary** button ',
    },
  },
};

export const Secondary = () => (
  <>
    <Button variant="secondary" Icon={Add} className="me-2" />
    <Button variant="secondary" text="Secondary" className="me-2" />
    <Button
      variant="secondary"
      Icon={Add}
      text="src with Button"
      className="me-2"
    />
    <Button
      variant="secondary"
      iconPosition="right"
      Icon={Add}
      text="Icon with Button"
    />
  </>
);
Secondary.parameters = {
  docs: {
    description: {
      story: 'All type of **Secondary** button ',
    },
  },
};

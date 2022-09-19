import React from "react";
import Button from "../components/Common/Button";
import addFile from "../assets/Icons/add-file.svg";
import add from "../assets/Icons/plus.svg";
import addDark from "../assets/Icons/plus-dark.svg";


export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// const Template = (args) => <Button {...args} />;

export const Primary = () => (
  <>
    <Button variant="primary" src={add} className="me-2"/>
    <Button variant="primary"  text="Primary" className="me-2" />
    <Button variant="primary" src={add} text="src with Button" className="me-2" />
    <Button variant="primary" icon={add} text="Button with icon" />
  </>
);

export const Secondary = () => (
  <>
    <Button variant="secondary" src={addFile} className="me-2" />
    <Button variant="secondary"  text="Secondary" className="me-2" />
    <Button variant="secondary" src={addFile} text="src with Button" className="me-2" />
    <Button variant="secondary" icon={addDark} text="icon with Button" />
  </>
);
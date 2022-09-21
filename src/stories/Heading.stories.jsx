import React from "react";
import Heading from "../components/Common/Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Headings",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {
  level: 1,
  children: "h1.$200.00 (48,60)",
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  children: "h2.Main Headings (24,32)",
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  children: "h3.table sidebar headings (20,30)",
};

export const H5 = Template.bind({});
H5.args = {
  level: 5,
  children: "h5.main-title (16,24)",
};

export const H5lightTitle = Template.bind({});
H5lightTitle.args = {
  level: 5,
  children: "h5.light-title  (16,24)",
  className: "light-title"
};

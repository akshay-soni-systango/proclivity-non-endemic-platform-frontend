import React from "react";
import Heading from "../components/Common/Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Headings",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    docs: {
      description: {
        component: "Heading for Font size 30px, line height 38px use h2 tag.",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {
  level: 1,
  children: "$200.00",
};
H1.parameters = {
  docs: {
    description: {
      story: 'Font size 30px, line height 38px using h1 tag.',
    },
  },
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  children: "Main Headings",
};
H2.parameters = {
  docs: {
    description: {
      story: 'Heading for Font size 24px, line height 32px use h2 tag.',
    },
  },
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  children: "Table sidebar headings",
};
H3.parameters = {
  docs: {
    description: {
      story: 'Heading for Font size 20px, line height 30px use h3 tag.',
    },
  },
};

export const H5 = Template.bind({});
H5.args = {
  level: 5,
  children: "Main title",
};
H5.parameters = {
  docs: {
    description: {
      story: 'Heading for Font size 16px, line height 24px use h5 tag.',
    },
  },
};

export const H5lightTitle = Template.bind({});
H5lightTitle.args = {
  level: 5,
  children: "light-title",
  className: "Light title"
};
H5lightTitle.parameters = {
  docs: {
    description: {
      story: 'Heading for Font size 16px, line height 24px use h5 tag with using className ".light-title" for Light color fonts .',
    },
  },
};

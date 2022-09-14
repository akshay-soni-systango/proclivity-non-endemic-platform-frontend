import React from 'react';
import Heading from '../../components/Common/Heading';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Heading',
    component: Heading,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => <Heading {...args} />;
  
  export const H1 = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  H1.args = {
    level: 1,
    children: '$200.00',
  };
  
  // export const H2 = Template.bind({});
  // H2.args = {
  //     level: 2,
  //     children: 'Helloo',
  // };
  
  // export const H3 = Template.bind({});
  // H3.args = {
  //     level: 3,
  //     children: 'Helloo',
  // };
  
  // export const H4 = Template.bind({});
  // H4.args = {
  //   size: 'small',
  //   label: 'Button',
  // };
  
  // export const H5 = Template.bind({});
  // H5.args = {
  //   size: 'small',
  //   label: 'Button',
  // };
  
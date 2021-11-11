import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationIcon } from '.';

export default {
  title: 'Example/NavigationIcon',
  component: NavigationIcon,
} as ComponentMeta<typeof NavigationIcon>;

const Template: ComponentStory<typeof NavigationIcon> = (args) => <NavigationIcon {...args} />;

export const left = Template.bind({});
left.args = {
  side: 'left',
  color: '#fff'
};

export const right = Template.bind({});
right.args = {
  side: 'right',
  color: "#fff"
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderCustom as Header } from '.';

export default {
    title: 'Example/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const black = Template.bind({});
black.args = {
    isBlack: true,
};

export const transparent = Template.bind({});
transparent.args = {
    isBlack: false,
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    isBlack: true
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    isBlack: true
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    isBlack: true
};

export const Spacing = Template.bind({});
Spacing.args = {
    spacing: '50',
    isBlack: true
};

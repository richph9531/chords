import React from 'react';
import Header from '../components/Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: 'Standard title',
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  title: '',
};

export const NoArgs = Template.bind({});
NoArgs.args = {};

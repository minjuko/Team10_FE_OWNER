
import React from 'react';
import { TextArea } from './TextArea';

export default {
  title: 'Atom/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
  },
};

export const MainTextArea = {
  args: {
    placeholder: {control: 'text'},
    size: "default",
  },
};

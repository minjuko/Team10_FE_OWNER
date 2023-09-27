import React from 'react';
import { TextInput } from './TextInput';

export default {
  title: 'Atom/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: 'text',
    placeholder: { control: 'text' },
  },
};

export const MainTextInput = {
  args: {
    placeholder: {control: 'text'},
  },
};

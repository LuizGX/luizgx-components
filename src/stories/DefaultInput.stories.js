import { fn } from 'storybook/test';

import { DefaultInput } from './DefaultInput';

export default {
  title: 'Example/DefaultInput',
  component: DefaultInput,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Input = {
  args: {
    className: '',
    label: 'Label',
    placeholder: 'placeholder',
  },
};

export const Required = {
  args: {
    className: '',
    required: true,
    label: 'Label',
    placeholder: 'placeholder',
  },
};
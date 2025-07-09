import { fn } from 'storybook/test';

import { DefaultCheckbox } from './DefaultCheckbox';

export default {
  title: 'Example/DefaultCheckbox',
  component: DefaultCheckbox,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Unlabeled = {
  args: {},
};

export const Labeled = {
  args: {
    label: 'Label',
  },
};
import { fn } from 'storybook/test';

import { DefaultButton } from './DefaultButton';

export default {
  title: 'Example/DefaultButton',
  component: DefaultButton,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    className: 'primary-button',
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    className: 'secondary-button',
    children: 'Button',
  },
};

export const Danger = {
  args: {
    className: 'danger-button',
    children: 'Button',
  },
};

export const Edit = {
  args: {
    className: 'edit-button',
    children: 'Button',
  },
};

export const Outline = {
  args: {
    className: 'outline-button',
    children: 'Button',
  },
};

export const Text = {
  args: {
    className: 'text-button',
    children: 'Button',
  },
};
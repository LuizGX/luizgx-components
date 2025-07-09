import { fn } from 'storybook/test';

import { DefaultSelect } from './DefaultSelect';

export default {
  title: 'Example/DefaultSelect',
  component: DefaultSelect,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  args: { onClick: fn() },
};

const options = [
  {label: "Option 1",
    value: "opt1",
  },
  {
    label: "Option 2",
    value: "opt2",
  },
  {
    label: "Option 3",
    value: "opt3",
  },
]

export const Select = {
  args: {
    className: '',
    label: 'Label',
    placeholder: 'Choose',
    options: options,
  },
};

export const Searcheable = {
  args: {
    className: '',
    label: 'Label',
    placeholder: 'Choose',
    options: options,
    isSearchable: true,
  },
};
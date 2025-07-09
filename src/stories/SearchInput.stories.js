import { fn } from 'storybook/test';

import { SearchInput } from './SearchInput';

export default {
  title: 'Example/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
};

export const Search = {
  args: {
    placeholder: 'Search...',
  },
};

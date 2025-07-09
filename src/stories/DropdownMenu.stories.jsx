import { fn } from 'storybook/test';

import { DropdownMenu } from './DropdownMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faUtensils, faChartPie, faTrash } from "@fortawesome/free-solid-svg-icons";

export default {
  title: 'Example/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  args: { onClick: fn() },
};

const options = (key) => {
  return [
    {
      id: key,
      icon: <FontAwesomeIcon icon={faUtensils} />,
      name: "Refeições",
      onClick: () => {},
    },
    {
      id: key,
      icon: <FontAwesomeIcon icon={faChartPie} />,
      name: "Bioimpedância",
      onClick: () => {},
    },
    {
      id: key,
      icon: <FontAwesomeIcon icon={faTrash} />,
      name: "Excluir",
      onClick: () => {},
    },
  ];
};

export const Dropdown = {
  args: {
    className: '',
    options: options(1),
    icon: <FontAwesomeIcon icon={faEllipsisV} />
  },
};
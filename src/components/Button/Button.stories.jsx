import Button from './Button';

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "secondary", "danger", 'neutral'],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    variant : {
        control : 'radio',
        options : ['outline', 'text', 'box', 'underline']
    },
    disabled: { control: "boolean" },
    leftIcon: { control: "boolean" },
    rightIcon: { control: "boolean" },
    block :   {control : "boolean"},
    onClick:  { action: "clicked" },
    children: { control: "text" },

  },
  args: {
    children: "Button",
    size: "md",
    color : "primary",
    variant : "box",
    disabled: false,
    block: false
  },
};

export const Basic = {};


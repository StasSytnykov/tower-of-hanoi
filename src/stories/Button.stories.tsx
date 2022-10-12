import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../components/Button/Button";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "+1 disk",
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "-1 disk",
};

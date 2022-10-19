import { Meta, Story } from "@storybook/react";
import { Button } from "../components/Button/Button";
import { IBtnProps } from "../utils/types";

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

const Template: Story<IBtnProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "-1 disk",
};

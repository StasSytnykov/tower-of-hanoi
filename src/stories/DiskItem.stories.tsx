import { Meta, Story } from "@storybook/react";
import { DiskItem } from "../components/DiskItem/DiskItem";
import { IDiskItemStyledProps } from "../utils/types";

const meta: Meta = {
  title: "DiskItem",
  component: DiskItem,
};

export default meta;

const Template: Story<IDiskItemStyledProps> = (args) => <DiskItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 100,
  color: "#123123",
  isHidden: true,
};

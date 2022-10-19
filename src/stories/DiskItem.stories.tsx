import { Meta, Story } from "@storybook/react";
import { DiskItemPages } from "../pages/PegList/PegItem/DiskList/DiskItemPages";
import { IDiskItemStyledProps } from "../interfaces/disksInterface";

const meta: Meta = {
  title: "DiskItem",
  component: DiskItemPages,
};

export default meta;

const Template: Story<IDiskItemStyledProps> = (args) => (
  <DiskItemPages {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: 100,
  color: "#123123",
  isHidden: true,
};

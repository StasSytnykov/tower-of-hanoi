import { Meta, Story } from "@storybook/react";
import { DiskItemStyled } from "../components/PegsList/PegItem/DiskList/DiskList.styled";
import { IDiskItemStyledProps } from "../interfaces/disksInterface";

const meta: Meta = {
  title: "DiskItem",
  component: DiskItemStyled,
};

export default meta;

const Template: Story<IDiskItemStyledProps> = (args) => (
  <DiskItemStyled {...args} />
);

export const Default = Template.bind({});

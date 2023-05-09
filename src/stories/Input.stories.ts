import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/input/Input";

const meta = {
  title: "KissCuseMe/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Hello World",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "Hello World",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Hello World",
  },
};

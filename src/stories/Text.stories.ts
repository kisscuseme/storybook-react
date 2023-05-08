import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../components/text/Text";

const meta = {
  title: "KissCuseMe/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleOne: Story = {
  args: {
    as: "h1",
    children: "Hello World",
  },
};

export const TitleTwo: Story = {
  args: {
    as: "h2",
    children: "Hello World",
  },
};

export const TitleThree: Story = {
  args: {
    as: "h3",
    children: "Hello World",
  },
};

export const TitleFour: Story = {
  args: {
    as: "h4",
    children: "Hello World",
  },
};

export const TitleFive: Story = {
  args: {
    as: "h5",
    children: "Hello World",
  },
};

export const TitleSix: Story = {
  args: {
    as: "h6",
    children: "Hello World",
  },
};

export const Label: Story = {
  args: {
    as: "label",
    children: "Hello World",
    htmlFor: "id"
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Hello World",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Hello World",
  },
};

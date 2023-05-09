import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../components/dropdown/Dropdown";

const meta = {
  title: "KissCuseMe/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initText: "선택하세요",
    id: "id1",
    items: [{href: "#1", key: "key1", label: "데이터1"}, {href: "#2", key: "key2", label: "데이터2"}]
  },
};

export const Large: Story = {
  args: {
    size: "large",
    initText: "선택하세요",
    id: "id2",
    items: [{href: "#1", key: "key1", label: "데이터1"}, {href: "#2", key: "key2", label: "데이터2"}]
  },
};

export const Small: Story = {
  args: {
    size: "small",
    initText: "선택하세요",
    id: "id3",
    items: [{href: "#1", key: "key1", label: "데이터1"}, {href: "#2", key: "key2", label: "데이터2"}]
  },
};
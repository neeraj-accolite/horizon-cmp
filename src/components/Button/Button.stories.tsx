import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    color: "primary",
    onClick: () => console.log("Primary button is clicked"),
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    color: "secondary",
    onClick: () => console.log("Secondary button is clicked"),
    disabled: false,
  },
};

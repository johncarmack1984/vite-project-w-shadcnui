import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "radio" },
      defaultValue: "default",
      description:
        "Changes the look and feel of the button to match the context of the page.",
      type: { name: "string", required: false },
    },
    size: { options: ["default", "sm", "lg", "icon"] },
    asChild: { type: "boolean", defaultValue: false },
    children: { type: "string", defaultValue: "Button" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
};

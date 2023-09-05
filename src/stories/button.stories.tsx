import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Button",
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
      control: { type: "inline-radio" },
      defaultValue: "default",
      description:
        "Changes the look and feel of the button to match the context of the page.",
      type: { name: "string", required: false },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      defaultValue: "default",
      control: "inline-radio",
    },
    children: { type: "string", defaultValue: "Button" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonTemplate: Story = {
  render: ({ children, ...args }) => {
    return (
      <div className="flex flex-row">
        <div className="p-5 border-2 rounded-l-md">
          <Button {...args}>{children}</Button>
        </div>
        <div className="dark p-5 bg-background rounded-r-md">
          <Button {...args}>{children}</Button>
        </div>
      </div>
    );
  },
};

export const Default: Story = {
  ...ButtonTemplate,
  args: {
    variant: "default",
    size: "default",
    children: meta.argTypes.children.defaultValue,
  },
};

export const Destructive: Story = {
  ...ButtonTemplate,
  args: {
    variant: "destructive",
    size: "default",
    children: meta.argTypes.children.defaultValue,
  },
};

export const Outline: Story = {
  ...ButtonTemplate,
  args: {
    variant: "outline",
    size: "default",
    children: meta.argTypes.children.defaultValue,
  },
};

export const Secondary: Story = {
  ...ButtonTemplate,
  args: {
    variant: "secondary",
    size: "default",
    children: meta.argTypes.children.defaultValue,
  },
};

export const Ghost: Story = {
  ...ButtonTemplate,
  args: {
    variant: "ghost",
    size: "default",
    children: meta.argTypes.children.defaultValue,
  },
};

export const Link: Story = {
  ...ButtonTemplate,
  args: {
    variant: "link",
    size: "default",
    children: meta.argTypes.children.defaultValue,
  },
};

export const Small: Story = {
  ...ButtonTemplate,
  args: {
    variant: "default",
    size: "sm",
    children: meta.argTypes.children.defaultValue,
  },
};

export const Large: Story = {
  ...ButtonTemplate,
  args: {
    variant: "default",
    size: "lg",
    children: meta.argTypes.children.defaultValue,
  },
};

export const Icon: Story = {
  ...ButtonTemplate,
  args: {
    variant: "default",
    size: "icon",
    children: "👍",
  },
};

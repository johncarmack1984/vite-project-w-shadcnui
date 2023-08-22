import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { type: "string", defaultValue: "" },
    children: { type: "string", defaultValue: "Card Content" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardTemplate: Story = {
  render: ({ children, ...args }) => {
    return (
      <div className="flex flex-row">
        <div className="p-5 border-2 rounded-l-md">
          <Card {...args}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>Card Footer</CardFooter>
          </Card>
        </div>
        <div className="dark p-5 bg-background rounded-r-md">
          <Card className="dark" {...args}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>Card Footer</CardFooter>
          </Card>
        </div>
      </div>
    );
  },
};

export const Default: Story = {
  ...CardTemplate,
  args: {
    className: meta.argTypes.className.defaultValue,
    children: meta.argTypes.children.defaultValue,
  },
};

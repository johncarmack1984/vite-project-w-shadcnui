import type { Meta, StoryObj } from "@storybook/react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { type: "string", defaultValue: "Popover Content" },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const PopoverTemplate: Story = {
  render: ({ children, ...args }) => {
    return (
      <div className="flex flex-row">
        <div className="p-10 border-2 rounded-l-md">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent {...args}>{children}</PopoverContent>
          </Popover>
        </div>
        <div className="dark p-10 bg-background rounded-r-md">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent {...args} className="dark">
              {children}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  },
};

export const Default: Story = {
  ...PopoverTemplate,
  args: {
    children: meta.argTypes.children.defaultValue,
  },
};

export const AsModal: Story = {
  ...PopoverTemplate,
  args: {
    children: meta.argTypes.children.defaultValue,
  },
};

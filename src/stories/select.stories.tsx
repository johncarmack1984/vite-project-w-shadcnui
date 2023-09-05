import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const SelectRender: Story = {
  render: ({ children, ...args }) => {
    return (
      <div className="flex flex-row">
        <div className="p-5 border-2 rounded-l-md">
          <Select {...args}>
            <SelectTrigger>
              <SelectValue>Option 1</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Label</SelectLabel>
                <SelectItem value="option 1">Option 1</SelectItem>
                <SelectItem value="option 2">Option 2</SelectItem>
                <SelectItem value="option 3">Option 3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="dark p-5 bg-background rounded-r-md">
          <Select {...args}>
            <SelectTrigger className="dark">
              <SelectValue>Option 1</SelectValue>
            </SelectTrigger>
            <SelectContent className="dark">
              <SelectGroup>
                <SelectLabel>Label</SelectLabel>
                <SelectItem value="option 1">Option 1</SelectItem>
                <SelectItem value="option 2">Option 2</SelectItem>
                <SelectItem value="option 3">Option 3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  },
};

export const Default: Story = {
  ...SelectRender,
};

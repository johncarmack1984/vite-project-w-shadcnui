import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@/components/ui/calendar";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showOutsideDays: {
      defaultValue: true,
      control: "boolean",
    },
    className: {
      defaultValue: "",
      control: "text",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const CalendarTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <div className="flex flex-row">
        <div className="p-5 border-2 rounded-l-md">
          <Calendar {...args} />
        </div>
        <div className="dark p-5 border-2 bg-background rounded-r-md">
          <Calendar className="dark" {...args} />
        </div>
      </div>
    );
  },
};

export const Default: Story = {
  ...CalendarTemplate,
  args: {
    showOutsideDays: meta.argTypes.showOutsideDays.defaultValue,
    className: meta.argTypes.className.defaultValue,
  },
};

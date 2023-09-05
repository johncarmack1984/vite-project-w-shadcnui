import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@/components/ui/date-picker";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex flex-row mx-auto">
        <div className="p-10 border-2 rounded-l-md">
          <DatePicker />
        </div>
        <div className="dark p-10 bg-background rounded-r-md">
          <DatePicker className="dark" />
        </div>
      </div>
    );
  },
};

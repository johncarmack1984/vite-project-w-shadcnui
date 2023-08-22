import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@/components/ui/date-picker";

const meta = {
  title: "DatePicker",
  component: DatePicker,
} as Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex flex-row">
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

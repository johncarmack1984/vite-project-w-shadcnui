import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const meta = {
  title: "AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      type: "number",
      defaultValue: 1 / 1,
      description: "The aspect ratio of the element.",
    },
    children: {
      type: "string",
      defaultValue: (
        <div className="border-2 p-5 text-foreground rounded-md w-full h-full">
          Aspect Ratio
        </div>
      ),
      description: "The content to render inside the aspect ratio.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const AspectRatioTemplate: Story = {
  render: ({ children = meta.argTypes.children.defaultValue, ...args }) => {
    return (
      <div className="flex flex-row">
        <div className="p-5 border-2 rounded-l-md w-64">
          <AspectRatio {...args}>{children}</AspectRatio>
        </div>
        <div className="dark p-5 bg-background rounded-r-md w-64">
          <AspectRatio {...args}>{children}</AspectRatio>
        </div>
      </div>
    );
  },
};

export const SixteenByNine: Story = {
  ...AspectRatioTemplate,
  args: {
    ratio: 16 / 9,
  },
};

export const EightByTen: Story = {
  ...AspectRatioTemplate,
  args: {
    ratio: 8 / 10,
  },
};

export const FourByThree: Story = {
  ...AspectRatioTemplate,
  args: {
    ratio: 4 / 3,
  },
};

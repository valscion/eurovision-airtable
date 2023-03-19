import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "./MyComponent";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Test: Story = {
  args: { name: "My awesome test!" },
};

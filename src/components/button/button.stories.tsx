import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

type Story = StoryObj<typeof Button>;

// Contains metadata about this component’s stories
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false, // Default value for the disabled prop below
  },
  argTypes: {
    disabled: {
      // adds disabled as control in Storybook
      control: 'boolean',
      description: 'Disables the button',
    },
  },
};

export default meta;

// Each named export is a story
export const Primary: Story = {
  args: {
    variant: 'primary',
    //   style: { backgroundColor: 'blue' },
  },
  //   render: () => <Button>Button</Button>,
};

// If we want to test the variant it has to be a separate story!!!
// This is the reason why we have Secondary and Destructive stories below
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    // children: 'Secondary', // Overrides the one from meta above!!!
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Button } from './button';

type Story = StoryObj<typeof Button>;

// Contains metadata about this component’s stories
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  // tags: ['autodocs'], // Storybook auto generates documentation for this component; OR use button.mdx
  args: {
    children: 'Button', // Default value for the children prop, applies to all stories
    disabled: false, // Default value for the disabled prop below
    variant: 'primary', // Default value for the variant prop as it is stated in the Component
    size: 'medium', // Default value for the size prop as it is stated in the Component
    // onClick: fn(), // when we pass onClick, it will be a function that can be used in the storybook to test the button click
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'select',
      description: 'Text to display on the button',
      options: ['Button', 'Secondary', 'Destructive'],
      // table: {
      //   disable: true,
      // },
    },
    variant: {
      name: 'Variant',
      description: 'Variant of the button',
      control: 'select',
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      name: 'Size',
      control: 'select',
      description: 'Size of the button',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    disabled: {
      // adds disabled as control in Storybook
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the button',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
};

export default meta;

// Each named export is a story
// We can intentionally omit the 'Primary' variant story because it is the default and it will be tested with 'Small' & 'Large' stories anyway!!!
export const Primary: Story = {
  args: {
    variant: 'primary',
    //   style: { backgroundColor: 'blue' },
  },
  //   render: (args) => <Button {...args}>Button</Button>,
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

export const Small: Story = {
  args: {
    size: 'small',
  },
};

// We intentionally omit the 'Medium' size story because it is the default and it will be tested with 'Primary', 'Secondary' & 'Destructive' stories anyway!!!

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', // This will apply the mobile viewport to this story
    },
  },
};

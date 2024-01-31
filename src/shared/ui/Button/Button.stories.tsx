import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {

    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ThemeButton.CLEAR,
  },
};

export const OutlineDark: Story = {
    args: {
        children: 'Outline',
        theme: ThemeButton.OUTLINE,
    },
  };
  OutlineDark.decorators= [
    ThemeDecorator(Theme.DARK)
  ] 
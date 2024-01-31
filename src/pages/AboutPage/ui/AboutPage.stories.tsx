
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';






const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {

    layout: 'centered',
  },

  tags: ['autodocs'],


} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const light: Story = {
    
};

export const Dark: Story = {
  decorators: [
    
    ThemeDecorator(Theme.DARK)
  ]
};

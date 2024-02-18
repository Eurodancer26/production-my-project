import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import { Navbar } from 'widgets/Navbar';



const meta = {
    title: 'shared/Modal',
    component: Navbar,
    parameters: {

        layout: 'centered',
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const light: Story = {
    args: {
        isOpen: true
    },

};

export const Dark: Story = {
    args: {
        isOpen: true
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

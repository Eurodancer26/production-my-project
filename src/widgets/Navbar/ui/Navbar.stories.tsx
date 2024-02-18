import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { Button } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';



const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],


} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const light: Story = {};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

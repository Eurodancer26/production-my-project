import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {Sidebar} from 'widgets/Sidebar';


const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],


} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
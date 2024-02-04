

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LangSwitcher from './LangSwitcher';



const meta = {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],


} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
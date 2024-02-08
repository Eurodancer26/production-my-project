import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
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
        theme: ButtonTheme.CLEAR,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
};

export const OutlineDark: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const OutlineSizeM: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    },
};


export const backgroundTheme: Story = {
    args: {
        children: 'BACKGROUND',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const backgroundInverted: Story = {
    args: {
        children: 'BACKGROUND',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.M,
        square: true
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,
        square: true
    },
};

export const SquareSizeXl: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
        square: true
    },
};
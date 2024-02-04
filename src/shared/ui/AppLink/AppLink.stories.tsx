import type {Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';


const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],
    args: {
        to: '/'
    }

} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        children: 'Primary',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: Story = {
    args: {
        children: 'Red',
        theme: AppLinkTheme.RED,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'PrimaryDark',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const SecondaryDark: Story = {
    args: {
        children: 'SecondaryDark',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const RedDark: Story = {
    args: {
        children: 'RedDark',
        theme: AppLinkTheme.RED,
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
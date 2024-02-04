import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

/* eslint-disable react/display-name */
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
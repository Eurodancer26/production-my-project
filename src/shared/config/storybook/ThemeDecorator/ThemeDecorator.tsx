import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export function ThemeDecorator(theme: Theme) {
    return function component(StoryComponent: StoryFn) {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        )
    }
}
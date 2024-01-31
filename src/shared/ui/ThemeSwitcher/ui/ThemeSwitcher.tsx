import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
// import UserPng from 'shared/assets/icons/user.png';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

    interface ThemeSwitcherProps {
        className?: string;
    }

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >

            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}

        </Button>
    );
};

export default ThemeSwitcher;

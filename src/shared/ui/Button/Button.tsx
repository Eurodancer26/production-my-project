import cls from './Button.module.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className, children, theme, ...otherProps
}) => (
    <button
        type="button"
        className={
            classNames(cls.Button, {}, [className, cls[theme]])
        }
        {...otherProps}
    >
        {children}
    </button>
);

export default Button;

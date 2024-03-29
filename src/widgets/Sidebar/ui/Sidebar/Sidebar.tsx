import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div 
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
            }
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.colapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon 
                        className={cls.icon} />
                    <span 
                        className={cls.link}>
                        {t('Главная')}
                    </span> 
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon 
                        className={cls.icon} />
                    <span 
                        className={cls.link}>
                        {t('О нас')}
                    </span>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.Lang} />
            </div>
        </div>
    );
};

export default Sidebar;

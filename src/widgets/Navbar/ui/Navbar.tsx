import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const { t } = useTranslation();
    return (

        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to="/" 
                    className={cls.mainLink}>{t('Главная')}
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.RED} 
                    to="about">{t('О нас')}
                </AppLink>
            </div>
        </div>
    );
};

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation();
 
    return (
        <div className={
            classNames(cls.NotFoundPage, {}, [className])}>
            <h1>{t('Страница не найдена')}</h1>
            {/* Not Found Page */}
        </div>
    );
};

export default NotFoundPage;
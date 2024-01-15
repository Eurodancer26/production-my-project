import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('mainPage');
    return (
        <div>
            <h1>
                <BugButton />
                {t('Главная страница')}
            </h1>
        </div>
    );
};

export default MainPage;

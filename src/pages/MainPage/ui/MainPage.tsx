import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { StoreProvider } from 'app/providers/StoreProvider';

const MainPage = () => {
    const { t } = useTranslation('mainPage');
    return (
        
        <div>
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;

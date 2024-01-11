import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div>
            <h1>
                {t('О сайте')}
                {t('О сайте1212')}
            </h1>
        </div>
    );
};

export default AboutPage;

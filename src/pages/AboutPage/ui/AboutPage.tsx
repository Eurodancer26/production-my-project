import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div>
            <h1>
                {t('О сайте')}
            </h1>
        </div>
    );
};

export default AboutPage;

import Button from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const {t} = useTranslation();

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error])

    return (
        <Button 
            onClick={onThrow}>
            {t('throw error')}
        </Button>
    );
};

export default BugButton;
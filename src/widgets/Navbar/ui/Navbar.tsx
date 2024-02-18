import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import Modal, { ModalProps } from 'shared/ui/Modal/Modal';

export const Navbar = ({ isOpen }: ModalProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(isOpen);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, [])

    return (

        <div className={classNames(cls.Navbar, {}, [])}>
            <Button 
                theme = {ButtonTheme.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onToggleModal}>
                {t("Войти")}
            </Button>
            <Modal
                isOpen={isAuthModal} 
                onClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque a nam praesentium repellat sequi esse optio. Corporis, blanditiis autem!')}
            </Modal>
        </div>
    );
};

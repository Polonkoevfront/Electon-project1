import { useState } from 'react';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import cls from './AuthModal.module.scss';

import cross from "../../assets/svg/close-circle.svg";

export const AuthModal = () => {
    const [isCloseNodal, setIsCloseModal] = useState(true);

    const closeModal = () => {
        setIsCloseModal(false)
    };

    return (
        <div className={cls.modal}>
            <div>
                <Text className={cls.title} as='h6' fz={24} fw={600}>Login</Text>
                <img onClick={() => closeModal} src={cross} alt="" />
            </div>
            <div>
                <Button>Login</Button>
            </div>
        </div>
    )
};

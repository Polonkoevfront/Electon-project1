import { FC, useState } from 'react';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import cls from './AuthModal.module.scss';

interface AuthModalProps {
  onClose?: () => void;
};

export const AuthModal: FC<AuthModalProps> = ({onClose}) => {
const [isValue, setIsValue] = useState('');
const [isNumber, setIsNumber] = useState('');

  return (
    <div className={cls.modal}>
      <div className={cls.text_block}>
        <Text className={cls.title} as="h6" fz={24} fw={600}>
          Login or register
        </Text>
        <div onClick={onClose}>
          <span>&times;</span>
        </div>
      </div>
      <div className={cls.login_value}>
        <div className={cls.label}>
          <input 
          type="tel" 
          placeholder="Number" 
          value={isNumber} 
          onChange={(e) => setIsNumber(e.target.value)}
          />
        </div>
        <div className={cls.label}>
          <input 
          type="email" 
          placeholder="Email" 
          value={isValue} 
          onChange={(e) => setIsValue(e.target.value)}
          />
        </div>
        <Button width={339} height={56}>Login</Button>
      </div>
    </div>
  );
};

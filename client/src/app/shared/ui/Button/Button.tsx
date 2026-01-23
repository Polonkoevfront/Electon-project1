import { FC, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '../../lib/classNames';

type buttonVariant = "primary" | "deafult" | "outline" | "secondary" | "quaternary" | "muted" | "muted2";
type buttonWidth = 132 | 134 | 144 | 187 | 204 | 223 | 241 | 295;
type buttonHeight = 56 | 45 | 60 | 61 | 73;

interface ButtonProps {
    children: ReactNode;
    variant?: buttonVariant;
    width?: buttonWidth;
    height?: buttonHeight;
    className?: string;
    onClick?: () => void;
};

const buttonVariantClasses: Record<buttonVariant, string> = {
    "primary": cls.primary,
    "deafult": cls.deafult,
    "outline": cls.outline,
    "secondary": cls.secondary,
    "quaternary": cls.quaternary,
    "muted": cls.muted,
    "muted2": cls.muted2
};
const buttonWidthtClasses: Record<buttonWidth, string> = {
    "132": cls.w132,
    "134": cls.w134,
    "144": cls.w144,
    "187": cls.w187,
    "204": cls.w204,
    "223": cls.w223,
    "241": cls.w241,
    '295': cls.w295
};
const buttonHeightClasses: Record<buttonHeight, string> = {
    "45": cls.h45,
    "56": cls.h56,
    "60": cls.h60,
    "61": cls.h61,
    "73": cls.h73
};

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className = '',
        variant = 'deafult',
        width = '144',
        height = '56',
        onClick
    } = props;

    const classes = [
        variant && buttonVariantClasses[variant],
        width && buttonWidthtClasses[width],
        height && buttonHeightClasses[height],
        className
    ];

    return (
        <button onClick={onClick} className={classNames(cls.btn, {}, classes)}>{children}</button>
    )
};
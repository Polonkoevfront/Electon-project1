import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router';
import { FC, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { children, className = '', to, ...rest } = props;

    return (
        <Link to={to} className={classNames(cls.link, {}, [className])}>
            {children}
        </Link>
    )
};
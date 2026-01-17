import { FC, ReactNode } from 'react';
import cls from './Text.module.scss';
import { classNames } from '../../lib/classNames';

type AsType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type FontSize = 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 32 | 34 | 41 | 43;
type FontWeight = 400 | 500 | 600 | 700 | 800;

interface TextProps {
    children: ReactNode;
    as: AsType;
    fz: FontSize;
    fw: FontWeight;
    className?: string
};

const fzClasses: Record<FontSize, string> = {
    22: cls.fz22,
    24: cls.fz24,
    25: cls.fz25,
    26: cls.fz26,
    27: cls.fz27,
    28: cls.fz28,
    29: cls.fz29,
    30: cls.fz30,
    32: cls.fz32,
    34: cls.fz34,
    41: cls.fz41,
    43: cls.fz43
};


const fwClasses: Record<FontWeight, string> = {
    400: cls.fw400,
    500: cls.fw500,
    600: cls.fw600,
    700: cls.fw700,
    800: cls.fw800
};

export const Text: FC<TextProps> = (props) => {
    const { children, className = '', as = 'h1', fz = '22', fw = '400' } = props;

    const classes = [
        fz && fzClasses[fz],
        fw && fwClasses[fw],
        className
    ];

    const getAs = {
        "h1": <h1 className={classNames("", {}, classes)}>{children}</h1>,
        "h2": <h2 className={classNames("", {}, classes)}>{children}</h2>,
        "h3": <h3 className={classNames("", {}, classes)}>{children}</h3>,
        "h4": <h4 className={classNames("", {}, classes)}>{children}</h4>,
        "h5": <h5 className={classNames("", {}, classes)}>{children}</h5>,
        "h6": <h6 className={classNames("", {}, classes)}>{children}</h6>
    }

    return getAs[as];

};
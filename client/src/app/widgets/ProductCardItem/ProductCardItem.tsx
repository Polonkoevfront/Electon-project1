import { FC } from 'react';
import { Button } from '../../shared/ui';
import cls from './ProductCardItem.module.scss';

import headphone from "../../shared/assets/png/headphone.png";
import heart from "../../shared/assets/svg/heart_black.svg";
import cart from "../../shared/assets/svg/shopping-cart.svg";
import eye from "../../shared/assets/svg/eye.svg";

type CardItemProps = {
    id: string;
    title: string;
    price: number;
    type: string;
    imageUrl: string;
};

export const ProductCardItem: FC<CardItemProps> = (props) => {

    const { id, title, price, type, imageUrl } = props;

    return (
        <>
            <article className={cls.card}>
                <div className={cls.image_block}>
                    <img className={cls.headphone} src={headphone} alt="" />
                    <div>
                        <img src={heart} alt="" />
                    </div>
                </div>
                <div className={cls.product_wrap}>
                    <div className={cls.product_info}>
                        <span>{title}</span>
                        <p>{price}</p>
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className={cls.product_btns}>
                        <Button className={cls.btn} variant='secondary' width={204} height={60}>
                            <span>Add to cart</span>
                            <div>
                                <img className={cls.carti} src={cart} alt="" />
                            </div>
                        </Button>
                        <div className={cls.btn_eye}>
                            <img src={eye} alt="" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
};
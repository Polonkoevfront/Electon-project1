import cls from './CartProductItem.module.scss';

import close from "../../shared/assets/svg/close-circle.svg";
import console_play from "../../shared/assets/png/console_play2.png";
import console_play2 from "../../shared/assets/png/console_play3.png";
export const CartProductItem = () => {
    return (
        <>
            <div className={cls.cart_product_item}>
                <div className={cls.product_info}>
                    <img src={console_play} alt="" />
                    <div>
                        <span>Play game</span>
                        <p>Color: Green</p>
                        <p>Size: 30</p>
                    </div>
                </div>
                <div className={cls.product_quantity}>
                    <p>$11,70</p>
                    <div className={cls.counter}>
                        <div className={cls.count_minus}>-</div>
                        <div className={cls.count_num}>1</div>
                        <div className={cls.count_plus}>+</div>
                    </div>
                    <p>$11,70</p>
                    <img src={close} alt="" />
                </div>
            </div>
            <hr />
            <div className={cls.cart_product_item}>
                <div className={cls.product_info}>
                    <img src={console_play2} alt="" />
                    <div>
                        <span>Play game</span>
                        <p>Color: Black</p>
                        <p>Size: 30</p>
                    </div>
                </div>
                <div className={cls.product_quantity}>
                    <p>$11,70</p>
                    <div className={cls.counter}>
                        <div className={cls.count_minus}>-</div>
                        <div className={cls.count_num}>1</div>
                        <div className={cls.count_plus}>+</div>
                    </div>
                    <p>$11,70</p>
                    <img src={close} alt="" />
                </div>
            </div>
            <hr />
        </>
    )
};
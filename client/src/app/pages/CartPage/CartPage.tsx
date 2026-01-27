import { Button, Form } from '../../shared/ui';
import { CartProductItem, Footer, Navbar } from '../../widgets';
import cls from './CartPage.module.scss';

import arrow from "../../shared/assets/svg/arrow-down-black.svg";

export const CartPage = () => {
    return (
        <div className={cls.cart}>
            <Navbar />

            <div className={cls.cart_wrap}>
                <Form className={cls.cart_products}>
                    <div className={cls.cart_products_title}>
                        <span>Product</span>
                        <div>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                        </div>
                    </div>
                    <CartProductItem />
                    <div className={cls.cart_product_btns}>
                        <Button width={295} height={73}>Continue shopping</Button>
                        <Button variant='muted2' width={223} height={73}>Update cart</Button>
                        <Button className={cls.btn} variant='quaternary' width={223} height={73}>Clear cart</Button>
                    </div>
                </Form>
                <Form className={cls.cart_total_form}>
                    <div className={cls.title}>
                        <span>Cart total</span>
                    </div>
                    <div className={cls.cart_checked_block}>
                        <div className={cls.subtotal}>
                            <div>
                                <span>Subtotal</span>
                                <p>$ 23,20</p>
                            </div>
                            <hr />
                        </div>
                        <div className={cls.coupon_code_block}>
                            <div>
                                <input type="coupon" placeholder='Enter coupon code' />
                                <p>Apply</p>
                            </div>
                            <hr />
                        </div>
                        <div className={cls.select_country_block}>
                            <div>
                                <span>Country</span>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className={cls.price_check}>
                            <div>
                                <span>Total amount</span>
                                <p>$ 23,20</p>
                            </div>
                            <Button className={cls.check_btn} width={339} height={52}>Proceed to ckeckout</Button>
                        </div>
                    </div>
                </Form>
            </div>

            <Footer />
        </div>
    )
};
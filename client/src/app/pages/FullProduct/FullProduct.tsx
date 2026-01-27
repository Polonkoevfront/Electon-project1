import cls from './FullProduct.module.scss';
import { CustomerReviews, Footer, Navbar, ProductCardItem } from '../../widgets';
import { Button, Text } from '../../shared/ui';

import console from "../../shared/assets/png/big_console.png";
import console2 from "../../shared/assets/png/console_play.png";
import star from "../../shared/assets/svg/star2.svg";
import check from "../../shared/assets/svg/check.svg";
import heart from "../../shared/assets/svg/save_heart.svg";
import google from "../../shared/assets/svg/google.svg";
import facebook from "../../shared/assets/svg/facebook.svg";
import whatsapp from "../../shared/assets/svg/whatsapp.svg";
import stars from "../../shared/assets/svg/stars.svg";

export const FullProduct = () => {
    const stars = Array.from({ length: 5 });
    const productCards = Array.from({ length: 4 });

    return (
        <div className={cls.fullproduct}>
            <Navbar />

            <div className={cls.fullproduct_wrap}>
                <div className={cls.product_images_block}>
                    <img className={cls.full_image} src={console} alt="" />
                    <div>
                        <div className={cls.full_image_item}>
                            <img src={console2} alt="" />
                        </div>
                        <div className={cls.full_image_item}>
                            <img src={console2} alt="" />
                        </div>
                    </div>
                </div>
                <div className={cls.product_full_block}>
                    <div className={cls.playgame_block}>
                        <Text className={cls.product_title} as='h2' fz={29} fw={500}>Play game</Text>
                        <p className={cls.price}>$11,70</p>
                        <div className={cls.stars}>
                            {
                                stars.map((_, key) => (
                                    <img key={key} src={star} alt="" />
                                ))
                            }
                            <p>No reviews</p>
                        </div>
                        <span>Availability:<img src={check} alt="" />
                            <span className={cls.check_txt}>In stock</span>
                        </span>
                        <p className={cls.recomendation}>Hurry up! only 34 product left in stock!</p>
                        <hr />
                    </div>
                    <div className={cls.options_block}>
                        <div className={cls.product_design}>
                            <div className={cls.colors_block}>
                                <span>Color:</span>
                                <div className={cls.circle}></div>
                                <div className={cls.circle2}></div>
                            </div>
                            <div className={cls.sizes_block}>
                                <span>Size:</span>
                                <div>
                                    <span>30</span>
                                </div>
                                <div>
                                    <span>56</span>
                                </div>
                                <div>
                                    <span>42</span>
                                </div>
                                <div>
                                    <span>48</span>
                                </div>
                            </div>
                            <div className={cls.quantity}>
                                <span>Quantity:</span>
                                <div className={cls.count_minus}>-</div>
                                <div className={cls.count_num}>1</div>
                                <div className={cls.count_plus}>+</div>
                            </div>
                        </div>
                        <div className={cls.buttons}>
                            <Button width={241} height={73}>Add to cart</Button>
                            <Button width={241} height={73}>Buy it now</Button>
                            <div className={cls.save_body}>
                                <img src={heart} alt="" />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className={cls.networks_block}>
                        <div className={cls.index}>
                            <span>Sku:</span>
                            <p>01133-9-9</p>
                        </div>
                        <div className={cls.category}>
                            <span>Category:</span>
                            <p>20% off,</p>
                            <p>49% off</p>
                            <p>Alex remote</p>
                        </div>
                        <div className={cls.networks}>
                            <span>Share:</span>
                            <img src={google} alt="" />
                            <img src={facebook} alt="" />
                            <img src={whatsapp} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <CustomerReviews />

            <div className={cls.product_cards_block}>
                <Text className={cls.product_logo} as='h6' fz={27} fw={600}>Related product</Text>

                <div className={cls.related_product_block}>
                    {
                        productCards.map((_, key) => (
                            <ProductCardItem
                                key={key}
                                id=''
                                imageUrl=''
                                price={11.70}
                                title='Wireless headphones'
                                type='' />
                        ))
                    }
                </div>
            </div>

            <Footer />
        </div>
    )
};
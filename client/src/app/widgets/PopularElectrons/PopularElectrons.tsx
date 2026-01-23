import cls from './PopularElectrons.module.scss';
import { useRef } from 'react';
import { Button } from '../../shared/ui';

import bar from "../../shared/assets/png/bar.png";
import console_play from "../../shared/assets/png/console_play.png";
import laptop from "../../shared/assets/png/laptop2.png";
import eye from "../../shared/assets/svg/eye.svg";
import cart from "../../shared/assets/svg/shopping-cart.svg";
import stars from "../../shared/assets/svg/stars.svg";

const electronsInfo = [
    { image: bar, title: "JBL bar 2.1 deep bass", price: "$11.70" },
    { image: bar, title: "JBL bar 2.1 deep bass", price: "$11.70" },
];

const circles = [
    { popularRating: "57" },
    { popularRating: "11" },
    { popularRating: "33" },
    { popularRating: "59" },
];

export const PopularElectrons = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const cardsInSlide = 1;
    const dots = Math.ceil(electronsInfo.length / cardsInSlide);

    const scroll = (idx: number) => {
        const { current } = scrollRef;

        if (current) {
            const scrollAmount = current.clientWidth + 10;
            current.scrollTo({
                left: scrollAmount * idx,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className={cls.popular_electrons}>
            <div className={cls.scroll_block} ref={scrollRef}>
                {
                    electronsInfo.map((item, idx) => (
                        <article key={idx}>
                            <img src={item.image} alt="" />
                            <div className={cls.bar_info}>
                                <div className={cls.bar_info_txt}>
                                    <span>{item.title}</span>
                                    <p>{item.price}</p>
                                    <img src={stars} alt="" />
                                </div>
                                <div className={cls.circles_block}>
                                    {
                                        circles.map((item, key) => (
                                            <div key={key}>
                                                <p>{item.popularRating}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className={cls.btns_block}>
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
                    ))
                }

                <div className={cls.dots_block}>
                    {[...Array(dots)].map((_, idx) => (
                        <button key={idx} className={cls.dot_item}
                            onClick={() => scroll(idx)}
                        />
                    ))}
                </div>
            </div>

            <div className={cls.cards_block}>
                <article>
                    <img src={console_play} alt="" />
                    <div>
                        <span>Play game</span>
                        <p>$11.70</p>
                        <img src={stars} alt="" />
                    </div>
                </article>
                <article className={cls.second_card}>
                    <img className={cls.laptop} src={laptop} alt="" />
                    <div>
                        <span>Play game</span>
                        <p>$11.70</p>
                        <img src={stars} alt="" />
                    </div>
                </article>
            </div>
        </section>
    )
};
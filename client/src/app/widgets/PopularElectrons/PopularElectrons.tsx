import { Button } from '../../shared/ui';
import cls from './PopularElectrons.module.scss';

import bar from "../../shared/assets/png/bar.png";
import eye from "../../shared/assets/svg/eye.svg";
import { useRef } from 'react';

const electronCarouselInfo = [
    { imageUrl: bar, title: "JBL bar 2.1 deep bass", price: "$11,70" },
    { imageUrl: bar, title: "JBL bar 2.1 deep bass", price: "$11,70" }
];

const circles = [
    { rating: "57" },
    { rating: "11" },
    { rating: "33" },
    { rating: "59" },
];

export const PopularElectrons = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const cardSlides = 1;
    const dots = Math.ceil(electronCarouselInfo.length / cardSlides);

    const scrollToSlide = (index: number) => {
        const { current } = scrollRef;

        if (current) {
            const scrollAmount = current.clientWidth;
            current.scrollTo({
                left: scrollAmount * index,
                behavior: "smooth"
            });
        }
    }

    return (
        <div className={cls.electrons}>
            <section className={cls.electron_carousel_block}>
                <div className={cls.carousel_scroll} ref={scrollRef}>
                    {
                        electronCarouselInfo.map((item, key) => (
                            <article key={key}>
                                <img className={cls.bar_img} src={item.imageUrl} alt="" />
                                <div className={cls.bar_info_block}>
                                    <div className={cls.block_txt}>
                                        <span>{item.title}</span>
                                        <p>{item.price}</p>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        {
                                            circles.map((item, key) => (
                                                <svg key={key}>
                                                    <circle />
                                                </svg>
                                            ))
                                        }
                                    </div>
                                    <div className={cls.buttons_block}>
                                        <Button className={cls.btn} variant='secondary' width={204} height={60}>
                                            <span>Add to cart</span>
                                            <div>
                                                <img src="" alt="" />
                                            </div>
                                        </Button>
                                        <div>
                                            <img src={eye} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))
                    }

                    <div className={cls.dots_container}>
                        {[...Array(dots)].map((_, index) => (
                            <button
                                key={index}
                                className={cls.dot_item}
                                onClick={() => scrollToSlide(index)} />
                        ))}
                    </div>
                </div>
            </section>
            <section className={cls.electron_cards_block}>

            </section>
        </div>
    )
};
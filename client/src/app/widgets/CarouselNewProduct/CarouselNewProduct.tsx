import { useRef } from 'react';
import cls from './CarouselNewProduct.module.scss';
import { Button } from '../../shared/ui/Button/Button';
import { Text } from '../../shared/ui';

import arrow_left from "../../shared/assets/svg/arrow-left.svg";
import arrow_right from "../../shared/assets/svg/arrow-right.svg";
import camera from "../../shared/assets/png/mini_camera.png";
import laptop from "../../shared/assets/png/laptop.png";
import speaker from "../../shared/assets/png/speaker.png";

const slideInfo = [
    { title: "Speaker", quantity: "(6 items)", image: speaker },
    { title: "Desktop & laptop", quantity: "(6 items)", image: laptop },
    { title: "DSLR camera", quantity: "(6 items)", image: camera },
    { title: "Speaker", quantity: "(6 items)", image: speaker },
    { title: "Desktop & laptop", quantity: "(6 items)", image: laptop },
    { title: "DSLR camera", quantity: "(6 items)", image: camera },
    { title: "Speaker", quantity: "(6 items)", image: speaker },
    { title: "Desktop & laptop", quantity: "(6 items)", image: laptop },
    { title: "DSLR camera", quantity: "(6 items)", image: camera }
];

export const CarouselNewProduct = () => {
    const isRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = (direction: 'prev' | 'next') => {
        const { current } = isRef;
        if (current) {

            const scrollAmount = direction === 'next'
                ? current.scrollLeft + current.clientWidth
                : current.scrollLeft - current.clientWidth;

            current.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className={cls.block}>
            <div className={cls.nav_buttons}>
                <button onClick={() => handleScroll('prev')} className={cls.nav_btn}>
                    <img src={arrow_left} alt="" />
                </button>
                <button onClick={() => handleScroll('next')} className={cls.nav_btn2}>
                    <img src={arrow_right} alt="" />
                </button>
            </div>

            <div className={cls.scroll} ref={isRef}>
                {slideInfo.map((item, key) => (
                    <article key={key}>
                        <div className={cls.product_img_block}>
                            <img src={item.image} alt="" />
                        </div>
                        <div className={cls.product_info_block}>
                            <span>{item.title}</span>
                            <p>{item.quantity}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

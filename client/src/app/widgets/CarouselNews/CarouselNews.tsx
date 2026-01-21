import cls from './CarouselNews.module.scss';
import camera from "../../shared/assets/png/camera.png";
import { useRef } from 'react';
import { Button } from '../../shared/ui/Button/Button';
import { Text } from '../../shared/ui';

const slideInfo = [
    { title: "Canon", title2: "camera", price: "89$", image: "" },
    { title: "Laptop", price: "100$", image: "" },
    { title: "Headphone", price: "31$", image: "" },
];

export const CarouselNews = () => {
    const isRef = useRef<HTMLDivElement | null>(null);

    const scroll = (index: number) => {
        const { current } = isRef;
        if (current) {

            const slideWidth = current.clientWidth + 16;
            current.scrollTo({
                left: slideWidth * index,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className={cls.block}>
            <div className={cls.scroll} ref={isRef}>
                {slideInfo.map((item, index) => (
                    <div key={index} className={cls.slide}>
                        <div className={cls.product_info_block}>
                            <Text className={cls.title} as='h1' fz={43} fw={600}>
                                {item.title}
                            </Text>
                            {item.title2 && (
                                <Text className={cls.title2} as='h1' fz={43} fw={600}>
                                    {item.title2}
                                </Text>
                            )}
                            <div className={cls.buttons_block}>
                                <Button width={144} height={61}>Shop now</Button>
                                <Button className={cls.btn} variant='outline' width={144} height={61}>View more</Button>
                            </div>
                        </div>
                        <div className={cls.product_img_block}>
                            <img src={camera} alt={item.title} />
                            <div className={cls.price_circle}>
                                <span>Only</span>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={cls.dots_block}>
                {[...Array(slideInfo.length)].map((_, index) => (
                    <button
                        key={index}
                        className={cls.dot}
                        onClick={() => scroll(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

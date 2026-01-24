import cls from './ProductCards.module.scss';
import { ProductCardItem } from '../ProductCardItem/ProductCardItem';
import { AppLink, Text } from '../../shared/ui';
import { useRef } from 'react';

import stars from '../../shared/assets/svg/stars.svg';

export const ProductCards = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const productCards = Array(24).fill(null);

    const cardsPerSlide = 8;
    const slidesCount = Math.ceil(productCards.length / cardsPerSlide);

    const slides = [];
    for (let i = 0; i < productCards.length; i += cardsPerSlide) {
        slides.push(productCards.slice(i, i + cardsPerSlide));
    }

    const scroll = (index: number) => {
        if (scrollRef.current) {
            const width = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({
                left: width * index,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className={cls.product}>
            <div className={cls.nav_product}>
                <Text className={cls.product_logo} as='h6' fz={27} fw={600}>Popular products</Text>

                <div>
                    <AppLink className={cls.nav_item} to="/">
                        <span>Cameras</span>
                    </AppLink>
                    <AppLink className={cls.nav_item} to="/">
                        <span>Laptops</span>
                    </AppLink>
                    <AppLink className={cls.nav_item} to="/">
                        <span>Tablets</span>
                    </AppLink>
                    <AppLink className={cls.nav_item} to="/">
                        <span>Mouse</span>
                    </AppLink>
                </div>
            </div>

            <div ref={scrollRef} className={cls.product_cards_block}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className={cls.slide_product}>
                        {slide.map((_, cardIndex) => (
                            <ProductCardItem
                                key={cardIndex}
                                title="Wireless headphones"
                                price="$11,70"
                                imageUrl={stars}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {slidesCount > 1 && (
                <div className={cls.dots_block}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={cls.dot}
                            onClick={() => scroll(index)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};



import cls from './CarouselManagers.module.scss';

import manager1 from "../../shared/assets/png/manager1.png";
import manager2 from "../../shared/assets/png/manager2.png";
import manager3 from "../../shared/assets/png/manager3.png";
import { useRef } from 'react';

const managersInfo = [
    {
        avatarUrl: manager1, name: "Savannah Nguyen", description: "Lorem ipsum dolor sit amet consectetur. Nec sit", description2: "enim tellus faucibus bibendum ullamcorper.", description3: "Phasellus tristique aenean at lorem sed scelerisque."
    }, {
        avatarUrl: manager2, name: "Esther Howard", description: "Lorem ipsum dolor sit amet consectetur. Nec sit", description2: "enim tellus faucibus bibendum ullamcorper.", description3: "Phasellus tristique aenean at lorem sed scelerisque."
    }, {
        avatarUrl: manager3, name: "Esther Howard", description: "Lorem ipsum dolor sit amet consectetur. Nec sit", description2: "enim tellus faucibus bibendum ullamcorper.", description3: "Phasellus tristique aenean at lorem sed scelerisque."
    }, {
        avatarUrl: manager1, name: "Savannah Nguyen", description: "Lorem ipsum dolor sit amet consectetur. Nec sit", description2: "enim tellus faucibus bibendum ullamcorper.", description3: "Phasellus tristique aenean at lorem sed scelerisque."
    }, {
        avatarUrl: manager2, name: "Esther Howard", description: "Lorem ipsum dolor sit amet consectetur. Nec sit", description2: "enim tellus faucibus bibendum ullamcorper.", description3: "Phasellus tristique aenean at lorem sed scelerisque."
    }, {
        avatarUrl: manager3, name: "Esther Howard", description: "Lorem ipsum dolor sit amet consectetur. Nec sit", description2: "enim tellus faucibus bibendum ullamcorper.", description3: "Phasellus tristique aenean at lorem sed scelerisque."
    }, {
        avatarUrl: manager1, name: "Savannah Nguyen", description: "Lorem ipsum dolor sit amet consectetur. Nec sit", description2: "enim tellus faucibus bibendum ullamcorper.", description3: "Phasellus tristique aenean at lorem sed scelerisque."
    }, {
        avatarUrl: manager2, name: "Esther Howard", description: "Lorem ipsum dolor sit amet consectetur. Nec sit", description2: "enim tellus faucibus bibendum ullamcorper.", description3: "Phasellus tristique aenean at lorem sed scelerisque."
    }, { avatarUrl: manager3, name: "Esther Howard", description: "Lorem ipsum dolor sit amet consectetur. Nec sit", description2: "enim tellus faucibus bibendum ullamcorper.", description3: "Phasellus tristique aenean at lorem sed scelerisque." }
];

export const CarouselManagers = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const cardsPerSlide = 3;
    const totalDots = Math.ceil(managersInfo.length / cardsPerSlide);

    const scroll = (index: number) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.clientWidth;
            current.scrollTo({
                left: scrollAmount * index,
                behavior: "smooth"
            });
        }
    };

    return (
        <section>
            <div className={cls.cards_block} ref={scrollRef}>
                {
                    managersInfo.map((item, key) => (
                        <article key={key}>
                            <div className={cls.manager_data}>
                                <img src={item.avatarUrl} alt="" />
                                <span>{item.name}</span>
                            </div>
                            <div className={cls.manager_desc}>
                                <p>{item.description}</p>
                                <p>{item.description2}</p>
                                <p>{item.description3}</p>
                            </div>
                        </article>
                    ))
                }
            </div>

            <div className={cls.dots_block}>
                {[...Array(totalDots)].map((_, index) => (
                    <button
                        key={index}
                        className={cls.dot}
                        onClick={() => scroll(index)}
                    />
                ))}
            </div>
        </section>
    )
};
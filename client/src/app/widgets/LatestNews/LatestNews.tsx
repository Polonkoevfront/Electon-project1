import { Link } from 'react-router';
import { Text } from '../../shared/ui';
import cls from './LatestNews.module.scss';
import { useRef } from 'react';

import tech1 from "../../shared/assets/png/tech1.png";
import tech2 from "../../shared/assets/png/tech2.png";

const latestNewsInfo = [
    { image: tech1, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
    { image: tech2, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
    { image: tech1, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
    { image: tech2, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
    { image: tech1, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
    { image: tech2, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
    { image: tech1, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
    { image: tech2, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
    { image: tech1, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
    { image: tech2, date: "22,oct,2021", question: "Who avoids a", question2: "pain that produces?", description: "Lorem ipsum dolor sit amet", description2: "consectetur. Nec sit enim tellus faucibus", description3: "bibendum ullamcorper. Phasellus", description4: "tristique aenean at lorem sed", description5: "scelerisque.", note: "By spacing tech" },
];

export const LatestNews = () => {
    const scrollToRef = useRef<HTMLDivElement | null>(null);

    const cardsToSlide = 2;
    const dots = Math.ceil(latestNewsInfo.length / cardsToSlide);

    const scrollCarousel = (index: number) => {
        const { current } = scrollToRef;

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
            <div className={cls.logo_news}>
                <Text className={cls.logo_txt} as='h6' fz={25} fw={600}>Latest news</Text>

                <Link className={cls.view} to="/">
                    <p>View all</p>
                </Link>
            </div>
            <div className={cls.carousel_block} ref={scrollToRef}>
                {
                    latestNewsInfo.map((item, key) => (
                        <article key={key}>
                            <img src={item.image} alt="" />

                            <div className={cls.latest_new_info}>
                                <div className={cls.date_body}>
                                    <p>{item.date}</p>
                                </div>
                                <div className={cls.question_block}>
                                    <span>{item.question}</span>
                                    <span>{item.question2}</span>
                                </div>
                                <div className={cls.desc_block}>
                                    <p>{item.description}</p>
                                    <p>{item.description2}</p>
                                    <p>{item.description3}</p>
                                    <p>{item.description4}</p>
                                    <p>{item.description5}</p>
                                </div>
                                <span className={cls.note}>{item.note}</span>
                            </div>
                        </article>
                    ))
                }
            </div>
            <div className={cls.dots_block}>
                {[...Array(dots)].map((_, index) => (
                    <button
                        key={index}
                        className={cls.dot_item}
                        onClick={() => scrollCarousel(index)}
                    />
                ))}
            </div>
        </section>
    )
};
import { Button, Text } from '../../shared/ui';
import cls from './DiscountNews.module.scss';

export const DiscountNews = () => {
    return (
        <div className={cls.news_discount}>
            <div className={cls.news_discount_elements}>
                <Button width={134} height={45}>New laptop </Button>
                <div>
                    <Text className={cls.discount_new_txt} as="h2" fz={41} fw={600}>Sale up to 50% off</Text>
                    <span>12 inch hd display</span>
                </div>
                <div className={cls.btn2}>
                    <Button width={134} height={45}>Shop now</Button>
                </div>
            </div>
        </div>
    )
};
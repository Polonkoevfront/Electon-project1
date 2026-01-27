import { Avaliability, Brand, Categories, Color, DiscountNews, Footer, Navbar, ProductType, Size } from '../../widgets';
import cls from './CategoryPage.module.scss';

export const CategoryPage = () => {

    return (
        <div className={cls.category_page}>
            <Navbar />

            <aside>
                <Categories />
                <Avaliability />
                <ProductType />
                <Brand />
                <Color />
                <Size />
            </aside>

            <DiscountNews />

            <Footer />
        </div>
    )
};
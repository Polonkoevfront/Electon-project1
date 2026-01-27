import { Avaliability, Brand, Categories, Color, DiscountNews, Footer, Navbar, ProductCardItem, ProductType, Size } from '../../widgets';
import cls from './CategoryPage.module.scss';

export const CategoryPage = () => {
    const productCategoryCards = Array.from({ length: 12 })

    return (
        <div className={cls.category_page}>
            <Navbar />

            <div className={cls.category_body}>
                <aside>
                    <Categories />
                    <Avaliability />
                    <ProductType />
                    <Brand />
                    <Color />
                    <Size />
                </aside>

                <div className={cls.pro}>
                    <div className={cls.cards_block}>
                        {
                            productCategoryCards.map((_, index) => (
                                <ProductCardItem
                                    id=''
                                    title='Wireless headphones'
                                    price={11.70}
                                    imageUrl=''
                                    type=''
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
};
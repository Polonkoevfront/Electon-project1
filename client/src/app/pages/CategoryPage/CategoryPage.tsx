import {
  Avaliability,
  Brand,
  Categories,
  Color,
  Footer,
  Navbar,
  ProductCardItem,
  ProductType,
  Size,
} from '../../widgets';
import cls from './CategoryPage.module.scss';

import stars from "../../shared/assets/svg/stars.svg";

export const CategoryPage = () => {
  const productCategoryCards = Array.from({ length: 12 });

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
            {productCategoryCards.map((_, index) => (
              <ProductCardItem
              key={index}
                id=""
                title="Wireless headphones"
                price={11.7}
                imageUrl={stars}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

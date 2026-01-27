import { Categories, Footer, Navbar } from '../../widgets';
import cls from './CategoryPage.module.scss';

export const CategoryPage = () => {

    return (
        <div className={cls.category_page}>
            <Navbar />

            <aside>
                <Categories />
            </aside>

            <Footer />
        </div>
    )
};
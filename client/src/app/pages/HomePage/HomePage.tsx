import cls from "./HomePage.module.scss";
import { AboutOurProduct, Brands, CarouselManagers, CarouselNewProduct, CarouselNews, DiscountNews, Footer, LatestNews, Navbar, PopularElectrons, ProductCards } from "../../widgets";

export const HomePage = () => {
    return (
        <div className={cls.home}>
            <Navbar />

            <CarouselNews />
            <CarouselNewProduct />
            <ProductCards id="" imageUrl="" price={1} title="" />
            <DiscountNews />
            <PopularElectrons />
            <AboutOurProduct />
            <CarouselManagers />
            <Brands />
            <LatestNews />

            <Footer />
        </div >
    )
};
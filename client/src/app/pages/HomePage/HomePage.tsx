import cls from "./HomePage.module.scss";
import { AboutOurProduct, Brands, CarouselManagers, CarouselNewProduct, CarouselNews, DiscountNews, Footer, LatestNews, Navbar, PopularElectrons, ProductCards } from "../../widgets";

const HomePage = () => {
    return (
        <div className={cls.home}>
            <Navbar />

            <CarouselNews />
            <CarouselNewProduct />
            <ProductCards />
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

export default HomePage;
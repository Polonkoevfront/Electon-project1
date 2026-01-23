import cls from "./HomePage.module.scss";
import stars from "../../shared/assets/svg/stars.svg";
import { AboutOurProduct, Brands, CarouselManagers, CarouselNewProduct, CarouselNews, DiscountNews, Footer, LatestNews, Navbar, PopularElectrons, ProductCardItem } from "../../widgets";

const HomePage = () => {
    return (
        <div className={cls.home}>
            <Navbar />

            {/* <CarouselNews />
            <CarouselNewProduct />
            <DiscountNews />
            <PopularElectrons />
            <AboutOurProduct />
            <CarouselManagers />
            <Brands />
            <LatestNews /> */}
            <ProductCardItem title="Wireless headphones" price="$11,70" imageUrl={stars} />

            <div style={{ marginTop: "30px" }}>
                <Footer />
            </div>
        </div >
    )
};

export default HomePage;
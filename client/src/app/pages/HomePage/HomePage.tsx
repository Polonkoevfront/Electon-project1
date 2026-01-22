import cls from "./HomePage.module.scss";
import { AboutOurProduct, Brands, CarouselManagers, CarouselNewProduct, CarouselNews, DiscountNews, Footer, LatestNews, Navbar, PopularElectrons } from "../../widgets";

const HomePage = () => {
    return (
        <div className={cls.home}>
            <Navbar />

            <CarouselNews />
            <CarouselNewProduct />
            <DiscountNews />
            <PopularElectrons />
            <AboutOurProduct />
            <CarouselManagers />
            <Brands />
            <LatestNews />

            <div style={{ marginTop: "30px" }}>
                <Footer />
            </div>
        </div >
    )
};

export default HomePage;
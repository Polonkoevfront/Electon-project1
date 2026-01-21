import cls from "./HomePage.module.scss";
import { AboutOurProduct, Brands, CarouselManagers, CarouselNewProduct, CarouselNews, DiscountNews, Footer, Navbar } from "../../widgets";

const HomePage = () => {
    return (
        <div className={cls.home}>
            <Navbar />

            <CarouselNews />
            <CarouselNewProduct />
            <DiscountNews />
            <AboutOurProduct />
            <Brands />
            <CarouselManagers />

            <div style={{ marginTop: "30px" }}>
                <Footer />
            </div>
        </div >
    )
};

export default HomePage;
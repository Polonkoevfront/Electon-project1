import cls from "./HomePage.module.scss";
import { AboutOurProduct, Brands, CarouselNewProduct, CarouselNews, DiscountNews, Footer, Navbar } from "../../widgets";

const HomePage = () => {
    return (
        <div className={cls.home}>
            <Navbar />

            <CarouselNews />
            <CarouselNewProduct />
            <DiscountNews />
            <AboutOurProduct />
            <Brands />

            <div style={{ marginTop: "30px" }}>
                <Footer />
            </div>
        </div >
    )
};

export default HomePage;
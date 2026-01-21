import cls from "./HomePage.module.scss";
import { AboutOurProduct, CarouselNewProduct, CarouselNews, DiscountNews, Footer, Navbar } from "../../widgets";
import { Button, Text } from "../../shared/ui";

const HomePage = () => {
    return (
        <div className={cls.home}>
            <Navbar />

            <CarouselNews />
            <CarouselNewProduct />
            <DiscountNews />
            <AboutOurProduct />

            <Footer />
        </div >
    )
};

export default HomePage;
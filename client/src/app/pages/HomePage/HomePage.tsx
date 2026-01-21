import cls from "./HomePage.module.scss";
import { CarouselNewProduct, CarouselNews, Footer, Navbar } from "../../widgets";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <CarouselNews />
            <CarouselNewProduct />
            <Footer />
        </div >
    )
};

export default HomePage;
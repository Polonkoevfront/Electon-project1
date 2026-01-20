import cls from "./HomePage.module.scss";
import { CarouselNews, Footer, Navbar } from "../../widgets";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <CarouselNews />
            <Footer />
        </div >
    )
};

export default HomePage;
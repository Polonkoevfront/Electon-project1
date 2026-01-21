import cls from './Brands.module.scss';
import brand1 from "../../shared/assets/png/brand-1.png";
import brand2 from "../../shared/assets/png/brand-2.png";
import brand3 from "../../shared/assets/png/brand-3.png";
import brand4 from "../../shared/assets/png/brand-4.png";
import brand5 from "../../shared/assets/png/brand-5.png";

export const Brands = () => {
    return (
        <div className={cls.brands}>
            <div className={cls.brands_body}>
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
                <img src={brand5} alt="" />
            </div>
        </div>
    )
};
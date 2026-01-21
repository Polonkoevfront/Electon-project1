import { Form } from "../../shared/ui";
import cls from "./AboutOurProduct.module.scss";

import box from "../../shared/assets/svg/box-tick.svg";
import crown from "../../shared/assets/svg/crown.svg";
import shield from "../../shared/assets/svg/shield-security.svg";

const guaranteeInfo = [
    { title: "Free delivery", description: "on order above $50,00", image: box },
    { title: "Best quality ", description: "best quality in low price", image: crown },
    { title: "1 year warranty", description: "Avaliable warranty", image: shield },
];

export const AboutOurProduct = () => {
    return (
        <Form className={cls.about_product}>
            <div className={cls.about_product_body}>
                {
                    guaranteeInfo.map((item, key) => (
                        <div key={key} className={cls.guarantee_item}>
                            <img src={item.image} alt="" />
                            <div>
                                <span>{item.title}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Form>
    )
};
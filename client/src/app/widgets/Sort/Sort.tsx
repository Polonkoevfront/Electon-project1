import cls from './Sort.module.scss';

import arrow_down from "../../shared/assets/svg/arrow-down.svg";
import { Form } from '../../shared/ui';

export const Sort = () => {
    return (
        <Form className={cls.sort}>
            <span>Browse categories</span>
            <img src={arrow_down} alt="" />
        </Form>
    )
};
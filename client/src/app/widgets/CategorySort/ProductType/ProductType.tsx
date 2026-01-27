import cls from './ProductType.module.scss';

export const ProductType = () => {
    return (
        <div className={cls.product_type_block}>
            <table>
                <caption>
                    <span>Product type</span>
                </caption>
                <tbody>
                    <td className={cls.select}>
                        <span>0 Selected</span>
                        <p> Reset</p>
                    </td>
                    <div className={cls.checkbox_block}>
                        <td>
                            <div>
                                <input type="checkbox" />
                                <span>Smart-watch</span>
                            </div>
                            <p>5</p>
                        </td>
                    </div>
                </tbody>
                <hr />
            </table>
        </div>
    )
};

import cls from './Brand.module.scss';

export const Brand = () => {
    return (
        <div className={cls.brand}>
            <table>
                <caption>
                    <span>Brand</span>
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

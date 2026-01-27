import cls from './Avaliability.module.scss';

export const Avaliability = () => {
    return (
        <div className={cls.avaliability_block}>
            <table>
                <caption>
                    <span>Avaliability</span>
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
                                <span>In stock</span>
                            </div>
                            <p>5</p>
                        </td>
                        <td>
                            <div>
                                <input type="checkbox" />
                                <span>Out of stock</span>
                            </div>
                            <p>0</p>
                        </td>
                    </div>
                </tbody>
                <hr />
            </table>
        </div>
    )
};
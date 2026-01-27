import cls from './Size.module.scss';

export const Size = () => {
    return (
        <div className={cls.size_block}>
            <table>
                <caption>
                    <span>Size</span>
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
                                <span>M</span>
                            </div>
                            <p>5</p>
                        </td>
                        <td>
                            <div>
                                <input type="checkbox" />
                                <span>S</span>
                            </div>
                            <p>5</p>
                        </td>
                        <td>
                            <div>
                                <input type="checkbox" />
                                <span>x</span>
                            </div>
                            <p>5</p>
                        </td>
                        <td>
                            <div>
                                <input type="checkbox" />
                                <span>xx</span>
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

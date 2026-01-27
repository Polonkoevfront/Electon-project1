import cls from './Categories.module.scss';

export const Categories = () => {
    return (
        <div className={cls.categories_block}>
            <table>
                <caption>
                    <span>Categories</span>
                    <p>Reset</p>
                </caption>
                <tbody>
                    <td>
                        <div>
                            <input type="checkbox" />
                            <span>All categories</span>
                        </div>
                        <p>10</p>
                    </td>
                    <td>
                        <div>
                            <input type="checkbox" />
                            <span>Table</span>
                        </div>
                        <p>5</p>
                    </td>
                    <td>
                        <div>
                            <input type="checkbox" />
                            <span>Laptop</span>
                        </div>
                        <p>5</p>
                    </td>
                    <td>
                        <div>
                            <input type="checkbox" />
                            <span>Headphones</span>
                        </div>
                        <p>5</p>
                    </td>
                    <td> <div>
                        <input type="checkbox" />
                        <span>Console</span>
                    </div>
                        <p>5</p>
                    </td>
                    <td>
                        <div>
                            <input type="checkbox" name="" id="" />
                            <span>other</span>
                        </div>
                        <p>5</p>
                    </td>
                </tbody>
                <hr />
            </table>
        </div>
    )
};

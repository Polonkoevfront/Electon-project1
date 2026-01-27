import cls from './Color.module.scss';

export const Color = () => {
    return (
        <div className={cls.color}>
            <table>
                <caption>
                    <span>Color</span>
                </caption>
                <tbody>
                    <td className={cls.select}>
                        <span>0 Selected</span>
                        <p>Reset</p>
                    </td>
                    <div className={cls.checkbox_block}>
                        <td>
                            <div className={cls.circle_item}></div>
                            <div className={cls.circle_item2}></div>
                            <div className={cls.circle_item3}></div>
                            <div className={cls.circle_item4}></div>
                            <div className={cls.circle_item5}></div>
                            <div className={cls.circle_item6}></div>
                            <div className={cls.circle_item7}></div>
                            <div className={cls.circle_item8}></div>
                            <div className={cls.circle_item9}></div>
                        </td>
                    </div>
                </tbody>
                <hr />
            </table>
        </div>
    )
};
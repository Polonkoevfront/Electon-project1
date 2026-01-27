import cls from './Navbar.module.scss';
import { AppLink, Button } from '../../shared/ui';
import { Sort } from '../Sort/Sort';

import location from "../../shared/assets/svg/location.svg";
import group from "../../shared/assets//svg/group.svg";
import Logo from "../../shared/assets/png/logo.png";
import user from "../../shared/assets/svg/user.svg";
import heart from "../../shared/assets/svg/heart.svg";
import cart from "../../shared/assets/svg/shopping-cart.svg";
import arrow_down from "../../shared/assets/svg/arrow-down-black.svg";
export const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <div className={cls.nav_help}>
                <span>Need help? Call us: (+98) 0234 456 789</span>

                <div className={cls.nav_help_block}>
                    <div className={cls.store}>
                        <img src={location} alt="" />
                        <p>Our store</p>
                    </div>
                    <div className={cls.order}>
                        <img src={group} alt="" />
                        <p>Track your order</p>
                    </div>
                </div>
            </div>
            <div className={cls.nav_pages}>
                <div className={cls.nav_pages_search}>
                    <img src={Logo} alt="" />

                    <div className={cls.label}>
                        <input type="Search" placeholder='Search any things' />
                        <Button variant='deafult'>Search</Button>
                    </div>
                </div>
                <div className={cls.nav_buy}>
                    <div className={cls.page_item}>
                        <img src={user} alt="" />
                        <AppLink className={cls.route} to="/sign">
                            <span>Sign in</span>
                        </AppLink>
                    </div>
                    <div className={cls.page_item}>
                        <img src={heart} alt="" />
                        <div>0</div>
                        <AppLink className={cls.route} to="favorites">
                            <span>Favorites</span>
                        </AppLink>
                    </div>
                    <div className={cls.page_item}>
                        <img src={cart} alt="" />
                        <div>0</div>
                        <AppLink className={cls.route} to="/cart">
                            <span>Cart</span>
                        </AppLink>
                    </div>
                </div>
            </div>
            <div className={cls.pages_navigation}>
                <div className={cls.sort}>
                    <Sort />
                </div>
                <div className={cls.pages_block}>
                    <ul>
                        <AppLink className={cls.page} to="/">
                            <li>Home</li>
                            <img src={arrow_down} alt="" />
                        </AppLink>
                        <AppLink className={cls.page} to="/">
                            <li>Catalog</li>
                            <img src={arrow_down} alt="" />
                        </AppLink>
                        <AppLink className={cls.page} to="/">
                            <li>Blog</li>
                            <img src={arrow_down} alt="" />
                        </AppLink>
                        <AppLink className={cls.page} to="/">
                            <li>Pages</li>
                            <img src={arrow_down} alt="" />
                        </AppLink>
                        <AppLink className={cls.page} to="/">
                            <li>About us</li>
                            <img src={arrow_down} alt="" />
                        </AppLink>
                    </ul>
                    <p>30 Days Free Return</p>
                </div>
            </div>
        </nav>
    )
};
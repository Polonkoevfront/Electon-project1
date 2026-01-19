import { Text } from '../../shared/ui';
import cls from './Footer.module.scss';

import send from "../../shared/assets/svg/send-2.svg";
import headphone from "../../shared/assets/svg/headphone.svg";
import google from "../../shared/assets/svg/google.svg";
import facebook from "../../shared/assets/svg/facebook.svg";
import whatsapp from "../../shared/assets/svg/whatsapp.svg";
import Logo from "../../shared/assets/png/logo.png";
import Logo2 from "../../shared/assets/png/logo-2.png";

export const Footer = () => {
    return (
        <footer>
            <div className={cls.follow_block}>
                <Text className={cls.follow_logo} as='h3' fz={29} fw={600}>Subscribe newsletter</Text>
                <div className={cls.follow}>
                    <div className={cls.label}>
                        <input type="email" placeholder='Email address' />
                        <img src={send} alt="" />
                    </div>
                    <div className={cls.call_num}>
                        <img src={headphone} alt="" />
                        <div>
                            <span>Call us 24/7:</span>
                            <span className={cls.num}>(+62) 0123 567 789</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.follow_block2}>
                <section className={cls.about_site}>
                    <div className={cls.info_block}>
                        <img src={Logo2} alt="" />
                        <div>
                            <span>64 st james boulevard</span>
                            <span>hoswick , ze2 7zj</span>
                        </div>
                    </div>
                    <div className={cls.network_block}>
                        <hr />
                        <div>
                            <img src={google} alt="" />
                            <img src={facebook} alt="" />
                            <img src={whatsapp} alt="" />
                        </div>
                    </div>
                </section>

                <section className={cls.footer_pages}>
                    <div>
                        <ul>
                            <span>Find product</span>
                            <li>Brownze arnold</li>
                            <li>Chronograph blue</li>
                            <li>Smart phones</li>
                            <li>Automatic watch</li>
                            <li>Hair straighteners</li>
                        </ul>
                        <ul>
                            <span>Get help</span>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Return police</li>
                            <li>Privacy police</li>
                            <li>Payment police</li>
                        </ul>
                        <ul>
                            <span>About us</span>
                            <li>News</li>
                            <li>Service</li>
                            <li>Our police</li>
                            <li>Custmer care</li>
                            <li>Faq's</li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    )
};
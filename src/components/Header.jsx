import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import "../index.sass";
import HeaderClass from "./Header.module.sass";

export const Header = ({logo}) => {
    const [openMenu, setOpenMenu] = useState(false)

    const closeMenu = () => {
        setOpenMenu(false)
    }

    useEffect(
        () => {
            if (openMenu === true)
                document.body.classList.add('ovh')
            else
                document.body.classList.remove('ovh')
        },
        [openMenu]
    );

    return(
        <>
            <header className={HeaderClass['header']} >
                <div className="container-fluid">
                    <div className={HeaderClass['header-container']}>
                        <NavLink className={HeaderClass['logo']} to="/" onClick={() => closeMenu()}>
                            <div className={HeaderClass['logo_image']}>
                                <img src={logo} alt="FRESCO"/>
                            </div>
                            <span className={HeaderClass['logo_description']}>digital-агентство</span>
                        </NavLink>

                        <div className={HeaderClass['contacts']}>
                            <a href="tel:+7 (3822) 505-900" className={HeaderClass['tel']}>+7 (3822) 505-900</a>
                            <span className={HeaderClass['time']}>9:00 – 16:00 мск</span>
                        </div>

                        <div className={ openMenu ?
                                HeaderClass['mobile_menu__button'] + ' ' + HeaderClass['open']
                                :HeaderClass['mobile_menu__button']}
                            onClick={() => setOpenMenu(!openMenu)}>
                            <div className={HeaderClass['mobile_menu__button__icon']}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={HeaderClass['left-bar']}>
                <div className={ openMenu ?
                    HeaderClass['menu__button'] + ' ' + HeaderClass['open']
                    :HeaderClass['menu__button']}
                     onClick={() => setOpenMenu(!openMenu)}>
                    <div className={HeaderClass['menu__button__icon']}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={HeaderClass['text']}>
                        <span>меню</span>
                    </div>
                </div>
            </div>

            <div className={HeaderClass['right-bar']}>

            </div>

            <div className={ openMenu ?
                HeaderClass['menu'] + ' ' + HeaderClass['open']
                :HeaderClass['menu']}>
                <div className={HeaderClass['list']}>
                    <ul>
                        <li>
                            <NavLink exact activeClassName={HeaderClass['active']} to="/" onClick={() => closeMenu()}>
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName={HeaderClass['active']} to="/about" onClick={() => closeMenu()}>
                                Агентство
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName={HeaderClass['active']} to="/projects" onClick={() => closeMenu()}>
                                Проекты
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName={HeaderClass['active']} to="/services" onClick={() => closeMenu()}>
                                Услуги
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName={HeaderClass['active']} to="/contacts" onClick={() => closeMenu()}>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={HeaderClass['contacts']}>
                    <div className={HeaderClass['inner']}>
                        <div>
                            <p>Россия, Томск, пр. Фрунзе, 103, оф. 608</p>
                            <div>
                                <a href="tel:+7(3822)505900">+7 (3822) 505-900</a>
                                <a href="mailto:info@fresco.bz">info@fresco.bz</a>
                            </div>
                        </div>
                        <div className={HeaderClass['brief_wrapper']}>
                            <a className={'brief'} href="/Бриф_на_разработку_сайта_(FRESCO).docx">
                                <span className={'brief__desc'}>С чего начать работу?</span>
                                <span className={'brief__text'}>Заполните бриф</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
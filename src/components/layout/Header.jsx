import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import HeaderClass from "./Header.module.sass";

export const Header = ({logo}) => {
    const [openMenu, setOpenMenu] = useState(false)

    return(
        <>
            <header className={HeaderClass['header']} >
                <div className="container-fluid">
                    <div className={HeaderClass['header-container']}>
                        <Link className={HeaderClass['logo']} to="/">
                            <div className={HeaderClass['logo_image']}>
                                <img src={logo} alt="FRESCO"/>
                            </div>
                            <span className={HeaderClass['logo_description']}>digital-агентство</span>
                        </Link>

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
        </>
    )
}
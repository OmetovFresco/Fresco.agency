import FooterClass from "./Footer.module.sass";

const Footer= () => {
    return(
        <>
            <footer className={FooterClass['footer']}>
                <div className={FooterClass['footer__inner']}>
                    <div className={FooterClass['brief_wrapper']}>
                        <a className={'brief'} href="/Бриф_на_разработку_сайта_(FRESCO).docx">
                            <span className={'brief__desc'}>С чего начать работу?</span>
                            <span className={'brief__text'}>Заполните бриф</span>
                        </a>
                    </div>

                    <div className={FooterClass['contacts']}>
                        <span className={FooterClass['address']}>Россия, Томск, пр. Фрунзе, 103, оф. 608</span>
                        <a href="tel:+7 (3822) 505-900" className={FooterClass['phone']}>+7 (3822) 505-900</a>
                        <a href="mailto:info@fresco.bz" className={FooterClass['mail']}>info@fresco.bz</a>
                    </div>

                    <div className={FooterClass['privat_policy']}>
                        <a href="/" className="italic_link">Политика конфиденциальности</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export {Footer}
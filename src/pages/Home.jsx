import React from 'react'
// import {Link, useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { Link as AnchorLink} from "react-scroll"
import { Button } from '@material-ui/core';

import {Form} from ".././components/Form"

import 'bootstrap/dist/css/bootstrap.css'
import "../index.sass";
import HomeClass from "./assets/Home.module.sass"

import headerVideo from "./assets/video3.webm"

import sprite from "./assets/sprite.symbol.svg"

import interactive1 from "./assets/interactive1.png"
import interactive2 from "./assets/interactive2.png"
import interactive3 from "./assets/interactive3.png"

const Home = () => {

    return(
        <>
            <section className={HomeClass["home_header"]}>
                <div className="container">
                    <div className={HomeClass["home_header__inner"]}>

                        <h1 data-aos="fade-up">Впечатляющие<br/>
                        сайты и веб-сервисы<br/>
                        на основе данных</h1>

                        <div className={HomeClass["buttons_line"]} data-aos="fade-up" data-aos-delay="100">

                            <AnchorLink
                                className={HomeClass["btn"]}
                                to="footer_form"
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="btn"
                                    onClick={() => {}}
                                >
                                    <svg><use xlinkHref={sprite + "#telegram"}></use></svg>
                                    <span>Обсудить проект</span>
                                </Button>
                            </AnchorLink>

                            <span>или</span>

                            <a href="/" className="italic_link">смотреть работы</a>
                        </div>
                    </div>
                </div>

                <AnchorLink to="home_about" className={HomeClass["arrow_down"]} smooth={true} offset={-70} duration={500}>
                    <svg className="icon-telegram btn__icon">
                        <use xlinkHref={sprite + "#down-arrow"}></use>
                    </svg>
                </AnchorLink>

                <video className={HomeClass["video__bg"]} width="100%" height="100%" muted="muted" autoPlay="autoplay" loop="loop" poster="">
                    <source src={headerVideo} type="video/mp4" />
                </video>
            </section>

            <section id="home_about" className={HomeClass["home_about"]}>
                <div className="container">
                    <div className="col-2_block">
                        <div className="media" data-aos="fade-in">
                            <div className="wistia_responsive_padding">
                                <div className="wistia_responsive_wrapper">
                                    <div className="wistia_embed wistia_async_e8fzpeaipm seo=false videoFoam=true">&nbsp;</div>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="inner">
                                <h2 className="title" data-aos="fade-up">Что делаем</h2>
                                <div className="text" data-aos="fade-up">
                                    <p>Создаем сайты с трендовым дизайном и высокой конверсией. Такой сайт принесет вам
                                        больше заявок и звонков от потенциальных клиентов, а еще — им можно гордиться,
                                        его оценят ваши клиенты, партнеры и конкуренты.</p>
                                    <p>Также мы проектируем, дизайним и кодим удобные интерфейсы для веб-приложений —
                                        личных кабинетов, пользовательских сервисов, CRM, аналитических дашбордов,
                                        корпоративных порталов и т.д.</p>
                                </div>
                                <NavLink className="italic_link" to="/" data-aos="fade-up">Подробнее о нас</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={HomeClass["home_interactive"]}>
                <div className="container">
                    <div className={HomeClass["home_interactive__inner"]}>
                        <div className={HomeClass["home_interactive__inner__item"]}>
                            <img src={interactive1} alt="Fresco Agency"/>
                        </div>
                        <div className={HomeClass["home_interactive__inner__item"]}>
                            <img src={interactive2} alt="Fresco Agency"/>
                        </div>
                        <div className={HomeClass["home_interactive__inner__item"]}>
                            <img src={interactive3} alt="Fresco Agency"/>
                        </div>
                    </div>
                </div>
            </div>

            <section id="competencies" className={HomeClass["home_about"]}>
                <div className="container">
                    <div className="col-2_block">

                        <div className="content">
                            <div className="inner">
                                <h2 className="title" data-aos="fade-up">Компетенции</h2>
                                <div className="text" data-aos="fade-up">
                                    <p>Начинаем работу с аналитики — изучаем ваш продукт/услугу, потребителя, конкурентов и особенности рынка. Далее проектируем, делаем визуальную концепцию и по-этапно реализуем ваш проект на актуальном технологическом стэке.</p>
                                </div>
                                <NavLink className="italic_link" to="/" data-aos="fade-up">Перейти к услугам</NavLink>
                            </div>
                        </div>

                        <div className="color_block">
                            <div className="color_block__content" data-aos="bg_animate">
                                <div className="text">
                                    <div>
                                        <h3>Аналитика и проектирование</h3>
                                        <span>агрегация требований</span>
                                        <span>UX/UI прототипы</span>
                                        <span>A/B тесты</span>
                                    </div>
                                    <div>
                                        <h3>Продакшн</h3>
                                        <span>лендинги</span>
                                        <span>промо-сайты</span>
                                        <span>корпоративные сайты</span>
                                        <span>интерфейсы для веб-приложений</span>
                                        <span>техническая поддержка</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="footer_form">
                <Form />
            </section>
        </>
    )
}

export {Home}
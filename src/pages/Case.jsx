import React, {useState} from 'react'
// import {Link, useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { Link as AnchorLink} from "react-scroll"
import { Button } from '@material-ui/core';

import { Parallax } from 'react-parallax';

import {Form} from ".././components/Form"

import 'bootstrap/dist/css/bootstrap.css'
import "../index.sass";
import "./assets/Case.sass"

import sprite from "./assets/sprite.symbol.svg"

const Case = () => {

    const [caseValue, setCaseValue] = useState({
        backgroundColors: {
            basic: "#d3d7df",
            secondary: "#e5e8ec",
            auxiliary: "#f3f3f3"
        },
        order: [
            "about",
            "target",
            "prototypes",
            "imageWithExplanations",
            "twoCollImages",
            "threeImages",
            "twoImages",
            "screensGreed",
            "rightTextLeftSlider",
            "leftTextRightSlider",
            "rightTextLeftScene",
            "leftTextRightScene",
            "textAndGreed",
            "bigGroup",
            "interactiveSlider",
            "bigSlider",
            "horizontalScrollSlider",
            "tabSlider",
            "otherScreens",
            "scrollScreen",
            "threeColScreensGreed",
            "result",
            "review",
        ],
        header: {
            background: "https://fresco.agency/img/cdi/bg.jpg",
            title: "Название",
            link: "http://link.ru",
            linkText: "link.ru",
            description: "Корпоративный сайт для компании «Фторполимерные технологии» в сдержанном стиле с удобной административной панелью.",
            tagList: [
                "сайт",
                "соцсети",
                "интернет-реклама",
                "проектирование",
                "разработка"
            ]
        },
        aboutAndTargetType: 1,
        about: {
            title: "О компании",
            text: "<p>Компания производит и разрабатывает пластичные смазки для различных отраслей промышленности, выпускаемых под брендом «Томфлон».</p>",
        },
        target: {
            type: 1,
            title: "Цели",
            value: [
                [
                    "",
                    "<p>Определение целей веб-сайта и его позиционирование на рынке. Оценка потенциальных возможностей: подробное изучение преимуществ и слабых сторон конкурентов</p>"
                ],
                [
                    "https://fresco.agency/new_version/assets/img/projects/bc-kz/a-goals.svg",
                    "<p>Анализ рынка конкурентов. Оценка потенциальных возможностей: подробное изучение преимуществ и слабых сторон конкурентов</p>"
                ],
                [
                    "https://fresco.agency/new_version/assets/img/projects/bc-kz/a-goals.svg",
                    "<p>Анализ рынка конкурентов. Оценка потенциальных возможностей: подробное изучение преимуществ и слабых сторон конкурентов</p>"
                ]
            ]
        },
        prototypes: [
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
        ],
        imageWithExplanations: {
            image: "",
            explanations: [
                {
                    title: "Анимированный слайдер из баннеров",
                    text: "<p>К созданию дизайна анимированных баннеров мы подошли с особоым подходом. Именно баннеры ярко, кратко и наглядно показывают самую важную информацию, которую потенциальный клиент получит на сайте.</p>"
                },
                {
                    title: "Описание бизнес-центра «Красное знамя»",
                    text: "<p>В описание Бизнес-центра входят все преимущества, которые выгодно подчеркивают для клиента достоинства и перспективы от сотрудничества с центром.</p>"
                }
            ]
        },
        twoCollImages: [
            "http://link.ru",
            "http://link.ru",
        ],
        threeImages: [
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
        ],
        twoImages: [
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
        ],
        screensGreed: [
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
        ],
        rightTextLeftSlider: {
            title: "Знакомство с компанией",
            text: "<ul><li>Большой стоматологический центр оснащенный самым передовым оборудованием</li><li>Уникальная команда специалистов с высокой квалификацией</li><li>Один из самых комфортных центров в сибири с детальным подходом к лечению</li></ul>",
            slider: [
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
            ]
        },
        leftTextRightSlider: {
            title: "Знакомство с компанией",
            text: "<ul><li>Большой стоматологический центр оснащенный самым передовым оборудованием</li><li>Уникальная команда специалистов с высокой квалификацией</li><li>Один из самых комфортных центров в сибири с детальным подходом к лечению</li></ul>",
            slider: [
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
            ]
        },
        rightTextLeftScene: {
            title: "Диагностика текущего сайта",
            text: "<p><b>Диагностика текущего сайта</b></p><p>Провели анализ поведения пользователя на сайте. Проверили все ошибки интерфейса, которые могли послужить причиной отказа пациентов от просмотра сайта или затрудняли поиск информации.</p><p><b>Контекстная реклама</b></p><p>Проанализировали настройки контекстной рекламы и эффективность за последние несколько месяцев.</p><p><b>Подключенные сервисы</b></p><p>Проанализировали подключенный сервис сквозной аналитики на предмет оптимальности оплачиваемого пакета услуг и эффективности онлайн чата</p>",
            scene: {
                image: "http://link.ru",
                topLeft: "http://link.ru",
                topRight: "http://link.ru",
                bottomLeft: "http://link.ru",
                bottomRight: "http://link.ru",
            }
        },
        leftTextRightScene: {
            title: "Диагностика текущего сайта",
            text: "<p><b>Диагностика текущего сайта</b></p><p>Провели анализ поведения пользователя на сайте. Проверили все ошибки интерфейса, которые могли послужить причиной отказа пациентов от просмотра сайта или затрудняли поиск информации.</p><p><b>Контекстная реклама</b></p><p>Проанализировали настройки контекстной рекламы и эффективность за последние несколько месяцев.</p><p><b>Подключенные сервисы</b></p><p>Проанализировали подключенный сервис сквозной аналитики на предмет оптимальности оплачиваемого пакета услуг и эффективности онлайн чата</p>",
            scene: {
                image: "http://link.ru",
                topLeft: "http://link.ru",
                topRight: "http://link.ru",
                bottomLeft: "http://link.ru",
                bottomRight: "http://link.ru",
            }
        },
        textAndGreed: {
            title: "План лечения",
            text: "<p>Составили план рабтот на несколько месяцев, в который входили:</p><p><ul><li>Настройка более эффективной контекстной рекламы и системы сквозной аналитики для отображения в отчете каждого потраченного рубля</li><li><p>Редизайн и переработка страниц сайта для увеличения конверсии первичных обращений пациентов</p></li><li><p>Работа с администраторами на предмет удобного и более оперативного реагирования на онлайн чат и заявки, которые отображаются в системе</p></li></ul></p>",
            greed: [
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
            ]
        },
        bigGroup: {
            rightTextLeftScene: {
                title: "Диагностика текущего сайта",
                text: "<p><b>Диагностика текущего сайта</b></p><p>Провели анализ поведения пользователя на сайте. Проверили все ошибки интерфейса, которые могли послужить причиной отказа пациентов от просмотра сайта или затрудняли поиск информации.</p><p><b>Контекстная реклама</b></p><p>Проанализировали настройки контекстной рекламы и эффективность за последние несколько месяцев.</p><p><b>Подключенные сервисы</b></p><p>Проанализировали подключенный сервис сквозной аналитики на предмет оптимальности оплачиваемого пакета услуг и эффективности онлайн чата</p>",
                scene: {
                    image: "http://link.ru",
                    topLeft: "http://link.ru",
                    topRight: "http://link.ru",
                    bottomLeft: "http://link.ru",
                    bottomRight: "http://link.ru",
                }
            },
            middleBlock: {
                title: "Навигатор",
                text: "<p>Вывод  отдельного меню для навигации по услугам, переработка и стилизация дизайна.</p><p>Детальная проработка мобильного меню для более удобного поиска информации.</p>",
                image: "http://link.ru"
            },
            leftTextRightSlider: {
                title: "Навигатор",
                text: "<p>Размещение фильтров по врачам и направлениям на разных страницах сайта, например таких как: «Наши работы» и «Отзывы».</p><p>Разработка дополнительной навигации по разделам «О нас», «Услуги» для более быстрого и удобного поиска  информации и вовлечения пользователей.</p>",
                slider: [
                    {
                        image: "http://link.ru",
                        topRight: "http://link.ru",
                        bottomRight: "http://link.ru",
                    },
                    {
                        image: "http://link.ru",
                        topLeft: "http://link.ru",
                        bottomRight: "http://link.ru",
                    },
                    {
                        image: "http://link.ru",
                        topLeft: "http://link.ru",
                        topRight: "http://link.ru",
                    }
                ]
            },
        },
        interactiveSlider: {
            texts: [
                "Личный кабинет",
                "Регистрация",
                "Корзина",
                "Избранные товары",
                "Поиск",
                "Каталог"
            ],
            slider: [
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
            ]
        },
        bigSlider: {
            title: "Слайдер",
            text: "<p>Вывод  отдельного меню для навигации по услугам, переработка и стилизация дизайна.</p><p>Детальная проработка мобильного меню для более удобного поиска информации.</p>",
            slider: [
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
            ]
        },
        horizontalScrollSlider: [
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
        ],
        tabSlider: {
            title: "Слайдер с табами",
            text: "<p>Вывод  отдельного меню для навигации по услугам, переработка и стилизация дизайна.</p><p>Детальная проработка мобильного меню для более удобного поиска информации.</p>",
            slider: [
                "http://link.ru",
                "http://link.ru",
                "http://link.ru",
            ]
        },
        otherScreens: {
            mobile: "http://link.ru",
            notebook: "http://link.ru",
            tabletHorizontal: "http://link.ru",
            tabletVertical: "http://link.ru",
        },
        scrollScreen: "http://link.ru",
        threeColScreensGreed: [
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
            "http://link.ru",
        ],
        result: {
            background: "http://link.ru",
            description: "<p>Комплексная работа по созданию хорошего сайта и рекламной кампании привела к тому, что в первые дни запуска проекта уже были заявки на заселение.</p><p>Сейчас проводится комплексный анализ трафика, ведутся работы над ошибками, совершенствуется рекламная стратегия. Появляются все новые идеи для расширения целевой аудитории и как ее можно привлечь. Но об этом позже...</p>",
        },
        review: {
            photo: "http://link.ru",
            name: "Анастасия Смирнова",
            role: "Директор «Название»,",
            site: "site.ru",
            text: "<p>Узнали по рекомендации. Агенство выбирали долго, обращались и в именитые / получили ценник в полмульта, ультрапафос и сроки полгода / и к ноунейм / прогиб ниже плинтуса, любой каприз за наши деньги, но к сожалению без гарантий / и даже к частным исполнителям / копеечные цены и специалисты вчера посмотревшие обучающие видео на ютубе (в перемотке) — я конечно немного утрирую, но суть та же. Остановились на вас из-за соотношения «цена–качество» и конкретики при обсуждении ТЗ / опять же рекомендация сыграла свою роль / Запомнилось полное отсутствие геммороя, четкое соответствие сроков и точность в исполнении наших задач.</p> <p>Вот про разочарования мне сказать нечего, так как впечатления строго положительные) Со своей стороны обещаем рекомендовать вас всем нашим партнерам и просто знакомым как Отличных и Профессиональных Исполнителей.</p><p>Соответственно оценка: 10 очень довольных клиентов из 10)</p><p>Ассоциация –> КАЧЕСТВО</p>"
        }
    })

    const OtherProjects = {
        list: [
            {
                name: "Томское пиво",
                year: "2020",
                category: "Образование",
                tagList: [
                    "сайт",
                    "соцсети",
                    "интернет-реклама"
                ],
                backgroundImage: "link",
                backgroundColor: "#fa5b02"
            },
            {
                name: "Вымпел-строй",
                year: "2020",
                category: "Образование",
                tagList: [
                    "сайт",
                    "соцсети",
                    "интернет-реклама"
                ],
                backgroundImage: "link",
                backgroundColor: "#fdc655"
            },
            {
                name: "Моряковская судоходная компания",
                year: "2018",
                category: "медицина",
                tagList: [
                    "сайт",
                    "соцсети",
                    "интернет-реклама"
                ],
                backgroundImage: "link",
                backgroundColor: "#d52222"
            }
        ]
    }

    return (
        <div className="case_page">
            <Parallax className="header" bgImage={caseValue.header.background} bgImageSize="100%" bgImageAlt="the cat" strength={100}>
                <div className="inner">
                <h1>{caseValue.header.title}</h1>
                <div className="link">
                    <a href={caseValue.header.link} className="italic_link">{caseValue.header.linkText}</a>
                </div>
                <div className="description">
                    {caseValue.header.description}
                </div>
                <div className="tag_list">
                    {
                        caseValue.header.tagList.map((item, key) =>
                            <span key={key}>{item}</span>
                        )
                    }
                </div>
            </div>
            </Parallax>
            {
                caseValue.order.map((item, key) =>
                    <>
                        {item === "about" ?
                            <>
                                <div key={key} className="about">
                                    <div className="container">
                                        <div className="row justify-content-md-center">
                                            <div className="col-12 col-xl-10">
                                                <div className="row">
                                                    <div className="col-12 col-md-5">
                                                        <h2>{caseValue.about.title}</h2>
                                                    </div>
                                                    <div className="col-12 col-md-6 offset-md-1">
                                                        {caseValue.about.text}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Parallax blur={0} bgImage={caseValue.header.background} bgImageAlt="the cat" strength={-100}></Parallax>
                            </>
                            : ""}
                        {item === "target" ?
                            <div key={key} className="about" style={{backgroundColor: caseValue.backgroundColors.basic}}>
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <div className="col-12 col-xl-10">
                                            <div className="row">
                                                <div className="col-12 col-md-5">
                                                    <h2>{caseValue.target.title}</h2>
                                                </div>
                                                <div className="col-12 col-md-6 offset-md-1">
                                                    {
                                                        caseValue.target.value.map((item, key) =>
                                                            <div key={key} className={item[0].length > 0 ? "icon" : ""}>
                                                                {item[0].length > 0 ? <img src={item[0]}/> : ""}
                                                                <p>{item[1]}</p>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        : ""}
                        {item === "prototypes" ?
                            <div key={key} style={{backgroundColor: caseValue.backgroundColors.basic}}>
                                Выведен prototypes
                            </div>
                            : ""}
                        {item === "imageWithExplanations" ?
                            <div key={key}>Выведен imageWithExplanations</div>
                            : ""}
                        {item === "twoCollImages" ?
                            <div key={key}>Выведен twoCollImages</div>
                            : ""}
                        {item === "threeImages" ?
                            <div key={key}>Выведен threeImages</div>
                            : ""}
                        {item === "twoImages" ?
                            <div key={key}>Выведен twoImages</div>
                            : ""}
                        {item === "screensGreed" ?
                            <div key={key}>Выведен screensGreed</div>
                            : ""}
                        {item === "rightTextLeftSlider" ?
                            <div key={key}>Выведен rightTextLeftSlider</div>
                            : ""}
                        {item === "leftTextRightSlider" ?
                            <div key={key}>Выведен leftTextRightSlider</div>
                            : ""}
                        {item === "rightTextLeftScene" ?
                            <div key={key}>Выведен rightTextLeftScene</div>
                            : ""}
                        {item === "leftTextRightScene" ?
                            <div key={key}>Выведен leftTextRightScene</div>
                            : ""}
                        {item === "textAndGreed" ?
                            <div key={key}>Выведен textAndGreed</div>
                            : ""}
                        {item === "bigGroup" ?
                            <div key={key}>Выведен bigGroup</div>
                            : ""}
                        {item === "interactiveSlider" ?
                            <div key={key}>Выведен interactiveSlider</div>
                            : ""}
                        {item === "bigSlider" ?
                            <div key={key}>Выведен bigSlider</div>
                            : ""}
                        {item === "horizontalScrollSlider" ?
                            <div key={key}>Выведен horizontalScrollSlider</div>
                            : ""}
                        {item === "tabSlider" ?
                            <div key={key}>Выведен tabSlider</div>
                            : ""}
                        {item === "otherScreens" ?
                            <div key={key}>Выведен otherScreens</div>
                            : ""}
                        {item === "scrollScreen" ?
                            <div key={key}>Выведен scrollScreen</div>
                            : ""}
                        {item === "threeColScreensGreed" ?
                            <div key={key}>Выведен threeColScreensGreed</div>
                            : ""}
                        {item === "result" ?
                            <div key={key}>Выведен result</div>
                            : ""}
                        {item === "review" ?
                            <div key={key}>Выведен review</div>
                            : ""}
                    </>
                )
            }

            <section id="footer_form">
                <Form/>
            </section>
        </div>
    )
}

export {Case}
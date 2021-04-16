import React, {useEffect} from 'react'
// import {Link, useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { Link as AnchorLink} from "react-scroll"
import { Button } from '@material-ui/core'

import {Form} from ".././components/Form"

// import 'bootstrap/dist/css/bootstrap.css'
// import "../index.sass";
import "./assets/Contacts.sass"

import moscow from "./assets/moscow.svg"
import tomsk from "./assets/tomsk.svg"

const Contacts = () => {

    useEffect(() => {

    }, [])

    return(
        <>
            <div className="contacts_page">
                <div className="container">
                    <div className="row align-items-center flex-column-reverse flex-md-row">
                        <div className="col-md-6">
                            <div className="intro__map map">
                                <div className="map_block">
                                    <iframe
                                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aad68faccee72e38806d79be5c19df422f5da2595e691e3d1ad66e81438948211&amp;source=constructor"
                                        width="100%" height="550" frameBorder="0"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <h1>Контакты</h1>
                            <div className="contacts-list">
                                <p>Томск, пр. Фрунзе, 103, оф. 801</p>
                                <p>Режим работы: 9:00 – 16:00 мск</p>
                                <p><a href="mailto:info@fresco.bz">info@fresco.bz</a></p>
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="row contacts-cities">
                                        <div className="col-6">
                                            <img src={moscow} alt=""/>
                                            <p><b>Москва</b></p>
                                            <p><a href="tel:+7 (499) 123-45-67">+7 (499) 123-45-67</a></p>
                                        </div>
                                        <div className="col-6">
                                            <img src={tomsk} alt=""/>
                                            <p><b>Томск</b></p>
                                            <p><a href="tel:+7 (3822) 505-900">+7 (3822) 505-900</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="footer_form">
                <Form />
            </section>
        </>
    )
}

export {Contacts}
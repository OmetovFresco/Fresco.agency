import React from 'react'
// import {Link, useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { Link as AnchorLink} from "react-scroll"
import { Button } from '@material-ui/core';

import {Form} from ".././components/Form"

import "./assets/Projects.sass"

import headerVideo from "./assets/video_projects.webm"

import sprite from "./assets/sprite.symbol.svg"

import npcCardCover from "./assets/projects/npc-card_cover.jpeg"

const Projects = () => {

    const npcCardBg = "#076b72"

    return(
        <>
            <section className="title_video_header">
                <div className="container">
                    <div className="title_video_header__inner">
                        <h1 data-aos="fade-up">Проекты</h1>
                    </div>
                </div>

                <AnchorLink to="home_about" className="arrow_down" smooth={true} offset={-70} duration={500}>
                    <svg className="icon-telegram btn__icon">
                        <use xlinkHref={sprite + "#down-arrow"}></use>
                    </svg>
                </AnchorLink>

                <video className="video__bg" width="100%" height="100%" muted="muted" autoPlay="autoplay" loop="loop" poster="">
                    <source src={headerVideo} type="video/mp4" />
                </video>
            </section>

            <section className="projects_list">
                <a href="/" className="project">
                    <span className="hover">
                        <span className="category">Образование</span>
                        <span className="year">2020</span>
                        <span className="tag_list">
                            <span>сайт</span>
                            <span>соцсети</span>
                            <span>интернет-реклама</span>
                        </span>
                        <span className="bg" style={{backgroundColor: npcCardBg}}></span>
                    </span>
                    <span className="cover" style={{backgroundImage: "url(" + npcCardCover + ")"}}></span>
                    <h2 className="name">Logsis ЛК</h2>
                </a>
            </section>
        </>
    )
}

export {Projects}
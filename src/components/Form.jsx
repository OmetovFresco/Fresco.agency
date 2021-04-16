import React, {useState, useEffect} from 'react'
import { TextField, Button } from '@material-ui/core';
import InputMask from "react-input-mask";

import 'bootstrap/dist/css/bootstrap.css';
import "../index.sass";
import "./Form.sass";
import sprite from "../pages/assets/sprite.symbol.svg";

export const Form = () => {

    const [formName, setFormName] = useState({
        value: '',
        error: false,
        valid: true,
        successValidation: false,
        errorText: "Введите корректное имя",
        helperText: ""
    })

    const [formMail, setFormMail] = useState({
        value: '',
        error: false,
        valid: true,
        successValidation: false,
        errorText: "Введите корректный e-mail",
        helperText: " "
    })

    const [formCompanyName, setFormCompanyName] = useState({
        value: '',
        successValidation: false,
        helperText: " "
    })

    const [formPhone, setFormPhone] = useState({
        value: '',
        error: false,
        valid: true,
        successValidation: false,
        errorText: "Введите корректный номер телефона",
        helperText: " "
    })

    const [formMessage, setFormMessage] = useState({
        value: '',
        successValidation: false
    })

    const handleInputName = (value) => {
        setFormName({
            ...formName,
            value: value
        })
    }

    const handleInputMail = (value) => {

        let valid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)


        if (valid) {
            setFormMail({
                ...formMail,
                error: false,
                valid: false,
                value: value
            })
        } else {
            if (value.length){
                setFormMail({
                    ...formMail,
                    error: true,
                    valid: true,
                    value: value
                })
            } else {
                setFormMail({
                    ...formMail,
                    error: false,
                    valid: false,
                    value: value
                })
            }
        }

    }

    const handleInputCompanyName = (value) => {
        setFormCompanyName({
            ...formCompanyName,
            value: value
        })
    }

    const handleInputMessage = (value) => {
        setFormMessage({
            ...formMessage,
            value: value
        })
    }

    const handleInputPhone = (value) => {

        // eslint-disable-next-line
        let valid = value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i)

        if (valid) {
            setFormPhone({
                ...formPhone,
                error: false,
                valid: true,
                value: value
            })
        } else {
            if (value.length){
                setFormPhone({
                    ...formPhone,
                    error: true,
                    valid: false,
                    value: value
                })
            } else {
                setFormPhone({
                    ...formPhone,
                    error: false,
                    value: value
                })
            }
        }
    }

    const SendForm = () => {
        if (formMail['valid'] && formPhone['valid'] && formName['valid']){
            console.log("Отправляем")
        } else {
            console.log("Не отправляем")
        }
    }

    useEffect(
        () => {

            //обработка имени
            if ((formName['value'].length >= 2) || (formName['value'].length === 0)) {
                setFormName({
                    ...formName,
                    error: false,
                    valid: true,
                    helperText: " "
                })
            } else {
                setFormName({
                    ...formName,
                    error: true,
                    valid: false,
                    helperText: formName['errorText']
                })
            }
            if (formName['value'].length === 0){
                setFormName({
                    ...formName,
                    error: false,
                    valid: false,
                    helperText: " "
                })
            }

            //обработка email
            if (formMail['error']) {
                setFormMail({
                    ...formMail,
                    valid: false,
                    helperText: formMail['errorText']
                })
            } else {
                setFormMail({
                    ...formMail,
                    valid: true,
                    helperText: " "
                })
            }
            if (formMail['value'].length === 0){
                setFormMail({
                    ...formMail,
                    valid: false
                })
            }

            //обработка номера телефона
            if (formPhone['error']) {
                setFormPhone({
                    ...formPhone,
                    valid: false,
                    helperText: formPhone['errorText']
                })
            } else {
                setFormPhone({
                    ...formPhone,
                    valid: true,
                    helperText: " "
                })
            }
            if (formPhone['value'].length === 0){
                setFormPhone({
                    ...formPhone,
                    valid: false
                })
            }

        },
        // eslint-disable-next-line
        [formName['value'], formMail['value'], formPhone['value']]
    );

    return(
        <>
            <div className="container">
                <div className="form">
                    <h2 data-aos="fade-up" >Давайте обсудим ваш проект</h2>
                    <form action="" autoComplete="off" data-aos="fade-up" >
                        <div>
                            <div>
                                <TextField
                                    label="Ваше имя*"
                                    value={formName['value']}
                                    error={formName['error']}
                                    helperText={formName['helperText']}
                                    onChange={
                                        (event) => handleInputName(event.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <TextField
                                    label="E-mail*"
                                    value={formMail['value']}
                                    error={formMail['error']}
                                    helperText={formMail['helperText']}
                                    onChange={
                                        (event) => handleInputMail(event.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <div>
                                <TextField
                                    label="Название компании"
                                    value={formCompanyName['value']}
                                    error={formCompanyName['error']}
                                    helperText={formCompanyName['helperText']}
                                    onChange={
                                        (event) => handleInputCompanyName(event.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <InputMask
                                    mask="+7 (999) 999 99-99"
                                    value={formPhone['value']}
                                    disabled={false}
                                    maskChar=" "
                                    onChange={
                                        (event) => handleInputPhone(event.target.value)
                                    }
                                >
                                    <TextField
                                        label="Телефон*"
                                        error={formPhone['error']}
                                        helperText={formPhone['helperText']}
                                    />
                                </InputMask>

                                {/*<InputMask*/}
                                {/*    mask="(0)999 999 99 99"*/}
                                {/*    value={formPhone['value']}*/}
                                {/*    disabled={false}*/}
                                {/*    maskChar=" "*/}
                                {/*>*/}
                                {/*    {() => <TextField label="Телефон*"/>}*/}
                                {/*</InputMask>*/}
                            </div>
                        </div>

                        <div>
                            <TextField
                                id="standard-multiline-static"
                                label="Сообщение"
                                multiline
                                rows={5}
                                value={formMessage['value']}
                                error={formMessage['error']}
                                helperText={formMessage['helperText']}
                                onChange={
                                    (event) => handleInputMessage(event.target.value)
                                }
                            />
                        </div>

                        <div className="form_footer">
                            <div>
                                <span>Нажимая на кнопку «Отправить», вы соглашаетесь на <a href="/" className="italic_link">обработку персональных данных</a></span>
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="btn"
                                    onClick={() => SendForm()}
                                >
                                    <svg><use xlinkHref={sprite + "#telegram"}></use></svg>
                                    <span>Отправить</span>
                                </Button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
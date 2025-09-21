"use client";

import {Button} from "../../components/Button/Button";
import {useEffect, useState} from "react";

import s from './HeroSections.module.scss';

export const HeroSections = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    return (
        <section id="hero" className={`${s.HeroSection} ${isMounted ? 'fade-in' : ''}`}>
            <div className={s.HeroSection__Info}>
                <h1 className={s.HeroSection__H1}>Умное управление <br/> дизель-генераторными установками</h1>

                <span className={s.HeroSection__Span}>
                    Наш контроллер управления ДГУ – это интеллектуальная система, которая берет под полный контроль работу дизель-генераторной  установки, защищает оборудование и снижает ваши расходы на 20-30%.
                </span>
                <Button/>
            </div>
        </section>
    )
}
"use client";

import React, { useEffect, useState } from "react";

import s from "./Header.module.scss";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${s.Header} ${isScrolled ? s.isScrolled : ""}`}>
      <div className={s.Header__Logo}>
        <svg width={"16rem"} height={"5rem"} viewBox="0 0 512 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="risegTitle risegDesc">
          <title id="risegTitle">РИСЭГ — логотип</title>
          <desc id="risegDesc">Гексагональный символ с узлами и градиентом, рядом надпись РИСЭГ</desc>

          <defs>
            <linearGradient id="gradPrimary" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F88161"/>
              <stop offset="100%" stopColor="#F65063"/>
            </linearGradient>
            <linearGradient id="gradAccent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFD1B3"/>
              <stop offset="100%" stopColor="#F88161"/>
            </linearGradient>
            <radialGradient id="gradGlow" cx={64} cy={64} r={56} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F88161" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#F88161" stopOpacity="0"/>
            </radialGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12"/>
            </filter>
          </defs>

          {/* Эмблема */}
          <g transform="translate(16,24)">
            <circle cx={64} cy={56} r={56} fill="url(#gradGlow)" filter="url(#softGlow)"/>
            <g stroke="url(#gradPrimary)" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(0,-8)">
              {/* Гексагон */}
              <path d="M108 64 L86 102.105 L42 102.105 L20 64 L42 25.895 L86 25.895 Z"/>
              {/* Диагональные/связующие линии */}
              <path d="M108 64 L86 25.895"/>
              <path d="M42 25.895 L20 64"/>
              <path d="M42 102.105 L86 102.105"/>
              <path d="M86 25.895 L42 102.105"/>
            </g>
            {/* Узлы */}
            <g>
              <circle cx={108} cy={56} r={6} fill="url(#gradAccent)"/>
              <circle cx={86} cy={17.895} r={5.5} fill="url(#gradAccent)"/>
              <circle cx={42} cy={17.895} r={5.5} fill="url(#gradAccent)"/>
              <circle cx={20} cy={56} r={6} fill="url(#gradAccent)"/>
              <circle cx={42} cy={94.105} r={5.5} fill="url(#gradAccent)"/>
              <circle cx={86} cy={94.105} r={5.5} fill="url(#gradAccent)"/>
            </g>
          </g>

          {/* Словесный знак */}
          <g transform="translate(152,34)">
            <text x={0} y={50} fontFamily="Jura, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif" fontSize={64} fontWeight={700} letterSpacing={1.5} fill="#FFFFFF">РИСЭГ</text>
            <rect x={2} y={64} width={220} height={6} rx={3} fill="url(#gradAccent)"/>
          </g>
        </svg>
      </div>

      <nav className={s.Header__Nav} aria-label="Основная навигация">
        <ul className={s.Header__List}>
          <li><a className={s.Header__Link} href="#hero">Главная</a></li>
          <li><a className={s.Header__Link} href="#about">Зачем</a></li>
          <li><a className={s.Header__Link} href="#advantages">Преимущества</a></li>
          <li><a className={s.Header__Link} href="#solution">Решение</a></li>
          <li><a className={s.Header__Link} href="#path">Путь</a></li>
          <li><a className={s.Header__Link} href="#support">Поддержка</a></li>
        </ul>
      </nav>

      {/* <Button /> */}
    </header>
  );
};

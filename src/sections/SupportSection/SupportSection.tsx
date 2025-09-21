import s from './SupportSection.module.scss';
import {Reveal} from "../../components/Reveal/Reveal";

export const SupportSection = () => {
    return(
        <section id="support" className={s.SupportSection}>
            <Reveal>
                <h2 className={s.SupportSection__H2}>Нас поддерживают</h2>
            </Reveal>
            <div className={s.SupportSection__Icons}>
                <Reveal><div className={s.Icon_Fond}/></Reveal>
                <Reveal><div className={s.Icon_Energy}/></Reveal>
                <Reveal><div className={s.Icon_Polytech}/></Reveal>
            </div>
        </section>
    )
}
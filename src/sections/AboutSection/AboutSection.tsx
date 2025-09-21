import s from './AboutSection.module.scss';
import {CARDS} from "../../lib/constants";
import {Card} from "../../components/Card/Card";
import "../../styles/global.scss";
import {Reveal} from "../../components/Reveal/Reveal";

export const AboutSection = () => {
    return(
        <section id="about" className={s.AboutSection}>
            <Reveal>
                <h2 className={s.AboutSection__H2}>Для чего нужен наш контроллер управления ДГУ?</h2>
            </Reveal>
            <div className={s.AboutSection__Cards}>
                {CARDS.map(card =>
                        <Card key={card.id + card.title} id={card.id} description={card.description} title={card.title}/>
                )}
            </div>
        </section>
    )
}
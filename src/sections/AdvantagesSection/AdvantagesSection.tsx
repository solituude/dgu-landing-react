
import s from './AdvantagesSection.module.scss';
import {ADVANTAGES} from "../../lib";
import {LightCard} from "../../components/Card/LightCard";
import {Reveal} from "../../components/Reveal/Reveal";



export const AdvantagesSection = () => {
    return(
        <section id="advantages" className={s.AdvantagesSection}>
            <Reveal>
                <h2 className={s.AdvantagesSection__H2}>Преимущества нашей системы</h2>
            </Reveal>
            <div className={s.AdvantagesSection__Cards}>
                {ADVANTAGES.map((ad => (
                    <LightCard key={ad.id + ad.title} id={ad.id} description={ad.description} title={ad.title} />
                )))}
            </div>

        </section>
    )
}
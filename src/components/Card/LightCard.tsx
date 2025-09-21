import {ICard} from "../../lib";
import s from './Card.module.scss';
import { Reveal } from "../Reveal/Reveal";
export const LightCard = (card: ICard) => {
    return(
        <Reveal className={s.Card_light}>
            <h3 className={s.Card__H3_light}>{card.title}</h3>
            <span className={s.Card__Description_light}>{card.description}</span>
        </Reveal>
    )
}
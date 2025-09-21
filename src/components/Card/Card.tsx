import {ICard} from "../../lib";

import s from './Card.module.scss';
import { Reveal } from "../Reveal/Reveal";

export const Card = (card: ICard) => {
    return(
        <Reveal className={s.Card} key={card.id + card.title}>
            <h3 className={s.Card__H3}>{card.title}</h3>
            <div className={s.Card__Description}>{card.description}</div>
        </Reveal>
    )
}
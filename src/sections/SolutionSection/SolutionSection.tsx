import {SOLUTIONS} from "../../lib/constants";
import {Reveal} from "../../components/Reveal/Reveal";

import s from './SolutionSection.module.scss';

export const SolutionSection = () => {
    return(
        <section id="solution" className={s.SolutionSection}>
            <Reveal>
                <h2 className={s.SolutionSection__H2}>
                    Разрабатываемый контроллер "КУ-1" - решение актуальных проблем резервной энергетики
                </h2>
            </Reveal>

            <div className={s.SolutionSection__Advantages}>
                {SOLUTIONS.map(solution => (
                    <Reveal key={solution}>
                        <span className={s.SolutionSection__Text}>{solution}</span>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
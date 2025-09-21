
import s from './PathSection.module.scss';
import {Reveal} from "../../components/Reveal/Reveal";
import {IStage, STAGES} from "../../lib";

export const PathSection = () => {
    const currentStage: IStage | undefined = STAGES.find((s) => s.status === 'current');

    return(
        <section id="path" className={s.PathSection}>
            <Reveal>
                <h2 className={s.PathSection__H2}>
                    Вот такой путь мы прошли, чтобы уже сейчас предложить вам качественный продукт
                </h2>
            </Reveal>

            {currentStage && (
                <Reveal>
                    <div className={s.PathSection__Current}>Текущий этап: {currentStage.title}</div>
                </Reveal>
            )}

            <div className={s.PathSection__Row}>
                {STAGES.map((stage, index) => {
                    const stepClass = `${s.Step} ${stage.status === 'done' ? s.Step_done : stage.status === 'current' ? s.Step_current : s.Step_upcoming}`;
                    const connectorActive = stage.status !== 'upcoming';
                    return (
                        <div key={stage.id + stage.title} className={s.PathSection__Item}>
                            <Reveal className={stepClass}>
                                <div className={s.Step__Dot} />
                                <span className={s.Step__Title}>{stage.title}</span>
                            </Reveal>
                            {index < STAGES.length - 1 && (
                                <div className={`${s.Connector} ${connectorActive ? s.Connector_active : ''}`} />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
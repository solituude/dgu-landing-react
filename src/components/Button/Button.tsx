import s from './Button.module.scss';
export const Button = () => {
    return(
        <button className={s.Button}>
            <span className={s.Button__Text}>
                 Получить консультацию
            </span>
        </button>
    )
}
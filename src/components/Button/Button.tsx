import s from './Button.module.scss';
export const Button = () => {
    return(
        <button className={s.Button} onClick={() => { window.location.href = 'mailto:desyatovma10@gmail.com'; }}>
            <span className={s.Button__Text}>
                 Получить консультацию
            </span>
        </button>
    )
}
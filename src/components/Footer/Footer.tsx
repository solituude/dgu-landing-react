import s from './Footer.module.scss';
export const Footer = () => {
    return(
        <footer className={s.Footer}>
            <div className={s.Footer__CompanyInfo}>
                <span className={s.Footer__Subtext}>ООО "РИСЭГ"</span>
                <span className={s.Footer__Subtext}>ИНН - 6376031392</span>
                <span className={s.Footer__Subtext}>ОГРН - 1246300030074</span>
            </div>
            <span className={s.Footer__Subtext}>
                Проект создан при поддержке Федерального государственного бюджетного учреждения
                «Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках
                программы «Студенческий стартап» федерального проекта «Платформа университетского
                технологического предпринимательства»
            </span>
        </footer>
    )
}
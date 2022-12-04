import css from "./Header.module.css"
import {ButtonLink} from "../ButtonLink/ButtonLink";

export const Header = () => {
    return (
        <header className="d-flex justify-content-between px-5 text-light pt-3 mb-5" >
            <div>
                <h3 className={css.logo}>BLOG</h3>
            </div>
            <nav className="d-flex justify-content-between">
                <ul className={css.ul}>
                    <li><ButtonLink href="">Главная</ButtonLink></li>
                    <li><ButtonLink href="/profile">Профиль</ButtonLink></li>
                    <li><ButtonLink href="/about">О нас</ButtonLink></li>
                </ul>
            </nav>
        </header>
    );
}
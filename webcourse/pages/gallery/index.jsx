
import css from "./index.module.css"
export default function Gallery() {
    return <html className={css.html}>
        <head>
            <title>Галлерея</title>
        </head>
        <body>
            <h1>Картинкa</h1>
            <img className={css.img} src="https://cdn.shazoo.ru/437852_Mh7xdn0GYK_ismail_inceoglu_redrouf.jpg"/>
        </body>
    </html>;
}
import React, {useState, useEffect} from "react";
import css from "./index.module.css"
import {Photos} from "../../components/Photos/Photos";


export default function Gallery() {
    let [content, setContent] = useState([
        [
            "Картинка",
            "https://cdn.shazoo.ru/437852_Mh7xdn0GYK_ismail_inceoglu_redrouf.jpg"
        ]
    ]);
    let [value1, setValue1] = useState("");
    let [value2, setValue2] = useState("");
    function handleClick(e) {
        e.preventDefault();
        setContent(LastState => [[value1, value2], ...LastState]);
        setValue1("");
        setValue2("");
    }
    return (
        <main  className={css.main}>
            <h1 className='h1 text-center mb-3 text-light'>Галерея</h1>

                {/*<div className={css.div}>*/}
            <form onSubmit={handleClick}>
                <div className="col p-3 bg-secondary rounded-3 m-2 my-auto mb-5 px-5">
                    <input type="text" value={value2} onChange={e => setValue2(e.target.value)} placeholder="Введите cсылку на изображение" className="form-control row mb-2"/>
                    <input type="text" value={value1} onChange={e => setValue1(e.target.value)} placeholder="Введите подпись" className="form-control row mb-2"/>
                    <button className='btn btn-info row' type="submit">Добавить фото</button>
                </div>
            </form>
            <Photos content={content} />
        </main>)
}
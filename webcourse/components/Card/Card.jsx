import css from "./Card.module.css"

export const Card = ({img, author}) => {
    return (
        <div className="mb-2">
            <div className="">
                <img className="w-100 rounded-5 " src={img}/>
            </div>
            <div className="mt-2 d-flex justify-content-start">
                <div className={css.ava}/>
                <p className="mx-3 text-light">{author}</p>
            </div>
        </div>
    );
}
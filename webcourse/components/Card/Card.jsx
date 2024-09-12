import css from "./Card.module.css"
import Link from "next/link";

export const Card = ({img, title, tags, id}) => {
    return (
        <div className={css.divo}>
            <div className="p-2">
                <img className="w-100 rounded-5 " src={img}/>
            </div>
            <div className="p-3">
                {tags.map(tag => (
                    <span className="text-light mx-2">{tag}</span>
                ))}
                {/*<span className="text-light"></span>*/}
                <Link href={`/blog/${id}`} className="text-decoration-none">
                    <h2 className="h2 text-decoration-none text-light mt-3 ">{title}</h2>
                </Link>
            </div>
            {/*<div className="mt-2 d-flex justify-content-start">*/}
            {/*    <div className={css.ava}/>*/}
            {/*    <p className="mx-3 text-light">{author}</p>*/}
            {/*</div>*/}
        </div>
    );
}
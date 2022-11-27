import css from "./Photos.module.css";
import Link from "next/link";

export const Photos = ({content}) => {
    return (
        <div className={css.div}>
            {content.map(el => (
                <div className="m-2  mb-5 ">
                    <h5 className="text-light">{el[0]}</h5>
                    <Link href={{ pathname: '/gallery/photoMax', query: { keyword: el[1] } }}>
                    <img className="w-100 rounded-3" src={el[1]}/>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export async function getStaticProps(context) {
    return {
        props: {},
    };
}

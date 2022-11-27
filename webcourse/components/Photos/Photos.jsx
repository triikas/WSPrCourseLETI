import css from "./Photos.module.css";


export const Photos = ({content}) => {
    function PhotoPage() {

    }
    return (
        <div className={css.div}>
            {content.map(el => (
                <div className="m-2  mb-5 ">
                    <h5 className="text-light">{el[0]}</h5>
                    <img className="w-100 rounded-3" src={el[1]} onClick={}/>
                </div>
            ))}
        </div>
    );
}



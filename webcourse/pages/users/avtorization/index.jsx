import {Input} from "../../../components/Input/Input";
import {ButtonLink} from "../../../components/ButtonLink/ButtonLink";
import {useState} from "react";
import postFetch from "../../../utils/Fetch";
import {setCookie} from "../../../utils/setCokies";
import {useRouter} from "next/router";
import {Layout} from "../../../components/Layout/Layout";


const Avt = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    function FormHandler(e) {
        e.preventDefault();
        postFetch("https://norma.nomoreparties.space/api/auth/register", {
                email,
                password,
        }).then(res => {
            setCookie("accessToken", res.accessToken, 1);
            setCookie("refreshToken", res.refreshToken);
            router.push("/");
        })
    }
    return (
        <Layout title="Вход" onlyUnAuth>
        <form className="d-flex flex-column mt-5" onSubmit={FormHandler}>
            <Input onChange={e => setEmail(e.target.value)} type="email" className="w-100 float-start form-control" placeholder="Почта" value={email}></Input>
            <Input onChange={e => setPassword(e.target.value)} type="password" className="w-100 float-start form-control" placeholder="Пароль" value={password}></Input>
            <div className="d-flex justify-content-center"><button type="submit" className="w-25 btn btn-success">Готово</button></div>
            <div className="d-flex justify-content-center"><ButtonLink href="/users/registration" className="row">Зарегистрироваться</ButtonLink></div>
        </form>
        </Layout>
    );
};

export default Avt;
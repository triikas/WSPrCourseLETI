// import React, {useState, useEffect} from "react";

import {Layout} from "../components/Layout/Layout";
import {Header} from "../components/Header/Header";
import {Card} from "../components/Card/Card";

const Home = ({data}) => {
    console.log(data);
    return (
        <Layout title="Главная">
            <header>
                <Header />
            </header>
            <main className="">
                {data.map((el, i) => (
                    <Card key={i} id={i} {...el} />
                ))}

            </main>
        </Layout>
    )
}

export async function getStaticProps(context) {

    const result = await fetch("https://leti.kzteams.ru/api/blog/page")
        .then(res => {
            if (res.ok) return res.json();
            else throw Error(res.statusText);
        })
        .catch(err => console.error(err));
    return {
        props: {
            data: [...result],
        },
        revalidate: 100,
    };
}
export default Home;
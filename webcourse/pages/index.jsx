// import React, {useState, useEffect} from "react";

import {Layout} from "../components/Layout/Layout";
import {Header} from "../components/Header/Header";
import {Card} from "../components/Card/Card";

export default function Home() {
    return (
        <Layout title="Главная">
            <header>
                <Header />
            </header>
            <main className="container jo">
                <div className="row paz">
                    <div className="col-6 px-1">
                        <Card author="Тралала" img="https://i.pinimg.com/originals/b0/6c/5f/b06c5fcb74c893501ba304926a2a648a.jpg"/>
                        <Card author="Goblin" img="https://cdn1.ozone.ru/s3/multimedia-3/6122399067.jpg"/>
                        <Card author="Hfl" img="https://phonoteka.org/uploads/posts/2021-06/1622566943_22-phonoteka_org-p-atmosfernie-arti-noch-krasivo-24.jpg"/>
                    </div>
                    <div className="col-6 px-1">
                        <Card author="Пичу Пидо" img="https://catherineasquithgallery.com/uploads/posts/2021-03/1614719399_26-p-foni-dlya-artov-28.jpg"/>
                        <Card author="Лунтик" img="https://i.pinimg.com/originals/ea/0b/eb/ea0beb8c7b6a5e4d8fb11c481966ea05.jpg"/>
                        <Card author="Карло" img="https://www.wallpaperflare.com/static/918/527/747/fantasy-art-artwork-gray-leafed-wallpaper.jpg"/>
                    </div>

                </div>
                <div className="row zap">
                    <div className="col-4 px-1">
                        <Card author="Тралала" img="https://i.pinimg.com/originals/b0/6c/5f/b06c5fcb74c893501ba304926a2a648a.jpg"/>
                        <Card author="Goblin" img="https://cdn1.ozone.ru/s3/multimedia-3/6122399067.jpg"/>
                        <Card author="Hfl" img="https://phonoteka.org/uploads/posts/2021-06/1622566943_22-phonoteka_org-p-atmosfernie-arti-noch-krasivo-24.jpg"/>
                    </div>
                    <div className="col-4 px-1">
                        <Card author="Пичу Пидо" img="https://catherineasquithgallery.com/uploads/posts/2021-03/1614719399_26-p-foni-dlya-artov-28.jpg"/>
                        <Card author="Лунтик" img="https://i.pinimg.com/originals/ea/0b/eb/ea0beb8c7b6a5e4d8fb11c481966ea05.jpg"/>
                        <Card author="Карло" img="https://www.wallpaperflare.com/static/918/527/747/fantasy-art-artwork-gray-leafed-wallpaper.jpg"/>
                    </div>
                    <div className="col-4 px-1">
                        <Card author="Пичу Пидо" img="https://phonoteka.org/uploads/posts/2021-06/1622761796_28-phonoteka_org-p-oboi-na-telefon-vertikalnie-arti-krasivo-29.jpg"/>
                        <Card author="Лунтик" img="https://phonoteka.org/uploads/posts/2021-05/1622273017_7-phonoteka_org-p-filosofskie-arti-krasivo-7.jpg"/>
                        <Card author="Карло" img="https://i.pinimg.com/originals/b1/9a/d8/b19ad8aa36ca79cbc8f231d68818919e.jpg"/>
                    </div>
                </div>
                <div className="row zap2">
                    <div className="col-3 px-1">
                        <Card author="Тралала" img="https://i.pinimg.com/originals/b0/6c/5f/b06c5fcb74c893501ba304926a2a648a.jpg"/>
                        <Card author="Goblin" img="https://cdn1.ozone.ru/s3/multimedia-3/6122399067.jpg"/>
                        <Card author="Hfl" img="https://phonoteka.org/uploads/posts/2021-06/1622566943_22-phonoteka_org-p-atmosfernie-arti-noch-krasivo-24.jpg"/>
                    </div>
                    <div className="col-3 px-1">
                        <Card author="Пичу Пидо" img="https://catherineasquithgallery.com/uploads/posts/2021-03/1614719399_26-p-foni-dlya-artov-28.jpg"/>
                        <Card author="Лунтик" img="https://i.pinimg.com/originals/ea/0b/eb/ea0beb8c7b6a5e4d8fb11c481966ea05.jpg"/>
                        <Card author="Карло" img="https://www.wallpaperflare.com/static/918/527/747/fantasy-art-artwork-gray-leafed-wallpaper.jpg"/>
                    </div>
                    <div className="col-3 px-1">
                        <Card author="Пичу Пидо" img="https://phonoteka.org/uploads/posts/2021-06/1622761796_28-phonoteka_org-p-oboi-na-telefon-vertikalnie-arti-krasivo-29.jpg"/>
                        <Card author="Лунтик" img="https://phonoteka.org/uploads/posts/2021-05/1622273017_7-phonoteka_org-p-filosofskie-arti-krasivo-7.jpg"/>
                        <Card author="Карло" img="https://i.pinimg.com/originals/b1/9a/d8/b19ad8aa36ca79cbc8f231d68818919e.jpg"/>
                    </div>
                    <div className="col-3 px-1">
                        <Card author="Пичу Пидо" img="https://i.pinimg.com/originals/e2/96/d7/e296d7fac962a84ba5e4c430f1c46023.jpg"/>
                        <Card author="Лунтик" img="https://i.pinimg.com/originals/69/fd/a1/69fda11dd054b88b26219778255f36ba.jpg"/>
                        <Card author="Карло" img="https://i.pinimg.com/originals/b1/9a/d8/b19ad8aa36ca79cbc8f231d68818919e.jpg"/>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
import React, {useState, useEffect} from "react";
import css from "./index.module.css"
import {useRouter} from "next/router";
import Link from "next/link";

export default function PhotoMax() {
    const { asPath } = useRouter();
    let query = asPath.split('?keyword=')[1];
    query = String(query).replaceAll("%3A", ":");
    query = String(query).replaceAll("%2F", "/");

    return (<main  className={css.main}>
        <div className=" pb-5">
                <img className="w-100  rounded-3" src={query}/>
        </div>
    </main>)
}
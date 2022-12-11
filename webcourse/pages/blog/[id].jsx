import {useRouter} from "next/router";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";


const BlogPage = (props) => {
    const router = useRouter();
    return <>
        <h1 className="text-light text-center mt-5">{props.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: props.data}} className="text-light p-5"></article>
    </>
}

export async function getStaticProps(context) {
    const pageId = context.params.id;
    const page = await fetch(`https://leti.kzteams.ru/api/blog/${pageId}`).then((res) => res.json());
    return {
        props: page,
    }
}
export async function getStaticPaths() {
    const pageLength = await fetch("https://leti.kzteams.ru/api/blog/length").then((res) => res.json());
    const res = Array.from(pageLength).map((el, i) => {
        return {params: {id: String(i)}};
    })
    return {
        paths: res,
        fallback: false,
    };
}

export default BlogPage;
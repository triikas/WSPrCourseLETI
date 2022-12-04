import 'bootstrap/dist/css/bootstrap.css'
import '../styles/styles.css'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp
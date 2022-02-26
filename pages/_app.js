import Layout from "../components/Layout";
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import {NextUIProvider} from '@nextui-org/react'; //Import NextUI

function MyApp({Component, pageProps}) {
    return (
        <NextUIProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>

        </NextUIProvider>

    )
}

export default MyApp

/**
 * En esta clase se puede definir la "plantilla" de la aplicación, tales como el header
 * y footer, y el archivo de estilos
 */

import Head from 'next/head';

// Componentes de React importados que se definen en la "plantilla"
import Header from '~/components/layout/header/Header'
import Footer from '~/components/layout/footer/Footer'

// Importe glogal en la aplicación del archivo principal de estilos (No se necesitar incluir en otras vistas)
import '~/styles/style.scss'

import type {AppProps} from 'next/app'

function App({Component, pageProps}: AppProps) {
    return (
        <>
            {/* Componente de cabecera en el que se puede incluir el titulo del sitio, metadatos, estilos, librerias js, etc. */}
            {/* Este componente puede ser implementado en cada vista (Por ejemplo para modificar el titulo en cada una) */}
            <Head>
                <link href="/css/bootstrap.min.css" rel="stylesheet"></link>
                <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js" integrity="sha384-3Nqiqht3ZZEO8FKj7GR1upiI385J92VwWNLj+FqHxtLYxd9l+WYpeqSOrLh0T12c" crossOrigin="anonymous"></script>
            </Head>

            {/* Componente personalizado */}
            <Header />

            {/* Componente principal que corresponde al contenido de cada vista, DEBE ir y no se debe cambiar */}
            <Component {...pageProps} />

            <Footer />
        </>
    )
}

export default App
import '../styles/global.scss'
import { Html } from "next/document";
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => prev = !menuOpen)
  }

  const closeMenu = () => {
    if (menuOpen === true) {
      setMenuOpen(prev => prev = !menuOpen)
    }
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="This is my art portfolio - Son Rice" />
        <meta name="keywords"
          content="art, portfolio, jobs, Phan Hai Phan, Sonrice, designer, Artist, Raw Studio" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
        <title>Creative director - Illustration - 3D CGI | Son Rice</title>
      </Head>
      <style global jsx>{`
                    @font-face {
                      font-family: 'gilroymedium';
                      src: url('/fonts/Gilroy-Medium.woff2') format('woff2'),
                        url('/fonts/Gilroy-Medium.woff') format('woff');
                      font-weight: normal;
                      font-style: normal;
                      font-display: swap;
                    }
                    
                    @font-face {
                      font-family: 'gilroylight';
                      src: url('/fonts/GILROY-LIGHT.woff2') format('woff2'),
                        url('/fonts/GILROY-LIGHT.woff') format('woff');
                      font-weight: normal;
                      font-style: normal;
                      font-display: swap;
                    }
                    
                    @font-face {
                      font-family: 'gilroyregular';
                      src: 
                      url('/fonts/GILROY-REGULAR.woff2') format('woff2'),
                        url('/fonts/GILROY-REGULAR.woff') format('woff'),
                        url('/fonts/GILROY-REGULAR.eot') format('eot');
                    
                      font-weight: normal;
                      font-style: normal;
                      font-display: swap;
                    }
                    
                        body {
                            font-family: 'gilroymedium', Helvetica, sans-serif, Calibri;
                        }
            `}</style>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <div className={"container"}>
        <Component {...pageProps} menuOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      </div>
    </>
  )
}

export default MyApp

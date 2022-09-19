import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav } from "@components/index"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
      <Nav />
      <Component {...pageProps} />
    </>
}

export default MyApp

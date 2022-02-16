import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Bind } from "nemix/Bind";

function RootComponent({ Component, pageProps }: AppProps) {
  return <Bind><Component {...pageProps} /></Bind>
}

export default RootComponent

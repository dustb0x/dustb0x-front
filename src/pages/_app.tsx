import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  const moralisAppId = process.env.moralisAppId
  const moralisServerURL = process.env.modalisServerUrl

  const lightTheme = createTheme({
    type: 'light'
  })

  const darkTheme = createTheme({
    type: 'dark'
  })
  return (
    <MoralisProvider
      appId={moralisAppId}
      serverUrl={moralisServerURL}
    >
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </MoralisProvider>
  )
}

export default MyApp

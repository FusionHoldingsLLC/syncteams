import { ColorSchemeScript } from '@mantine/core'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Providers from 'src/components/providers'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Snyc Tech',
  description: 'Snyc Tech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark' data-theme='dark'>
      <head>
        <meta charSet='UTF-8' />
        <link rel='stylesheet' href='/globals.css?v=123' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap'
          rel='stylesheet'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Sync Tech</title>

        <ColorSchemeScript defaultColorScheme='light' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

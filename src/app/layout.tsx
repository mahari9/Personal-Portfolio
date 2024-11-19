import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { AOSInit } from './components/AOS';
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mahari Tsegay Portfolio',
  description: 'Personal portfolio website developed using React.js and Next.js',
  openGraph: {
    title: 'Mahari Tsegay Portfolio',
    description: 'Personal portfolio website developed using React.js and Next.js',
    url: 'https://mahari-slai.onrender.com',
    images: ['https://github.com/Lordwill1/my_portfolio/assets/105258746/fc32b316-0838-432c-9e66-f8279c62bc6b'],
    type: 'website',
  },
  icons: {
    icon: '/favicon_io/favicon.ico',
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },

  manifest: 'https://mahari-slai.render.com/manifest.json',

  twitter: {
    card: 'summary_large_image',
    title: 'Mahari Tsegay | Portfolio',
    description: 'Personal portfolio website developed using React.js and Next.js',
    images: ['https://nextjs.org/og.png'],
  },

  other: {
    'google-site-verification': 'verification_token',
    viewport: 'width=device-width, initial-scale=1',
    'itemprop:name': 'Mahari Tsegay | Portfolio',
    'itemprop:description': 'Personal portfolio website developed using React.js and Next.js',
    'itemprop:image': 'https://github.com/Lordwill1/my_portfolio/assets/105258746/fc32b316-0838-432c-9e66-f8279c62bc6b',
    robots: 'index, follow',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />  
      <body className={raleway.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

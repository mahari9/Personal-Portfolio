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
    url: 'https://mahari.onrender.com',
    images: ['https://github.com/mahari9/Personal-Portfolio/blob/master/public/img/screenshot.png'],
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

  manifest: 'https://mahari.onrender.com/manifest.json',

  twitter: {
    card: 'summary_large_image',
    title: 'Mahari Tsegay | Portfolio',
    description: 'Personal portfolio website developed using React.js and Next.js',
    images: ['https://github.com/mahari9/Personal-Portfolio/blob/master/public/img/socialtag.png'],
  },

  other: {
    'google-site-verification': 'verification_token',
    'itemprop:name': 'Mahari Tsegay | Portfolio',
    'itemprop:description': 'Personal portfolio website developed using React.js and Next.js',
    'itemprop:image': 'https://github.com/mahari9/Personal-Portfolio/blob/master/public/img/screenshot.png',
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

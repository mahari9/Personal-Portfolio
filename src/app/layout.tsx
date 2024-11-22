import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { AOSInit } from './components/AOS';
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mahari.onrender.com'),
  title: 'Mahari Tsegay Portfolio',
  description: 'Personal portfolio website developed using React.js and Next.js',
  openGraph: {
    title: 'Mahari Tsegay Portfolio',
    description: 'Personal portfolio website developed using React.js and Next.js',
    images: '/img/screenshot.png',
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
    images: '/img/socialtag.png',
  },

  other: {
    'google-site-verification': '36GlhhrMw3dM5mXgzxcctpx3O7Wfho1vM_DgWRdU16U',
    'itemprop:name': 'Mahari Tsegay | Portfolio',
    'itemprop:description': 'Personal portfolio website developed using React.js and Next.js',
    'itemprop:image': '/img/screenshot.png',
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

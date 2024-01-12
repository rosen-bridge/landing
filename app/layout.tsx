import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import '@iconscout/unicons/css/line.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Appbar from "../components/layouts/Appbar";
import Footer from "../components/layouts/Footer";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rosen Bridge',
  description: 'Rosen Bridge, an open-source protocol for cross-chain asset transfers',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Appbar />
                {children}
                <Footer/>
            </body>
            {
                process.env.NEXT_PUBLIC_GA_ID && (
                    <>
                        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
                        <Script id="google-analytics">
                            {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                            `}
                        </Script>
                    </>
                )
            }
        </html>
    )
}

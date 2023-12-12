import './globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import '@iconscout/unicons/css/line.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Appbar from "../components/layouts/Appbar";
import Footer from "../components/layouts/Footer";

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
        </html>
    )
}

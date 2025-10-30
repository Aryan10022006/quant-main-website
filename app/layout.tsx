import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Quant Community, IIT Bombay - Pioneering Quantitative Finance",
  description: "The official hub for IIT Bombay's Quant Community, driving innovation in algorithmic trading, data analytics, and financial research.",
  keywords: ["quantitative finance", "IIT Bombay", "algorithmic trading", "quant community", "data science", "finance", "trading"],
  authors: [{ name: "Quant Community, IIT Bombay" }],
  creator: "Quant Community, IIT Bombay",
  publisher: "Quant Community, IIT Bombay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quant-iitb.vercel.app",
    title: "Quant Community, IIT Bombay",
    description: "The official hub for IIT Bombay's Quant Community, driving innovation in algorithmic trading, data analytics, and financial research.",
    siteName: "Quant Community, IIT Bombay",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quant Community, IIT Bombay",
    description: "The official hub for IIT Bombay's Quant Community, driving innovation in algorithmic trading, data analytics, and financial research.",
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
      { url: '/images/qc_white_logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/qc_white_logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-dark-950 text-dark-50 antialiased">
        <Navbar />
        <main className="min-h-screen page-enter">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

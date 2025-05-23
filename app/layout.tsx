import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";

import { Footer, Header, Subscribe } from './components';
import Banner from './components/banner';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton'
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Shop.dr',
  description: 'E-Commerce App'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${anton.variable} antialiased font-sans`}>
        <Banner />
        <Header />
        {children}
        <Subscribe />
        <Footer />
      </body>
    </html>
  );
}

import './../public/styles.css';
import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
// import Head from 'next/head';
import { Inter } from 'next/font/google';
import meta from '@/data/meta';

const inter = Inter({ subsets: ['latin'] });
const { title, description, url, images, type, icons, card } = meta;

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    images,
    type,
    icons,
  },
  twitter: {
    title,
    description,
    card,
    images,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-WF72HLVH4W" />
    </html>
  );
}

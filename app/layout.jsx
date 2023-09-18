import './../public/styles.css';
import './globals.css';
// import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Carp Travel - the most beautiful parts of the Carpathians',
  description:
    'Unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
  openGraph: {
    title: 'Carp Travel - the most beautiful parts of the Carpathians',
    description:
      'Unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
    url: 'https://carp-travel-xi.vercel.app/',
    images: {
      url: 'https://carp-travel-xi.vercel.app/_next/image?url=%2Fabout%2Fslide3.png&w=384&q=75',
    },
    type: 'website',
    icons: { icon: '/favicon.ico' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

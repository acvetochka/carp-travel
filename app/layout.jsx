import './../public/styles.css';
import '@/styles/globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import {meta} from '@/data/meta';

const inter = Inter({ subsets: ['latin'] });

export const metadata = meta;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-WF72HLVH4W" />
    </html>
  );
}

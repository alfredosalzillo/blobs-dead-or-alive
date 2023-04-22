import './globals.css';
import { Ranchers } from 'next/font/google';
import React from 'react';

const ranchers = Ranchers({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ranchers.className}>{children}</body>
    </html>
  );
}

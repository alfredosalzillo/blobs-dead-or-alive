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
    <main className={ranchers.className}>
      {children}
    </main>
  );
}

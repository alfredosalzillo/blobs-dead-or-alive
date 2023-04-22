import './globals.css';
import { Ranchers } from 'next/font/google';
import React from 'react';
import { Metadata } from 'next';

const ranchers = Ranchers({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Blobs - Dead Or Alive',
  applicationName: 'Blobs - Dead Or Alive',
  description: 'This blob is WANTED! Dead or Alive 100PT Rewards!',
  authors: [
    {
      name: 'Alfredo Salzillo',
    },
  ],
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#000000',
  formatDetection: {
    telephone: false,
  },
  manifest: '/blobs-dead-or-alive/manifest.json',
  other: {
    'og:title': 'Blobs - Dead Or Alive',
    'og:description': 'This blob is WANTED! Dead or Alive 100PT Rewards!',
    'og:image': '/blobs-dead-or-alive/assets/wanted-preview.png',
  },
  icons: {
    apple: '/blobs-dead-or-alive/icons/apple-icon-180x180-dunplab-manifest-51508.png',
  },
};

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

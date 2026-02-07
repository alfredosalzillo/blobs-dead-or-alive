import type React from "react";
import type { Metadata, Viewport } from "next";
import { Ranchers } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const ranchers = Ranchers({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Blobs Dead Or Alive",
  applicationName: "Blobs Dead Or Alive",
  description: "This blob is WANTED! Dead or Alive 100PT Rewards!",
  authors: [
    {
      name: "Alfredo Salzillo",
    },
  ],
  formatDetection: {
    telephone: false,
  },
  manifest: "/blobs-dead-or-alive/manifest.json",
  other: {
    "og:title": "Blobs Dead Or Alive",
    "og:description": "This blob is WANTED! Dead or Alive 100PT Rewards!",
    "og:image": "/blobs-dead-or-alive/assets/wanted-preview.png",
  },
  icons: {
    apple: "/blobs-dead-or-alive/icons/icon-192x192.png",
    icon: {
      url: "/blobs-dead-or-alive/favicon.ico",
      type: "image/x-icon",
      sizes: "any",
      rel: "icon",
    },
    shortcut: {
      url: "/blobs-dead-or-alive/favicon.ico",
      type: "image/x-icon",
      sizes: "any",
      rel: "icon",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#000000",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" dir="ltr">
    <body className={ranchers.className}>{children}</body>
    <GoogleAnalytics gaId="G-T9K99NE6JX" />
  </html>
);

export default RootLayout;

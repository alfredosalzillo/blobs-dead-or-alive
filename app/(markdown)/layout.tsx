import React from 'react';

import './markdown.css';
import Header from '@/components/Header';

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header title="Blobs Dead Or Alive" />
      <div className="markdown-body">
        {children}
      </div>
    </main>
  );
}

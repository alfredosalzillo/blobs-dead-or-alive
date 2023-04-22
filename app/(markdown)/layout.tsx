import React from 'react';
import './markdown.css';

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div className="markdown-body">
        {children}
      </div>
    </main>
  );
}

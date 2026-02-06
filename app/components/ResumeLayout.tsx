'use client';

import { ReactNode } from 'react';

interface ResumeLayoutProps {
  children: ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
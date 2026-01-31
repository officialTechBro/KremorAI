'use client';

import { useState } from 'react';
import ChatHeader from '@/components/common/chat-header';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`h-screen flex flex-col ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <ChatHeader isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
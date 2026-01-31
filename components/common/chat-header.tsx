'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Moon, Sun, Sparkles, Clock, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  isDark?: boolean;
  onThemeToggle?: () => void;
}

const ChatHeader = ({ isDark = false, onThemeToggle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <header className={`border-b ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="shrink-0">
            <Link href='/' className="block relative h-8 w-24 sm:w-28 md:w-32">
              <Image 
                src="/images/logo.png" 
                alt="Krémor.AI Logo" 
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            {onThemeToggle && (
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-white" />
                )}
              </button>
            )}

      

            {/* Marketplace */}
            <Link
              href="/marketplace"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isDark
                  ? 'hover:bg-gray-800 text-gray-300'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Marketplace</span>
            </Link>

            {/* History Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isDark
                    ? 'hover:bg-gray-800 text-gray-300'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">History</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isHistoryOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* History Dropdown Menu */}
              {isHistoryOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsHistoryOpen(false)}
                  />
                  
                  {/* Dropdown Content */}
                  <div className={`absolute right-0 top-full mt-2 w-64 rounded-lg shadow-2xl border overflow-hidden z-50 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-white border-gray-200'
                  }`}>
                    <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                      <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Recent History
                      </h3>
                    </div>
                    <div className="p-2 max-h-80 overflow-y-auto">
                      {/* Example history items */}
                      {['Design concept 1', 'Ankara pattern 2', 'Product layout 3'].map((item, index) => (
                        <Link
                          key={index}
                          href={`/history/${index}`}
                          className={`block p-3 rounded-lg transition-colors ${
                            isDark
                              ? 'hover:bg-gray-700 text-gray-300'
                              : 'hover:bg-gray-100 text-gray-700'
                          }`}
                          onClick={() => setIsHistoryOpen(false)}
                        >
                          <p className="text-sm">{item}</p>
                          <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            2 hours ago
                          </p>
                        </Link>
                      ))}
                    </div>
                    <div className={`p-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                      <Link
                        href="/history"
                        className="block text-center text-sm font-medium text-amber-600 hover:text-amber-500 transition-colors"
                        onClick={() => setIsHistoryOpen(false)}
                      >
                        View All History
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark
                ? 'hover:bg-gray-800 text-gray-300'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <nav className="space-y-2">
              <Link
                href="/marketplace"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isDark
                    ? 'hover:bg-gray-800 text-gray-300'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Marketplace</span>
              </Link>
              
              <Link
                href="/history"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isDark
                    ? 'hover:bg-gray-800 text-gray-300'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Clock className="w-5 h-5" />
                <span className="font-medium">History</span>
              </Link>

              {onThemeToggle && (
                <button
                  onClick={() => {
                    onThemeToggle();
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isDark
                      ? 'hover:bg-gray-800 text-gray-300'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span className="font-medium">Toggle Theme</span>
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default ChatHeader
'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Mic, Paperclip } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      // Mark chat as started
      if (!hasStarted) {
        setHasStarted(true);
      }

      // Add user message
      const userMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        content: inputValue,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      // Simulate AI response
      setTimeout(() => {
        const aiMessage: Message = {
          id: messages.length + 2,
          type: 'assistant',
          content: `Thank you for your message: "${inputValue}". I'm processing your request. How else can I assist you with your design project?`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Initial centered view (before any messages)
  if (!hasStarted) {
    return (
      <div className="h-full flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full space-y-8">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-gray-500 dark:text-white text-center mb-16 bozos-header">
            Kremor.AI Workspace
          </h1>

          <div className="space-y-3">
            {/* Input Container */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Textarea */}
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={handleKeyPress}
                placeholder="Ask anything, create anything"
                className="w-full px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 bg-transparent resize-none outline-none text-sm"
                rows={2}
              />

              {/* Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50">
                {/* Generate Button */}
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    !inputValue.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                      : 'bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate</span>
                </button>

                {/* Right Side Icons */}
                <div className="flex items-center gap-1">
                  <button
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Attach file"
                  >
                    <Paperclip className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Voice input"
                  >
                    <Mic className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Refresh"
                  >
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Helper Text */}
            <div className="text-center">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                KremorAI now generate based on desired input materials. Try Now!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Chat view (after first message)
  return (
    <div className="h-full flex flex-col">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-2xl rounded-2xl p-4 md:p-5 ${
                  message.type === 'user'
                    ? 'bg-gray-200 text-gray-900 dark:bg-amber-600 dark:text-white'
                    : 'bg-white text-gray-900 border border-gray-200 shadow-sm dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
                }`}
              >
                {message.type === 'assistant' && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                      KrémorAI
                    </span>
                  </div>
                )}
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
                <p className="text-xs mt-2 text-gray-400 dark:text-gray-500">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="rounded-2xl p-5 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area - Fixed at Bottom */}
      <div className="bg-white dark:bg-gray-900 p-4 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
            {/* Textarea */}
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Design..."
              className="w-full px-5 py-4 resize-none outline-none text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              rows={1}
              style={{ minHeight: '52px', maxHeight: '200px' }}
            />

            {/* Controls Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50">
              {/* Send Button */}
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  !inputValue.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                    : 'bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>

              {/* Right Side Icons */}
              <div className="flex items-center gap-1">
                <button
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Attach file"
                >
                  <Paperclip className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </button>
                <button
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Voice input"
                >
                  <Mic className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </button>
                <button
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Refresh"
                >
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Helper Text */}
          <div className="text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              KrémorAI can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage
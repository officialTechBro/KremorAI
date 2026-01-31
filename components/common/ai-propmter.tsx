'use client'

import { useAiPrompter } from '@/context/AiPrompter';
import { Send, X } from 'lucide-react';
import type { Message } from '@/lib/types';
import Image from 'next/image';

// interface Message {
//   type: 'user' | 'bot';
//   content: string;
// }

const  AiPrompter = () =>  {
  const { 
    isOpen, 
    showWelcome, 
    handleClose, 
    quickActions, 
    handleQuickAction, 
    handleKeyPress, 
    handleSend,
    messages,
    messagesEndRef,
    inputValue,
    setInputValue
  } = useAiPrompter()

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-y-0 right-0 top-30 w-full sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] bg-white shadow-2xl flex flex-col z-50 rounded-t-xl">
        {/* Header with Logo */}
        <div className="bg-linear-to-r from-amber-800 via-yellow-700 to-amber-800 p-4 flex items-center justify-between shrink-0 rounded-t-xl">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="shrink-0">
              <div className="block relative h-10 w-24 sm:w-28 md:w-32">
                <Image 
                  src="/images/logo.png" 
                  alt="Krémor.AI Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          
          <button
            onClick={handleClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {/* Main Content - Fixed height with flex */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages Container - Scrollable */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
            {showWelcome ? (
              <div className="bg-amber-50 border-2 border-yellow-500/80 rounded-xl p-4 sm:p-5 shadow-sm">
                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                  Hi! I&apos;m Kremor AI Ankara Design Generator,
                </h2>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  Your AI-powered design assistant. I can help you create design concepts, generate visual layouts, explore style variations, and answer questions about your design projects. What would you like to create?
                </p>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-xs sm:text-sm">Quick actions:</h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {quickActions.map((action: string, idx: number) => (
                      <li key={idx}>
                        <button
                          onClick={() => handleQuickAction(action)}
                          className="text-gray-700 text-xs sm:text-sm hover:text-amber-700 hover:translate-x-1 transition-all duration-200 text-left flex items-start group w-full"
                        >
                          <span className="mr-2 text-amber-600 group-hover:text-amber-700">•</span>
                          <span className="underline decoration-transparent group-hover:decoration-amber-600 transition-all">
                            {action}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message: Message, index: number) => (
                  <div key={index}>
                    {message.type === 'user' ? (
                      <div className="flex justify-end">
                        <div className="bg-gray-100 border border-gray-200 rounded-xl p-2.5 sm:p-3 shadow-sm max-w-[85%] sm:max-w-[80%]">
                          <p className="text-gray-800 text-xs sm:text-sm">{message.content}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-amber-50 border border-yellow-500/80 rounded-xl p-3 sm:p-4 shadow-sm">
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {message.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area - Fixed at bottom */}
          <div className="shrink-0 p-3 sm:p-4 md:p-6 pt-0 border-t border-gray-100">
            <div className="bg-white border-2 border-yellow-500/80 rounded-xl shadow-md p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                onKeyUp={handleKeyPress}
                placeholder="Ask me anything about Design..."
                className="flex-1 outline-none text-gray-700 text-xs sm:text-sm placeholder-gray-400 bg-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="p-2 hover:bg-yellow-50 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default AiPrompter
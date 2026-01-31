'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { Message } from '@/lib/types'

type AiPrompterContextValue = {
  // state
  messages: Message[]
  inputValue: string
  showWelcome: boolean
  isOpen: boolean
  quickActions: string[]
  messagesEndRef: React.RefObject<HTMLDivElement | null>

  // setters / handlers
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  handleQuickAction: (action: string) => void
  handleSend: () => void
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleClose: () => void
  handleOpen: () => void
}

const AiPrompterContext = createContext<AiPrompterContextValue | null>(null)

export function AiPrompterProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [showWelcome, setShowWelcome] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickActions = useMemo(
    () => [
      'Generate design concepts for my project',
      'Show design style options',
      'What design trends should I explore?',
      'Create layout variations for Ankara patterns',
    ],
    []
  )

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleQuickAction = (action: string) => {
    setShowWelcome(false)
    setMessages((prev) => [
      ...prev,
      { type: 'user', content: action },
      {
        type: 'bot',
        content:
          'Great question! Let me help you with that. I can provide detailed guidance on ' +
          action.toLowerCase() +
          '.',
      },
    ])
  }

  const handleSend = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return

    setShowWelcome(false)

    setMessages((prev) => [
      ...prev,
      { type: 'user', content: trimmed },
      {
        type: 'bot',
        content:
          `Thank you for your message! I'm processing your request about: "${trimmed}". ` +
          'How else can I assist you with your design project?',
      },
    ])

    setInputValue('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  const value: AiPrompterContextValue = {
    messages,
    inputValue,
    showWelcome,
    isOpen,
    quickActions,
    messagesEndRef,
    setInputValue,
    handleQuickAction,
    handleSend,
    handleKeyPress,
    handleClose,
    handleOpen,
  }

  return (
    <AiPrompterContext.Provider value={value}>
      {children}
    </AiPrompterContext.Provider>
  )
}

export function useAiPrompter() {
  const ctx = useContext(AiPrompterContext)
  if (!ctx) {
    throw new Error('useAiPrompter must be used within AiPrompterProvider')
  }
  return ctx
}

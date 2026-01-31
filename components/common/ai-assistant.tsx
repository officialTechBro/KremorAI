'use client'

import { Badge } from "@/components/ui/badge"
import { SparklesIcon } from "lucide-react"
import { useAiPrompter } from "@/context/AiPrompter"

const AiAssistant = () => {
    const {handleOpen} = useAiPrompter()
  return (
   <div className="fixed bottom-2 right-10" onClick={handleOpen}>
    <Badge
        variant='outline'
        className="px-2 py-2 md:px-4 md:py-2 mb-8 text-sm backdrop-blur-xs border-white/20 animate-pulse cursor-pointer"
    >
        <div className=" flex items-center md:space-x-3 py-3 px-3 md:py-4 md:px-8 rounded-full bg-primary">
            <SparklesIcon className="h-5 w-5 text-yellow-500/80 " />
            <span className="text-white text-xs font-medium hidden md:flex">African fashion designed by AI</span>
        </div>
    </Badge>
   </div>
  )
}
export default AiAssistant
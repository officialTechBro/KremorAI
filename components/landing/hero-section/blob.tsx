import { SparkleIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const BlobBadge = () => {
    return (
        <Badge
            variant='outline'
            className="px-6 py-2 mb-8 text-sm backdrop-blur-xs border-white/20"
        >
            <SparkleIcon className="h-4 w-4 text-yellow-500/80" />
            <span className="text-white text-xs font-medium">African fashion designed by AI</span>
        </Badge>
    )
}

const Blob = () => {
  return (
    <div className="absolute bottom-10 z-10 px-8 py-20 md:py-10  container">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
        <BlobBadge />

          {/* Main Heading */}
          <h1 className="text-8xl md:text-9xl lg:text-[150px] text-white mb-8 bozos-header font-thin">
            Kremor.AI
          </h1>

          {/* Subheading */}
          <div className="max-w-4xl space-y-4">
            <p className="text-white/90 text-sm md:text-[17px] leading-relaxed">
              Empowering sustainable fashion through the fusion of African heritage and artificial intelligence.
            </p>
            <p className="text-white/80 text-sm md:text-[17px] leading-relaxed">
              Revolutionizing the fashion industry through AI-enhanced African design and sustainable practices.
            </p>
          </div>
        </div>
    </div>
  )
}
export default Blob
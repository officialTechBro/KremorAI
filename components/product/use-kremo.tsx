import { SparklesIcon } from "lucide-react"
import { Badge } from "../ui/badge"

const UseKremor = () => {
  return (
    <section 
        className="bg-white py-16 md:py-24 bg-cover"
        style={{backgroundImage: `url('/images/About-pattern1.png')`}}
    >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl  mb-4 tracking-tight bozos-header">
            Don&apos;t see what you&apos;re looking for? 
          </h1>
          <p className="text-sm md:text-base max-w-3xl mx-auto">
            No worries! Use <strong>Kremo AI</strong> to design your own unique African fashion pieces
          </p>
          <Badge
                variant='outline'
                className="py-2 px-4 text-sm backdrop-blur-lg border-gray-200 mt-6"
            >
                <div className=" flex items-center space-x-3 py-4 px-15 md:px-30 rounded-full bg-primary hover:bg-primary/80 cursor-pointer">
                    <SparklesIcon className="h-5 w-5 text-yellow-500/80" />
                    <span className="text-white text-md font-medium uppercase tracking-wider">Use Kremor.AI</span>
                </div>
            </Badge>
        </div>
      </section>
  )
}
export default UseKremor